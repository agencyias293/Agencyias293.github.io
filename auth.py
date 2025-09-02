import os
import requests
from flask import Blueprint, request, jsonify, session, redirect, url_for
from urllib.parse import urlencode

auth_bp = Blueprint('auth', __name__)

# Configuración OAuth GitHub
GITHUB_CLIENT_ID = os.environ.get('GITHUB_CLIENT_ID', 'your_github_client_id')
GITHUB_CLIENT_SECRET = os.environ.get('GITHUB_CLIENT_SECRET', 'your_github_client_secret')
GITHUB_REDIRECT_URI = os.environ.get('GITHUB_REDIRECT_URI', 'http://localhost:5000/api/auth/callback')

@auth_bp.route('/login', methods=['GET'])
def github_login():
    """Inicia el proceso de autenticación con GitHub"""
    # Parámetros para la autorización de GitHub
    params = {
        'client_id': GITHUB_CLIENT_ID,
        'redirect_uri': GITHUB_REDIRECT_URI,
        'scope': 'read:user user:email',
        'state': 'random_state_string'  # En producción, usar un valor aleatorio seguro
    }
    
    # URL de autorización de GitHub
    github_auth_url = f"https://github.com/login/oauth/authorize?{urlencode(params)}"
    
    return jsonify({
        'auth_url': github_auth_url,
        'message': 'Redirect to this URL to authenticate with GitHub'
    })

@auth_bp.route('/callback', methods=['GET'])
def github_callback():
    """Maneja el callback de GitHub después de la autorización"""
    code = request.args.get('code')
    state = request.args.get('state')
    
    if not code:
        return jsonify({'error': 'Authorization code not provided'}), 400
    
    # Intercambiar el código por un token de acceso
    token_data = {
        'client_id': GITHUB_CLIENT_ID,
        'client_secret': GITHUB_CLIENT_SECRET,
        'code': code,
        'redirect_uri': GITHUB_REDIRECT_URI
    }
    
    headers = {'Accept': 'application/json'}
    
    try:
        # Solicitar token de acceso a GitHub
        token_response = requests.post(
            'https://github.com/login/oauth/access_token',
            data=token_data,
            headers=headers
        )
        token_response.raise_for_status()
        token_json = token_response.json()
        
        access_token = token_json.get('access_token')
        if not access_token:
            return jsonify({'error': 'Failed to obtain access token'}), 400
        
        # Obtener información del usuario de GitHub
        user_headers = {
            'Authorization': f'token {access_token}',
            'Accept': 'application/json'
        }
        
        user_response = requests.get(
            'https://api.github.com/user',
            headers=user_headers
        )
        user_response.raise_for_status()
        user_data = user_response.json()
        
        # Obtener emails del usuario
        email_response = requests.get(
            'https://api.github.com/user/emails',
            headers=user_headers
        )
        email_response.raise_for_status()
        emails = email_response.json()
        
        # Buscar el email principal
        primary_email = None
        for email in emails:
            if email.get('primary'):
                primary_email = email.get('email')
                break
        
        # Guardar información del usuario en la sesión
        session['user'] = {
            'id': user_data.get('id'),
            'login': user_data.get('login'),
            'name': user_data.get('name'),
            'email': primary_email,
            'avatar_url': user_data.get('avatar_url'),
            'access_token': access_token
        }
        
        # Redirigir al frontend con éxito
        return redirect('/?auth=success')
        
    except requests.RequestException as e:
        return jsonify({'error': f'GitHub API error: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'Authentication error: {str(e)}'}), 500

@auth_bp.route('/user', methods=['GET'])
def get_user():
    """Obtiene la información del usuario autenticado"""
    if 'user' not in session:
        return jsonify({'error': 'User not authenticated'}), 401
    
    user_data = session['user'].copy()
    # No devolver el token de acceso por seguridad
    user_data.pop('access_token', None)
    
    return jsonify({
        'authenticated': True,
        'user': user_data
    })

@auth_bp.route('/logout', methods=['POST'])
def logout():
    """Cierra la sesión del usuario"""
    session.pop('user', None)
    return jsonify({'message': 'Logged out successfully'})

@auth_bp.route('/status', methods=['GET'])
def auth_status():
    """Verifica el estado de autenticación"""
    return jsonify({
        'authenticated': 'user' in session,
        'user': session.get('user', {}).get('login') if 'user' in session else None
    })


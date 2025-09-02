# Configuración de GitHub OAuth para Agencyias293

## Pasos para Configurar la Aplicación OAuth en GitHub

### 1. Crear una Nueva OAuth App en GitHub

1. Ve a tu perfil de GitHub y navega a **Settings** > **Developer settings** > **OAuth Apps**
2. Haz clic en **"New OAuth App"**
3. Completa el formulario con la siguiente información:

   - **Application name:** Agencyias293
   - **Homepage URL:** http://localhost:5000 (para desarrollo) o tu dominio en producción
   - **Application description:** Agencia de Marketing Digital - Portal de Cliente
   - **Authorization callback URL:** http://localhost:5000/api/auth/callback (para desarrollo)

4. Haz clic en **"Register application"**

### 2. Obtener las Credenciales

Después de crear la aplicación, GitHub te proporcionará:
- **Client ID:** Un identificador público de tu aplicación
- **Client Secret:** Una clave secreta (¡manténla segura!)

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en el directorio raíz del backend (`/home/ubuntu/agencia-backend/`) con el siguiente contenido:

```bash
GITHUB_CLIENT_ID=tu_client_id_aqui
GITHUB_CLIENT_SECRET=tu_client_secret_aqui
GITHUB_REDIRECT_URI=http://localhost:5000/api/auth/callback
```

### 4. Para Producción

Cuando despliegues la aplicación en producción, actualiza:
- **Homepage URL:** https://tu-dominio.com
- **Authorization callback URL:** https://tu-dominio.com/api/auth/callback
- **GITHUB_REDIRECT_URI:** https://tu-dominio.com/api/auth/callback

## Endpoints de la API de Autenticación

- `GET /api/auth/login` - Inicia el proceso de autenticación
- `GET /api/auth/callback` - Maneja el callback de GitHub
- `GET /api/auth/user` - Obtiene información del usuario autenticado
- `GET /api/auth/status` - Verifica el estado de autenticación
- `POST /api/auth/logout` - Cierra la sesión del usuario

## Flujo de Autenticación

1. El usuario hace clic en "Login con GitHub"
2. Se redirige a `/api/auth/login` que devuelve la URL de autorización de GitHub
3. El usuario autoriza la aplicación en GitHub
4. GitHub redirige a `/api/auth/callback` con un código de autorización
5. El backend intercambia el código por un token de acceso
6. Se obtiene la información del usuario y se guarda en la sesión
7. El usuario es redirigido al frontend con el estado de autenticación

## Permisos Solicitados

La aplicación solicita los siguientes scopes de GitHub:
- `read:user` - Leer información básica del perfil del usuario
- `user:email` - Acceder a las direcciones de email del usuario

## Seguridad

- El Client Secret nunca se expone en el frontend
- Los tokens de acceso se almacenan de forma segura en la sesión del servidor
- Se utiliza HTTPS en producción para todas las comunicaciones
- Las sesiones tienen una duración limitada y se pueden revocar


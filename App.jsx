import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Search, PenTool, Megaphone, Code, Users, Star, Github } from 'lucide-react'
import logoAgencia from './assets/logo_agencia_digital.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const services = [
    {
      icon: Search,
      title: "SEO Estratégico",
      description: "Aumenta tu visibilidad en buscadores y atrae tráfico cualificado con nuestras estrategias de SEO avanzadas."
    },
    {
      icon: PenTool,
      title: "Marketing de Contenidos",
      description: "Conecta con tu audiencia a través de historias que venden y contenido que convierte."
    },
    {
      icon: Megaphone,
      title: "Publicidad Digital",
      description: "Genera leads y ventas con campañas optimizadas en Google Ads y Redes Sociales."
    },
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Creamos plataformas digitales funcionales, atractivas y orientadas a la conversión."
    }
  ]

  const testimonials = [
    {
      name: "María González",
      company: "TechStart SL",
      text: "Gracias a Agencyias293, hemos visto un crecimiento del 150% en nuestras ventas online. Su equipo es profesional y siempre está un paso adelante.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      company: "Innovación Local",
      text: "La estrategia SEO implementada por DigitalGrow nos posicionó en el top 3 de Google en solo 4 meses. Resultados increíbles.",
      rating: 5
    }
  ]

  const Navigation = () => (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={logoAgencia} alt="DigitalGrow Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-primary">Agencyias293</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => setActiveSection('services')}
              className={`text-sm font-medium transition-colors ${activeSection === 'services' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Servicios
            </button>
            <button 
              onClick={() => setActiveSection('cases')}
              className={`text-sm font-medium transition-colors ${activeSection === 'cases' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Casos de Éxito
            </button>
            <button 
              onClick={() => setActiveSection('about')}
              className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Acerca de Nosotros
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className={`text-sm font-medium transition-colors ${activeSection === 'contact' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Contacto
            </button>
          </div>

          <Button variant="outline" className="flex items-center space-x-2">
            <Github className="h-4 w-4" />
            <span>Login con GitHub</span>
          </Button>
        </div>
      </div>
    </nav>
  )

  const HeroSection = () => (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Agencia Digital Especializada
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Eleva Tu Negocio con 
              <span className="text-primary"> Marketing Digital</span> de Vanguardia
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              En Agencyias293, transformamos tu presencia online en resultados tangibles. 
              Desde estrategias innovadoras hasta implementaciones impecables, somos tu socio estratégico para el crecimiento digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center space-x-2">
                <span>Empieza Tu Transformación Digital</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Casos de Éxito
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Tráfico orgánico +150%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Conversiones +80%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">ROI +200%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const ServicesSection = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios Clave
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales diseñadas para impulsar tu éxito en el entorno digital. 
            Nos especializamos en servicios de alto impacto y resultados medibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const TestimonialsSection = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Historias de Éxito que Inspiran
          </h2>
          <p className="text-xl text-gray-600">
            La prueba de nuestro compromiso son los resultados de nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const AboutSection = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Tu Socio en el Crecimiento Digital
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Agencyias293 es más que una agencia; somos un equipo de expertos apasionados por el marketing digital 
              y dedicados a tu éxito. Combinamos creatividad, tecnología y análisis de datos para ofrecerte 
              soluciones personalizadas que generan un impacto real.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Orientación a Resultados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-gray-700">Transparencia Total</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Innovación Constante</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-gray-600">Proyectos Exitosos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción Cliente</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <div className="text-sm text-gray-600">ROI Promedio</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Soporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const ContactSection = () => (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Hablemos de Tu Próximo Gran Proyecto Digital
          </h2>
          <p className="text-xl text-gray-300">
            ¿Listo para llevar tu negocio al siguiente nivel? Contáctanos hoy mismo para una consulta gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300">Email:</p>
                <p className="text-white font-semibold">info@agencyias293.com</p>
              </div>
              <div>
                <p className="text-gray-300">Teléfono:</p>
                <p className="text-white font-semibold">+34 604 904 384</p>
              </div>
              <div>
                <p className="text-gray-300">Horario de Atención:</p>
                <p className="text-white font-semibold">Lunes a Viernes, 9:00 AM - 6:00 PM (GMT+1)</p>
              </div>
            </div>
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-gray-900">Solicita tu Consulta Gratuita</CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Servicio de Interés</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Selecciona un servicio</option>
                  <option>SEO</option>
                  <option>Marketing de Contenidos</option>
                  <option>Publicidad Digital</option>
                  <option>Desarrollo Web</option>
                  <option>Gestión de Redes Sociales</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  rows="4" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              <Button className="w-full">
                Enviar Mensaje
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoAgencia} alt="DigitalGrow Logo" className="h-8 w-auto" />
              <span className="text-lg font-bold">Agencyias293</span>
            </div>
            <p className="text-gray-400">
              Tu socio estratégico para el crecimiento digital. Transformamos tu presencia online en resultados tangibles.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>SEO Estratégico</li>
              <li>Marketing de Contenidos</li>
              <li>Publicidad Digital</li>
              <li>Desarrollo Web</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Acerca de Nosotros</li>
              <li>Casos de Éxito</li>
              <li>Blog</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Users className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Agencyias293. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {activeSection === 'home' && (
        <>
          <HeroSection />
          <ServicesSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
        </>
      )}
      
      {activeSection === 'services' && <ServicesSection />}
      {activeSection === 'cases' && <TestimonialsSection />}
      {activeSection === 'about' && <AboutSection />}
      {activeSection === 'contact' && <ContactSection />}
      
      <Footer />
    </div>
  )
}

export default App


import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Moon, Sun, Menu, X, Star, ArrowRight, Play, CheckCircle, Users, Award, TrendingUp, Globe } from 'lucide-react'
import './App.css'

// Import images
import komaLogo from './assets/koma-logo.jpg'
import heroBackground1 from './assets/hero-background-1.png'
import heroBackground2 from './assets/hero-background-2.png'
import teamChairman from './assets/team-chairman.png'
import teamCEO from './assets/team-ceo.png'
import teamCMO from './assets/team-cmo.png'
import caseStudyKenz from './assets/case-study-kenz.png'
import caseStudyJeep from './assets/case-study-jeep.png'
import caseStudyDental from './assets/case-study-dental.png'
import photoshoot1 from './assets/photoshoot-1.png'
import photoshoot2 from './assets/photoshoot-2.png'
import brandingBook1 from './assets/branding-book-1.png'
import brandingBook2 from './assets/branding-book-2.png'
import modeling3D from './assets/3d-modeling.png'
import animationWork from './assets/animation.png'

// Import service images
import serviceContentMarketing from './assets/service-content-marketing.png'
import serviceSocialMedia from './assets/service-social-media.png'
import serviceMediaBuying from './assets/service-media-buying.png'
import serviceBranding from './assets/service-branding.png'
import heroParticlesBg from './assets/hero-particles-bg.png'

// Import client logos
import clientVodafone from './assets/client-vodafone.png'
import clientGSK from './assets/client-gsk.png'
import clientSWVL from './assets/client-swvl.png'
import clientGhabbour from './assets/client-ghabbour.png'
import clientPetrojet from './assets/client-petrojet.png'
import clientBanque from './assets/client-banque-du-caire.png'
import clientAMDental from './assets/client-am-dental.png'
import clientHomesGuide from './assets/client-homes-guide.png'
import clientShamStation from './assets/client-sham-station.png'
import clientRokaPlast from './assets/client-roka-plast.png'
import clientSkiraCosmetics from './assets/client-skira-cosmetics.png'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

// Navigation Component
function Navigation({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Clients', path: '/clients' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 koma-glass backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={komaLogo} alt="KOMA Agency" className="h-10 w-10 rounded-lg" />
            <span className="text-2xl font-bold koma-gradient-text">KOMA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`koma-nav-item font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button className="hidden md:flex koma-gold-button">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="koma-gold-button w-full mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Particles Component
function HeroParticles() {
  return (
    <div className="koma-hero-particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="koma-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${8 + Math.random() * 8}s`
          }}
        />
      ))}
    </div>
  )
}

// Home Page Component
function HomePage() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const heroImages = [heroBackground1, heroBackground2]

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { number: '150+', label: 'Happy Clients' },
    { number: '500+', label: 'Projects Done' },
    { number: '8+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ]

  const services = [
    {
      title: 'Content Marketing',
      description: 'Strategic content creation that engages your audience and drives conversions.',
      icon: '📝',
      image: serviceContentMarketing,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Social Media Management',
      description: 'Complete social media strategy, content creation, and community management.',
      icon: '📱',
      image: serviceSocialMedia,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Media Buying',
      description: 'Data-driven advertising campaigns across all digital platforms.',
      icon: '📊',
      image: serviceMediaBuying,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Branding & Design',
      description: 'Complete brand identity development from concept to execution.',
      icon: '🎨',
      image: serviceBranding,
      color: 'from-orange-500 to-red-600'
    }
  ]

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      company: 'KENZ Fashion',
      text: 'KOMA Agency transformed our brand presence completely. Their creative approach and strategic thinking delivered exceptional results.',
      rating: 5
    },
    {
      name: 'Sarah Mohamed',
      company: 'United Jeep',
      text: 'Working with KOMA has been a game-changer for our digital marketing. Professional, creative, and results-driven.',
      rating: 5
    },
    {
      name: 'Omar Ali',
      company: 'AM Dental Clinic',
      text: 'The team at KOMA understands our industry and delivers campaigns that truly resonate with our target audience.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Perfect Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 koma-hero-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(75, 0, 130, 0.8), rgba(0, 0, 0, 0.6)), url(${heroImages[currentHeroImage]}), url(${heroParticlesBg})`,
            backgroundSize: 'cover, cover, 100% 100%',
            backgroundPosition: 'center, center, center',
            backgroundBlendMode: 'overlay, normal, screen',
            transition: 'background-image 2s ease-in-out'
          }}
        />
        <HeroParticles />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="koma-fade-in-up">
            <div className="mb-8">
              <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-sm mb-6 koma-pulse-glow">
                <img src={komaLogo} alt="KOMA Agency" className="h-16 w-16 rounded-lg" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 koma-gradient-text koma-text-shadow">
              Creative Digital
              <br />
              <span className="relative">
                Marketing Agency
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              We transform brands through innovative digital strategies, creative content, and data-driven results that exceed expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="koma-gold-button text-lg px-8 py-4 koma-pulse-glow group">
                Get Started 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="koma-purple-button text-lg px-8 py-4 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> 
                View Our Work
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="koma-zoom-in text-center group" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 koma-card-hover">
                    <div className="text-3xl md:text-4xl font-bold koma-gradient-text mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base opacity-80">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Services Preview */}
      <section className="koma-section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 koma-gradient-text">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to elevate your brand and drive measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="koma-service-card koma-card-hover text-center p-0 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-125 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="koma-purple-button">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Perfect Testimonials */}
      <section className="koma-section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 koma-gradient-text">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="koma-card-hover p-6">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect CTA Section */}
      <section className="koma-section-padding koma-hero-bg text-white relative overflow-hidden">
        <HeroParticles />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together. Get in touch with our team of experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="koma-gold-button text-lg px-8 py-4">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Perfect Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={komaLogo} alt="KOMA Agency" className="h-10 w-10 rounded-lg" />
                <span className="text-2xl font-bold koma-gradient-text">KOMA</span>
              </div>
              <p className="text-muted-foreground">
                Transforming brands through innovative digital strategies, creative content, and data-driven results.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-primary">About</Link>
                <Link to="/services" className="block text-muted-foreground hover:text-primary">Services</Link>
                <Link to="/portfolio" className="block text-muted-foreground hover:text-primary">Portfolio</Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary">Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">Content Marketing</p>
                <p className="text-muted-foreground">Social Media</p>
                <p className="text-muted-foreground">Media Buying</p>
                <p className="text-muted-foreground">Branding</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>hello@komaagency.com</p>
                <p>+20 123 456 7890</p>
                <p>Cairo, Egypt</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 KOMA Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// About Page Component
function AboutPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 koma-gradient-text">
              About KOMA Agency
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded with a vision to revolutionize digital marketing, KOMA Agency has grown to become a trusted partner for brands seeking innovative solutions.
            </p>
          </div>

          {/* Company Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KOMA Agency was born from a simple belief: every brand has a unique story worth telling. Our journey began with a small team of passionate creatives who understood that in the digital age, traditional marketing approaches weren't enough.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we've evolved into a full-service digital marketing agency that combines strategic thinking with creative execution. Our multidisciplinary team brings together expertise in branding, digital marketing, content creation, and technology.
              </p>
            </div>
            <div className="relative">
              <img 
                src={heroBackground1} 
                alt="KOMA Agency Story" 
                className="rounded-lg shadow-2xl koma-card-hover"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="koma-card-hover p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  To empower brands with innovative digital strategies that create meaningful connections with their audiences and drive sustainable growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="koma-card-hover p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  To be the leading creative digital marketing agency that sets new standards for innovation, creativity, and client success in the industry.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-12 koma-gradient-text">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Innovation', description: 'We stay ahead of trends and embrace cutting-edge technologies.', icon: '💡' },
                { title: 'Creativity', description: 'Our creative team brings fresh perspectives to every project.', icon: '🎨' },
                { title: 'Integrity', description: 'We build trust through transparency and ethical practices.', icon: '🤝' },
                { title: 'Excellence', description: 'We strive for perfection in everything we deliver.', icon: '⭐' }
              ].map((value, index) => (
                <Card key={index} className="koma-service-card koma-card-hover text-center p-6">
                  <CardHeader>
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Services Page Component
function ServicesPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const services = [
    {
      title: 'Content Marketing',
      description: 'Strategic content creation that engages your audience and drives conversions through compelling storytelling.',
      features: ['Blog Writing', 'Video Content', 'Infographics', 'Content Strategy'],
      icon: '📝'
    },
    {
      title: 'Social Media Management',
      description: 'Complete social media strategy, content creation, and community management across all platforms.',
      features: ['Strategy Development', 'Content Creation', 'Community Management', 'Analytics'],
      icon: '📱'
    },
    {
      title: 'Media Buying',
      description: 'Data-driven advertising campaigns across all digital platforms for maximum ROI.',
      features: ['Facebook Ads', 'Google Ads', 'Instagram Ads', 'LinkedIn Ads'],
      icon: '📊'
    },
    {
      title: 'Influencer Marketing',
      description: 'Connect with the right influencers to amplify your brand message and reach new audiences.',
      features: ['Influencer Research', 'Campaign Management', 'Performance Tracking', 'ROI Analysis'],
      icon: '🌟'
    },
    {
      title: 'SEO/SEM',
      description: 'Boost your online visibility with our comprehensive SEO and SEM strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'PPC Management'],
      icon: '🔍'
    },
    {
      title: 'Video & Reels Production',
      description: 'High-quality video content that captures attention and tells your story effectively.',
      features: ['Video Production', 'Reels Creation', 'Animation', 'Post-Production'],
      icon: '🎬'
    },
    {
      title: '3D Modeling & Animation',
      description: 'Cutting-edge 3D visuals and animations for immersive brand experiences.',
      features: ['3D Modeling', '3D Animation', 'Product Visualization', 'AR/VR Content'],
      icon: '🎯'
    },
    {
      title: 'Branding & Design',
      description: 'Complete brand identity development from concept to execution.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
      icon: '🎨'
    },
    {
      title: 'Email Marketing',
      description: 'Personalized email campaigns that nurture leads and drive sales.',
      features: ['Campaign Design', 'Automation', 'Segmentation', 'A/B Testing'],
      icon: '📧'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 koma-gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to elevate your brand and drive measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="koma-service-card koma-card-hover p-6">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl mb-4">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Portfolio Page Component
function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const portfolioItems = [
    {
      title: 'KENZ Fashion E-commerce',
      category: 'E-commerce & Branding',
      description: 'Complete digital transformation for luxury fashion brand including website redesign, social media strategy, and influencer campaigns.',
      image: caseStudyKenz,
      results: ['300% increase in online sales', '150% growth in social media followers', '85% improvement in conversion rate']
    },
    {
      title: 'United Jeep Campaign',
      category: 'Automotive Marketing',
      description: 'Comprehensive digital marketing campaign for automotive brand including video production, social media, and media buying.',
      image: caseStudyJeep,
      results: ['250% increase in test drives', '180% growth in brand awareness', '90% improvement in lead quality']
    },
    {
      title: 'AM Dental Clinic',
      category: 'Healthcare Marketing',
      description: 'Digital marketing strategy for dental clinic including website development, SEO, and patient acquisition campaigns.',
      image: caseStudyDental,
      results: ['200% increase in appointments', '160% growth in online presence', '95% patient satisfaction rate']
    }
  ]

  const creativeWork = [
    { title: 'Fashion Photography', image: photoshoot1, category: 'Photography' },
    { title: 'Product Shoots', image: photoshoot2, category: 'Photography' },
    { title: '3D Product Visualization', image: modeling3D, category: '3D Modeling' },
    { title: 'Brand Animation', image: animationWork, category: 'Animation' },
    { title: 'Brand Guidelines', image: brandingBook1, category: 'Branding' },
    { title: 'Visual Identity', image: brandingBook2, category: 'Branding' }
  ]

  return (
    <div className="min-h-screen">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 koma-gradient-text">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our latest projects and creative work that showcase our expertise and results-driven approach
            </p>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Case Studies</h2>
            <div className="space-y-12">
              {portfolioItems.map((item, index) => (
                <Card key={index} className="koma-card-hover overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-4">{item.category}</Badge>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-muted-foreground mb-6">{item.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Results:</h4>
                        {item.results.map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Creative Work */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Creative Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creativeWork.map((work, index) => (
                <Card key={index} className="koma-card-hover overflow-hidden">
                  <div className="relative">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2">{work.category}</Badge>
                    <h3 className="font-semibold">{work.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Clients Page Component
function ClientsPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const clients = [
    { name: 'Vodafone', logo: clientVodafone, industry: 'Telecommunications' },
    { name: 'GSK', logo: clientGSK, industry: 'Pharmaceuticals' },
    { name: 'SWVL', logo: clientSWVL, industry: 'Transportation' },
    { name: 'Ghabbour Auto', logo: clientGhabbour, industry: 'Automotive' },
    { name: 'Petrojet', logo: clientPetrojet, industry: 'Oil & Gas' },
    { name: 'Banque du Caire', logo: clientBanque, industry: 'Banking' },
    { name: 'AM Dental Clinic', logo: clientAMDental, industry: 'Healthcare' },
    { name: 'Homes Guide', logo: clientHomesGuide, industry: 'Real Estate' },
    { name: 'Sham Station', logo: clientShamStation, industry: 'Retail' },
    { name: 'Roka Plast', logo: clientRokaPlast, industry: 'Manufacturing' },
    { name: 'Skira Cosmetics', logo: clientSkiraCosmetics, industry: 'Beauty' }
  ]

  const industries = [
    { name: 'F&B', icon: '🍽️', count: 15 },
    { name: 'Real Estate', icon: '🏢', count: 12 },
    { name: 'Sports', icon: '⚽', count: 8 },
    { name: 'Fashion', icon: '👗', count: 10 },
    { name: 'Automotive', icon: '🚗', count: 7 },
    { name: 'Entertainment', icon: '🎭', count: 9 },
    { name: 'Technology', icon: '💻', count: 14 },
    { name: 'Government', icon: '🏛️', count: 5 },
    { name: 'Banking', icon: '🏦', count: 6 },
    { name: 'Healthcare', icon: '🏥', count: 11 },
    { name: 'Lifestyle', icon: '✨', count: 13 },
    { name: 'Web 3.0/NFTs', icon: '🔗', count: 4 }
  ]

  return (
    <div className="min-h-screen">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 koma-gradient-text">
              Our Clients & Brands
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're proud to work with leading brands across diverse industries, delivering exceptional results and building lasting partnerships
            </p>
          </div>

          {/* Client Logos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Trusted by Leading Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {clients.map((client, index) => (
                <Card key={index} className="koma-client-card p-6 text-center">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-16 object-contain mb-4"
                  />
                  <h3 className="font-semibold text-sm">{client.name}</h3>
                  <p className="text-xs text-muted-foreground">{client.industry}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="koma-service-card koma-card-hover text-center p-6">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="font-semibold mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.count} Projects</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '150+', label: 'Happy Clients', icon: <Users className="h-8 w-8" /> },
                { number: '500+', label: 'Projects Completed', icon: <Award className="h-8 w-8" /> },
                { number: '12', label: 'Industries Served', icon: <Globe className="h-8 w-8" /> },
                { number: '98%', label: 'Client Satisfaction', icon: <Star className="h-8 w-8" /> }
              ].map((stat, index) => (
                <Card key={index} className="koma-card-hover text-center p-8">
                  <div className="flex justify-center mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold koma-gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Team Page Component
function TeamPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const teamMembers = [
    {
      name: 'Mohamed Khaled',
      position: 'Chairman & Founder',
      image: teamChairman,
      bio: 'Visionary leader with over 15 years of experience in digital marketing and business strategy.',
      expertise: ['Strategic Planning', 'Business Development', 'Leadership', 'Innovation']
    },
    {
      name: 'Amira Hassan',
      position: 'CEO & Co-Founder',
      image: teamCEO,
      bio: 'Creative director and marketing strategist passionate about building meaningful brand connections.',
      expertise: ['Creative Direction', 'Brand Strategy', 'Team Leadership', 'Client Relations']
    },
    {
      name: 'Youssef Ahmed',
      position: 'Chief Marketing Officer',
      image: teamCMO,
      bio: 'Digital marketing expert specializing in data-driven campaigns and performance optimization.',
      expertise: ['Digital Marketing', 'Data Analytics', 'Campaign Management', 'ROI Optimization']
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 koma-gradient-text">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our passionate team of experts brings together diverse skills and experience to deliver exceptional results for our clients
            </p>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="koma-card-hover text-center p-8">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.position}</p>
                  <p className="text-muted-foreground mb-6">{member.bio}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Culture */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Culture</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation First',
                  description: 'We embrace new technologies and creative approaches to solve complex challenges.',
                  icon: '💡'
                },
                {
                  title: 'Collaborative Spirit',
                  description: 'We believe in the power of teamwork and open communication to achieve great results.',
                  icon: '🤝'
                },
                {
                  title: 'Continuous Learning',
                  description: 'We invest in our team\'s growth and development to stay ahead of industry trends.',
                  icon: '📚'
                }
              ].map((value, index) => (
                <Card key={index} className="koma-service-card koma-card-hover text-center p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Join Our Team CTA */}
          <div className="text-center">
            <Card className="koma-card-hover p-12 bg-gradient-to-r from-primary/10 to-secondary/10">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for creativity and excellence. 
                Join us in shaping the future of digital marketing.
              </p>
              <Button size="lg" className="koma-gold-button">
                View Open Positions
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Contact Page Component
function ContactPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 koma-gradient-text">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your brand? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="koma-card-hover p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="koma-gold-button w-full">
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="koma-card-hover p-8">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">hello@komaagency.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">+20 123 456 7890</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground">Cairo, Egypt</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                      Friday - Saturday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="koma-card-hover p-8">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Why Choose KOMA?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Proven track record with 150+ successful projects',
                    'Expert team with 8+ years of industry experience',
                    'Data-driven approach for measurable results',
                    '24/7 support and dedicated account management',
                    'Innovative solutions tailored to your business needs'
                  ].map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


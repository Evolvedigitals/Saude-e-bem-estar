
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Users, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  CheckCircle,
  Clock,
  Award,
  Stethoscope,
  Activity,
  Smile,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

function App() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleScheduleAppointment = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const services = [
    {
      icon: <Stethoscope className="h-8 w-8 text-green-600" />,
      title: "Consultas Médicas",
      description: "Atendimento médico completo com profissionais especializados em diversas áreas da medicina.",
      benefits: ["Diagnóstico preciso", "Tratamento personalizado", "Acompanhamento contínuo"]
    },
    {
      icon: <Smile className="h-8 w-8 text-blue-600" />,
      title: "Odontologia",
      description: "Cuidados dentários completos para toda a família, desde limpeza até tratamentos especializados.",
      benefits: ["Tecnologia avançada", "Tratamentos indolores", "Prevenção e estética"]
    },
    {
      icon: <Activity className="h-8 w-8 text-purple-600" />,
      title: "Fisioterapia",
      description: "Reabilitação e prevenção de lesões com técnicas modernas e equipamentos de última geração.",
      benefits: ["Recuperação rápida", "Alívio da dor", "Melhoria da mobilidade"]
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      title: "Spa & Bem-estar",
      description: "Tratamentos relaxantes e terapêuticos para o corpo e mente, promovendo bem-estar total.",
      benefits: ["Relaxamento profundo", "Renovação da pele", "Equilíbrio mental"]
    }
  ];

  const team = [
    {
      name: "Dr. Ana Silva",
      specialty: "Cardiologista",
      experience: "15 anos de experiência",
      description: "Especialista em doenças cardiovasculares com formação internacional."
    },
    {
      name: "Dr. Carlos Santos",
      specialty: "Dentista",
      experience: "12 anos de experiência",
      description: "Especialista em implantodontia e estética dental."
    },
    {
      name: "Dra. Maria Costa",
      specialty: "Fisioterapeuta",
      experience: "10 anos de experiência",
      description: "Especialista em reabilitação ortopédica e neurológica."
    },
    {
      name: "Dra. Sofia Oliveira",
      specialty: "Terapeuta Spa",
      experience: "8 anos de experiência",
      description: "Especialista em terapias holísticas e tratamentos de bem-estar."
    }
  ];

  const testimonials = [
    {
      name: "João Pereira",
      text: "Excelente atendimento! A equipe é muito profissional e o ambiente é acolhedor. Recomendo a todos!",
      rating: 5,
      treatment: "Consulta Cardiológica"
    },
    {
      name: "Maria Fernandes",
      text: "Fiz um tratamento dentário aqui e fiquei impressionada com a qualidade. Sem dor e resultado perfeito!",
      rating: 5,
      treatment: "Implante Dentário"
    },
    {
      name: "Pedro Rodrigues",
      text: "A fisioterapia me ajudou muito na recuperação. Profissionais dedicados e equipamentos modernos.",
      rating: 5,
      treatment: "Fisioterapia"
    }
  ];

  const faqs = [
    {
      question: "Como posso agendar uma consulta?",
      answer: "Você pode agendar através do nosso formulário online, por telefone ou WhatsApp. Nossa equipe está disponível para ajudá-lo a encontrar o melhor horário."
    },
    {
      question: "Vocês atendem convênios médicos?",
      answer: "Sim, trabalhamos com os principais convênios médicos. Entre em contato conosco para verificar se o seu plano está incluído."
    },
    {
      question: "Qual é o horário de funcionamento?",
      answer: "Funcionamos de segunda a sexta das 8h às 18h, e aos sábados das 8h às 12h. Para emergências, temos plantão 24h."
    },
    {
      question: "Vocês oferecem estacionamento?",
      answer: "Sim, temos estacionamento gratuito para nossos pacientes com vagas cobertas e descobertas."
    },
    {
      question: "É necessário jejum para exames?",
      answer: "Depende do tipo de exame. Nossa equipe fornecerá todas as orientações necessárias no momento do agendamento."
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Helmet>
        <title>Centro de Saúde e Bem-Estar - Cuidando de Você</title>
        <meta name="description" content="Centro médico completo com serviços de saúde e bem-estar. Consultas médicas, odontologia, fisioterapia e spa. Agende sua consulta hoje mesmo!" />
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heart className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">VitalCare</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-700 hover:text-green-600 transition-colors">Serviços</a>
              <a href="#equipe" className="text-gray-700 hover:text-green-600 transition-colors">Equipe</a>
              <a href="#instalacoes" className="text-gray-700 hover:text-green-600 transition-colors">Instalações</a>
              <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors">Contato</a>
              <Button onClick={handleScheduleAppointment} className="bg-green-600 hover:bg-green-700 pulse-green">
                Agendar Consulta
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/90 backdrop-blur-md rounded-lg mt-2 p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors">Início</a>
                <a href="#servicos" className="text-gray-700 hover:text-green-600 transition-colors">Serviços</a>
                <a href="#equipe" className="text-gray-700 hover:text-green-600 transition-colors">Equipe</a>
                <a href="#instalacoes" className="text-gray-700 hover:text-green-600 transition-colors">Instalações</a>
                <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors">Contato</a>
                <Button onClick={handleScheduleAppointment} className="bg-green-600 hover:bg-green-700 w-full">
                  Agendar Consulta
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Cuidando da sua
                <span className="text-green-600 block">saúde e bem-estar</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Centro médico completo com profissionais especializados, tecnologia avançada e ambiente acolhedor. 
                Sua saúde é nossa prioridade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleScheduleAppointment}
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 pulse-green"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })}
                >
                  Conheça Nossos Serviços
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5000+</div>
                  <div className="text-sm text-gray-600">Pacientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="floating-animation">
                <img  
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                  alt="Centro médico moderno com ambiente acolhedor"
                 src="https://images.unsplash.com/photo-1666056445151-57949bacdd60" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-800">Ambiente Seguro</div>
                    <div className="text-sm text-gray-600">Protocolos rigorosos</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Tratamentos e Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de saúde e bem-estar com tecnologia de ponta e profissionais especializados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full mt-6 bg-green-600 hover:bg-green-700"
                      onClick={handleScheduleAppointment}
                    >
                      Agendar Consulta
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossa Equipe de Especialistas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais altamente qualificados e dedicados ao seu bem-estar, com anos de experiência e formação especializada.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="team-card h-full">
                  <div className="relative">
                    <img  
                      className="w-full h-64 object-cover"
                      alt={`${member.name} - ${member.specialty}`}
                     src="https://images.unsplash.com/photo-1659353885824-1199aeeebfc6" />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-green-600 font-medium">
                      {member.specialty}
                    </CardDescription>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{member.experience}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="instalacoes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossas Instalações</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ambiente moderno, limpo e acolhedor, equipado com tecnologia de última geração para oferecer o melhor atendimento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img  
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                alt="Recepção moderna e acolhedora"
               src="https://images.unsplash.com/photo-1682327712452-f10e3128e390" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Recepção</h3>
                  <p className="text-sm">Ambiente acolhedor e confortável</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img  
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                alt="Consultório médico equipado"
               src="https://images.unsplash.com/photo-1580281657702-257584239a55" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Consultórios</h3>
                  <p className="text-sm">Equipamentos de última geração</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img  
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                alt="Sala de fisioterapia moderna"
               src="https://images.unsplash.com/photo-1693214674451-d6bd02e642d1" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Fisioterapia</h3>
                  <p className="text-sm">Equipamentos especializados</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img  
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                alt="Consultório odontológico moderno"
               src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe6" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Odontologia</h3>
                  <p className="text-sm">Tecnologia dental avançada</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img  
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                alt="Área de spa relaxante"
               src="https://images.unsplash.com/photo-1651065213855-e6094f99ee65" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Spa</h3>
                  <p className="text-sm">Ambiente relaxante e terapêutico</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img  
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                alt="Sala de espera confortável"
               src="https://images.unsplash.com/photo-1524758631624-e2822e304c36" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Sala de Espera</h3>
                  <p className="text-sm">Conforto e tranquilidade</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Depoimentos de Pacientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o que nossos pacientes dizem sobre a experiência e qualidade do nosso atendimento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="testimonial-card h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-gray-700 text-base italic">
                      "{testimonial.text}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.treatment}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">
              Esclarecemos as dúvidas mais comuns sobre nossos serviços e atendimento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:text-green-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Localização e Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entre em contato conosco ou visite nossa clínica. Estamos aqui para cuidar da sua saúde e bem-estar.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Endereço</div>
                      <div className="text-gray-600">Rua da Saúde, 123 - Centro<br />São Paulo, SP - CEP: 01234-567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Telefone</div>
                      <div className="text-gray-600">(11) 1234-5678<br />WhatsApp: (11) 99999-9999</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">E-mail</div>
                      <div className="text-gray-600">contato@vitalcare.com.br<br />agendamento@vitalcare.com.br</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Horário de Funcionamento</div>
                      <div className="text-gray-600">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Map */}
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Localização</h3>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-green-600" />
                    <p>Mapa interativo será carregado aqui</p>
                    <p className="text-sm mt-2">Rua da Saúde, 123 - Centro, São Paulo</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Formulário de Agendamento</h3>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo</Label>
                      <Input id="nome" placeholder="Seu nome completo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" placeholder="(11) 99999-9999" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="servico">Serviço Desejado</Label>
                      <select 
                        id="servico" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="consulta-medica">Consulta Médica</option>
                        <option value="odontologia">Odontologia</option>
                        <option value="fisioterapia">Fisioterapia</option>
                        <option value="spa">Spa & Bem-estar</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="data">Data Preferida</Label>
                      <Input id="data" type="date" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem (Opcional)</Label>
                    <Textarea 
                      id="mensagem" 
                      placeholder="Conte-nos mais sobre suas necessidades ou preferências..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                    <Calendar className="mr-2 h-5 w-5" />
                    Solicitar Agendamento
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    Entraremos em contato em até 24 horas para confirmar seu agendamento.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">VitalCare</span>
              </div>
              <p className="text-gray-300">
                Centro de saúde e bem-estar dedicado ao seu cuidado integral com profissionais especializados e tecnologia avançada.
              </p>
            </div>
            <div>
              <span className="text-lg font-semibold mb-4 block">Serviços</span>
              <ul className="space-y-2 text-gray-300">
                <li>Consultas Médicas</li>
                <li>Odontologia</li>
                <li>Fisioterapia</li>
                <li>Spa & Bem-estar</li>
              </ul>
            </div>
            <div>
              <span className="text-lg font-semibold mb-4 block">Links Úteis</span>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#inicio" className="hover:text-green-400 transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-green-400 transition-colors">Serviços</a></li>
                <li><a href="#equipe" className="hover:text-green-400 transition-colors">Equipe</a></li>
                <li><a href="#contato" className="hover:text-green-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <span className="text-lg font-semibold mb-4 block">Contato</span>
              <div className="space-y-2 text-gray-300">
                <p>(11) 1234-5678</p>
                <p>contato@vitalcare.com.br</p>
                <p>Rua da Saúde, 123<br />São Paulo, SP</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 VitalCare. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

export default App;

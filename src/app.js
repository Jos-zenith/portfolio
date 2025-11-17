import React, { useState, useEffect } from 'react';
import './App.css';
import { Github, Linkedin, Mail, Phone, Briefcase, Award, Users, BookOpen, TrendingUp, Smartphone, Eye, Car, ParkingCircle, Code, Wrench, Lightbulb, MapPin, Menu, X, Palette } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('business');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'xperience', 'project', 'achievement', 'skill', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const themes = {
    business: {
      bg: 'bg-white',
      text: 'text-slate-900',
      textLight: 'text-slate-600',
      accent: 'bg-slate-900',
      accentHover: 'hover:bg-slate-800',
      accentText: 'text-white',
      border: 'border-slate-200',
      cardBg: 'bg-slate-50',
      gradient: 'from-slate-50 via-white to-slate-100',
      navBg: 'bg-white/80',
      font: 'font-sans',
    },
    kiddy: {
      bg: 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50',
      text: 'text-purple-900',
      textLight: 'text-purple-600',
      accent: 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500',
      accentHover: 'hover:scale-105',
      accentText: 'text-white',
      border: 'border-purple-200',
      cardBg: 'bg-white/80',
      gradient: 'from-pink-100 via-purple-100 to-blue-100',
      navBg: 'bg-white/90',
      font: 'font-comic',
    }
  };

  const t = themes[theme];

  const experiences = [
    {
      title: 'Team Captain',
      company: 'Electrical 4 Wheeler Design Club (SAE)',
      period: '02/2025 - 10/2025',
      points: [
        'Led a 16-member cross-functional team across Mechanical, Electrical, Electronics and IT domains for E-4W prototype design',
        'Managed project timelines, procurement and task trackings',
        'Achieved 3rd place (Chairman\'s Special Award) for best prototype design',
      ],
      icon: Award,
    },
    {
      title: 'Co-founder',
      company: 'ParkinToday',
      period: '09/2024 - Present',
      points: [
        'Managed an 8-member core team developing a smart parking IoT platform integrating live sensors and UPI payments',
        'Oversaw planning, scheduling and client presentations for business validation',
        'Secured 1st place in a business pitch hosted by LICET Entrepreneur cell in collaboration with Ecirke',
      ],
      icon: Briefcase,
    },
    {
      title: 'Intern-trainee',
      company: 'AICTE - Edunet',
      period: '07/2025 - 08/2025',
      points: [
        'Develop a custome-salary prediction application using ML dataset & web application using reactjs application',
        '6-week online training from the basic neural network to high-ended data models',
      ],
      icon: Briefcase,
    },
    {
      title: 'Crew Member',
      company: 'Electrical 4 Wheeler Design Club (SAE)',
      period: '02/2024 - 02/2025',
      points: [
        'Gained hands-on experience in vehicle assembly, steering and suspension mechanisms',
        'Participated in real-world EV production workflow simulations',
        'Won ₹10,000 cash prize as Lead Champions for E-vehicle prototype',
      ],
      icon: Users,
    },
  ];

  const projects = [
    {
      title: 'IoT Gesture-Controlled Wheelchair',
      event: '1st Place – Envision\'23',
      description: 'Developed an IoT-based gesture-controlled wheelchair system with advanced motion controls',
      prize: '₹10,000 cash prize',
      icon: Smartphone,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Glaucoma Pressure Monitor',
      event: '2nd Place – CSIR INDIA@2047',
      description: 'Built an IoT device to measure eye pressure for glaucoma patients with real-time monitoring',
      prize: 'Gift worth ₹1,000',
      icon: Eye,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Smart IoT raid-hailling device',
      event: '4th Place – ImpactX 2.0',
      description: 'Designed a ride-hailing device for Uber/Ola drivers to improve driver-passenger interactions',
      prize: 'Top 5 Finalist',
      icon: Car,
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'ParkinToday ideation pitch',
      event: '5th Place – KSR Innovation',
      description: 'Smart parking IoT platform with live sensors and UPI payments for real-time parking solutions',
      prize: 'Best Idea Pitch',
      icon: ParkingCircle,
      color: 'from-slate-700 to-slate-900',
    },
  ];

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Java', 'Python', 'C', 'C++', 'Flutter', 'JavaScript', 'SQL', 'NoSQL'],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Technologies',
      icon: Wrench,
      skills: ['Web Development', 'Arduino', 'Unity', 'Raspberry Pi', 'Figma', 'AutoCAD', 'NX CAD', 'MATLAB'],
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Project Tools',
      icon: Lightbulb,
      skills: ['Jira', 'Trello', 'MS Excel', 'PowerBI', 'Canva', 'Documentation'],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Leadership', 'Time Management', 'Collaboration', 'Communication'],
      color: 'from-slate-700 to-slate-900',
    },
  ];

  return (
    <div className={`min-h-screen ${t.bg} ${t.font} transition-all duration-500`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');
        .font-comic { font-family: 'Comic Neue', cursive; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${t.navBg} backdrop-blur-md shadow-sm transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection('home')} className={`text-2xl font-bold ${t.text} ${theme === 'kiddy' ? 'hover:scale-110' : ''} transition-transform`}>
              {theme === 'kiddy' ? '🌟 Zenith' : 'Zenith Joshua J'}
            </button>

            <div className="hidden md:flex items-center gap-6">
              {['home', 'experience', 'projects', 'achievements', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${activeSection === item ? t.text : t.textLight} transition-colors ${theme === 'kiddy' ? 'hover:scale-110' : ''} font-medium`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setTheme(theme === 'business' ? 'kiddy' : 'business')}
                className={`${t.accent} ${t.accentText} ${t.accentHover} px-4 py-2 rounded-full transition-all flex items-center gap-2`}
              >
                <Palette size={18} />
                {theme === 'business' ? 'Fun Mode' : 'Pro Mode'}
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${t.text}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['home', 'experience', 'projects', 'achievements', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize ${t.textLight} transition-colors py-2`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => {
                  setTheme(theme === 'business' ? 'kiddy' : 'business');
                  setMobileMenuOpen(false);
                }}
                className={`${t.accent} ${t.accentText} ${t.accentHover} px-4 py-2 rounded-full transition-all flex items-center gap-2 w-full justify-center`}
              >
                <Palette size={18} />
                {theme === 'business' ? 'Fun Mode' : 'Pro Mode'}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br ${t.gradient} pt-20`}>
        {theme === 'business' && (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        )}
        {theme === 'kiddy' && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-full opacity-30 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        )}

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <div className={`inline-block mb-4 px-4 py-2 ${t.accent} ${t.accentText} text-sm font-medium ${theme === 'kiddy' ? 'rounded-full shadow-lg' : 'rounded-full'}`}>
            {theme === 'kiddy' ? '🚀 Ready for Fun Adventures!' : 'Available for Opportunities'}
          </div>

          <h1 className={`text-6xl md:text-7xl font-bold ${t.text} mb-6 tracking-tight ${theme === 'kiddy' ? 'animate-pulse' : ''}`}>
            {theme === 'kiddy' ? '✨ Zenith Joshua J ✨' : 'Zenith Joshua J'}
          </h1>

          <p className={`text-xl md:text-2xl ${t.textLight} mb-8 max-w-3xl mx-auto leading-relaxed`}>
            {theme === 'kiddy' 
              ? 'Super Cool Tech Leader & Project Manager! 🎯 Building awesome IoT gadgets and making tech magic happen! 🌈'
              : 'Tech Leader & Project Manager specializing in IoT, embedded systems, and full-stack development'
            }
          </p>

          <p className={`text-lg ${t.textLight} mb-12 max-w-2xl mx-auto`}>
            {theme === 'kiddy'
              ? 'Leading amazing teams and creating super cool tech projects with lots of fun and creativity! 🎨💡'
              : 'A passionate tech enthusiast leading multidisciplinary teams and managing end-to-end tech projects.'
            }
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="tel:7448343632"
              className={`flex items-center gap-2 px-6 py-3 ${t.accent} ${t.accentText} ${t.accentHover} ${theme === 'kiddy' ? 'rounded-full shadow-lg' : 'rounded-lg'} transition-all font-medium`}
            >
              <Phone size={18} />
              {theme === 'kiddy' ? '📞 Ping Me!' : 'Contact Me'}
            </a>

            <a
              href="mailto:zenithjoshua.27it@licet.ac.in"
              className={`flex items-center gap-2 px-6 py-3 border-2 ${t.border} ${t.text} ${theme === 'kiddy' ? 'rounded-full shadow-lg hover:shadow-xl' : 'rounded-lg hover:bg-slate-50'} transition-all font-medium`}
            >
              <Mail size={18} />
              {theme === 'kiddy' ? '✉️ Email!' : 'Email'}
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="https://linkedin.com/in/zenith-joshua-7178a623a" target="_blank" rel="noopener noreferrer" className={`${t.textLight} transition-colors ${theme === 'kiddy' ? 'hover:scale-125' : ''}`}>
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Jos-zenith" target="_blank" rel="noopener noreferrer" className={`${t.textLight} transition-colors ${theme === 'kiddy' ? 'hover:scale-125' : ''}`}>
              <Github size={24} />
            </a>
          </div>

          <div className={`mt-16 pt-16 border-t ${t.border}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className={theme === 'kiddy' ? 'transform hover:scale-110 transition-transform' : ''}>
                <div className={`text-3xl font-bold ${t.text} mb-2`}>{theme === 'kiddy' ? '5️⃣+' : '5+'}</div>
                <div className={`text-sm ${t.textLight}`}>Hackathons</div>
              </div>
              <div className={theme === 'kiddy' ? 'transform hover:scale-110 transition-transform' : ''}>
                <div className={`text-3xl font-bold ${t.text} mb-2`}>{theme === 'kiddy' ? '3️⃣' : '3'}</div>
                <div className={`text-sm ${t.textLight}`}>Leadership Roles</div>
              </div>
              <div className={theme === 'kiddy' ? 'transform hover:scale-110 transition-transform' : ''}>
                <div className={`text-3xl font-bold ${t.text} mb-2`}>{theme === 'kiddy' ? '7️⃣.2️⃣' : '7.2'}</div>
                <div className={`text-sm ${t.textLight}`}>CGPA</div>
              </div>
              <div className={theme === 'kiddy' ? 'transform hover:scale-110 transition-transform' : ''}>
                <div className={`text-3xl font-bold ${t.text} mb-2`}>{theme === 'kiddy' ? '🔟+' : '10+'}</div>
                <div className={`text-sm ${t.textLight}`}>Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-24 ${t.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${t.text} mb-4`}>
              {theme === 'kiddy' ? '🎯 Miene Cool Adventures' : 'Work Experience'}
            </h2>
            <p className={`text-lg ${t.textLight} max-w-2xl mx-auto`}>
              {theme === 'kiddy' 
                ? 'Leading super teams and making amazing things happen! 🚀'
                : 'Leading teams and driving innovation across multiple technical domains'
              }
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className={`${t.cardBg} ${theme === 'kiddy' ? 'rounded-3xl shadow-xl' : 'rounded-2xl'} p-8 hover:shadow-lg transition-all border ${t.border} ${theme === 'kiddy' ? 'hover:scale-105' : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 ${theme === 'kiddy' ? 'bg-gradient-to-br from-pink-500 to-purple-500' : 'bg-slate-900'} ${theme === 'kiddy' ? 'rounded-2xl' : 'rounded-xl'} flex items-center justify-center ${theme === 'kiddy' ? 'animate-bounce' : ''}`}>
                        <Icon className="text-white" size={24} />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className={`text-2xl font-bold ${t.text} mb-1`}>
                            {exp.title}
                          </h3>
                          <p className={`${t.textLight} font-medium`}>{exp.company}</p>
                        </div>
                        <span className={`text-sm ${t.textLight} font-medium mt-2 md:mt-0`}>
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-3">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className={`flex items-start gap-3 ${t.textLight}`}>
                            <span className={`flex-shrink-0 w-1.5 h-1.5 ${theme === 'kiddy' ? 'bg-pink-400' : 'bg-slate-400'} rounded-full mt-2`}></span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 ${t.cardBg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${t.text} mb-4`}>
              {theme === 'kiddy' ? '🏆 Awesome Projects' : 'Featured Projects'}
            </h2>
            <p className={`text-lg ${t.textLight} max-w-2xl mx-auto`}>
              {theme === 'kiddy'
                ? 'Super cool inventions that won amazing prizes! 🎉'
                : 'Award-winning innovations in IoT, embedded systems, and smart technology'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className={`bg-white ${theme === 'kiddy' ? 'rounded-3xl shadow-2xl' : 'rounded-2xl'} overflow-hidden hover:shadow-xl transition-all duration-300 border ${t.border} group ${theme === 'kiddy' ? 'hover:scale-105' : ''}`}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                  <div className="p-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 ${theme === 'kiddy' ? 'rounded-2xl' : 'rounded-xl'} bg-gradient-to-br ${project.color} mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="text-white" size={28} />
                    </div>

                    <div className="mb-2">
                      <span className={`inline-block px-3 py-1 ${theme === 'kiddy' ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700' : 'bg-slate-100 text-slate-700'} text-xs font-semibold rounded-full mb-3`}>
                        {project.event}
                      </span>
                    </div>

                    <h3 className={`text-2xl font-bold ${t.text} mb-3`}>
                      {project.title}
                    </h3>

                    <p className={`${t.textLight} mb-4 leading-relaxed`}>
                      {project.description}
                    </p>

                    <div className={`flex items-center gap-2 text-sm font-semibold ${t.textLight}`}>
                      <Award size={16} />
                      <span>{project.prize}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-24 ${t.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${t.text} mb-4`}>
              {theme === 'kiddy' ? '⭐ Learning & Achievements' : 'Achievements & Learning'}
            </h2>
            <p className={`text-lg ${t.textLight} max-w-2xl mx-auto`}>
              {theme === 'kiddy'
                ? 'Growing smarter every day with cool certificates and fun activities! 📚'
                : 'Continuous growth through certifications, competitions, and technical engagement'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${theme === 'kiddy' ? 'bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl' : 'bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl'} p-8 text-white`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-white/10 ${theme === 'kiddy' ? 'rounded-2xl' : 'rounded-xl'} flex items-center justify-center`}>
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold">{theme === 'kiddy' ? '🎓 Certificates' : 'Certifications'}</h3>
              </div>

              <ul className="space-y-4">
                {['Agile Business Analysis - AAC (IIBA certification) - Udemy', 'C, MySQL, Java & Python Programming - Skillrack (hands-on)', 'Networks & Network Security - Coursera', 'Foundations of Cybersecurity & Security Risk Management - Coursera', 'Onramp & Simulink - Mathworks'].map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-white/60 rounded-full mt-2"></span>
                    <span className="text-slate-200 leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className={`${t.cardBg} ${theme === 'kiddy' ? 'rounded-3xl shadow-xl' : 'rounded-2xl'} p-8 border ${t.border}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${theme === 'kiddy' ? 'bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl' : 'bg-slate-900 rounded-xl'} flex items-center justify-center`}>
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className={`text-2xl font-bold ${t.text}`}>{theme === 'kiddy' ? '🎯 Fun Activities' : 'Technical Activities'}</h3>
                </div>

                <ul className="space-y-4">
                  {['Participated in over 5 hackathons, demonstrating problem-solving and rapid prototyping skills', 'Attended 5 technical workshops focusing on emerging technologies', 'Participated in venture meet organized by IVI and StartupTN\'24', 'Attended UmagineTN\'25, TANSEED events', 'Engaged in 10+ guest lectures from industry experts'].map((activity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className={`flex-shrink-0 w-1.5 h-1.5 ${theme === 'kiddy' ? 'bg-purple-400' : 'bg-slate-400'} rounded-full mt-2`}></span>
                      <span className={`${t.textLight} leading-relaxed`}>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${theme === 'kiddy' ? 'bg-gradient-to-br from-yellow-100 to-orange-100' : 'bg-gradient-to-br from-emerald-50 to-teal-50'} ${theme === 'kiddy' ? 'rounded-3xl shadow-xl' : 'rounded-2xl'} p-8 border ${theme === 'kiddy' ? 'border-orange-200' : 'border-emerald-100'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <Award className={theme === 'kiddy' ? 'text-orange-600' : 'text-emerald-600'} size={28} />
                  <h3 className={`text-xl font-bold ${t.text}`}>{theme === 'kiddy' ? '🏅 Competition Record' : 'Competition Record'}</h3>
                </div>
                <p className={`${theme === 'kiddy' ? 'text-slate-800' : 'text-slate-700'} leading-relaxed`}>
                  Consistently placed in top 5 positions across multiple national-level hackathons and
                  innovation challenges, winning over ₹20,000 in prize money and recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 ${t.cardBg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${t.text} mb-4`}>
              {theme === 'kiddy' ? '💪 Super Skills' : 'Skills & Expertise'}
            </h2>
            <p className={`text-lg ${t.textLight} max-w-2xl mx-auto`}>
              {theme === 'kiddy'
                ? 'All the amazing things I can do! 🎨'
                : 'A comprehensive blend of technical proficiency and leadership capabilities'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
              <div
                  key={index}
                  className={`bg-white ${theme === 'kiddy' ? 'rounded-3xl shadow-xl' : 'rounded-2xl'} p-6 hover:shadow-lg transition-all duration-300 border ${t.border} group ${theme === 'kiddy' ? 'hover:scale-105' : ''}`}
                >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 ${theme === 'kiddy' ? 'rounded-2xl' : 'rounded-xl'} bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={24} />
                </div>

                <h3 className={`text-xl font-bold ${t.text} mb-4`}>{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 ${theme === 'kiddy' ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700' : 'bg-slate-50 text-slate-700'} text-sm ${theme === 'kiddy' ? 'rounded-full' : 'rounded-lg'} border ${t.border} hover:border-slate-300 transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <div className={`mt-16 bg-white ${theme === 'kiddy' ? 'rounded-3xl shadow-xl' : 'rounded-2xl'} p-8 border ${t.border}`}>
        <h3 className={`text-2xl font-bold ${t.text} mb-6 text-center`}>
          {theme === 'kiddy' ? '🎓 School & College' : 'Education'}
        </h3>

        <div className="space-y-6">
          <div className={`flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b ${t.border}`}>
            <div>
              <h4 className={`text-lg font-bold ${t.text}`}>
                B.Tech in Information Technology
              </h4>
              <p className={t.textLight}>
                Loyola ICAM College of Engineering and Technology, Chennai
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className={`inline-block px-4 py-2 ${t.accent} ${t.accentText} font-semibold ${theme === 'kiddy' ? 'rounded-full' : 'rounded-lg'}`}>
                CGPA: 7.2
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className={`text-lg font-bold ${t.text}`}>HSC</h4>
              <p className={t.textLight}>
                Seventh Day Adventist Matric Hr Sec School, Kovilpatti
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className={`inline-block px-4 py-2 ${theme === 'kiddy' ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700' : 'bg-slate-100 text-slate-700'} font-semibold ${theme === 'kiddy' ? 'rounded-full' : 'rounded-lg'}`}>
                83.83%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className={`py-24 ${t.bg}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold ${t.text} mb-6`}>
          {theme === 'kiddy' ? '💬 Let\'s Chat!' : 'Get In Touch'}
        </h2>
        <p className={`text-lg ${t.textLight} mb-12 max-w-2xl mx-auto`}>
          {theme === 'kiddy'
            ? 'Want to build something awesome together? Send me a message! 🚀'
            : 'Open to exciting opportunities in tech leadership, project management, and IoT innovation'
          }
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:zenithjoshua.27it@licet.ac.in"
            className={`${t.cardBg} ${theme === 'kiddy' ? 'rounded-3xl shadow-xl' : 'rounded-2xl'} p-8 hover:shadow-lg transition-all border ${t.border} ${theme === 'kiddy' ? 'hover:scale-105' : ''}`}
          >
            <Mail className={`mx-auto mb-4 ${theme === 'kiddy' ? 'text-pink-500' : t.text}`} size={32} />
            <h3 className={`font-bold ${t.text} mb-2`}>Email</h3>
            <p className={`text-sm ${t.textLight}`}>zenithjoshua.27it@licet.ac.in</p>
          </a>

          <a
            href="tel:7448343632"
            className={`${t.cardBg} ${theme === 'kiddy' ? 'rounded-3xl shadow-xl' : 'rounded-2xl'} p-8 hover:shadow-lg transition-all border ${t.border} ${theme === 'kiddy' ? 'hover:scale-105' : ''}`}
          >
            <Phone className={`mx-auto mb-4 ${theme === 'kiddy' ? 'text-purple-500' : t.text}`} size={32} />
            <h3 className={`font-bold ${t.text} mb-2`}>Phone</h3>
            <p className={`text-sm ${t.textLight}`}>+91 7448343632</p>
          </a>

          <div className={`${t.cardBg} ${theme === 'kiddy' ? 'rounded-3xl shadow-xl' : 'rounded-2xl'} p-8 border ${t.border}`}>
            <MapPin className={`mx-auto mb-4 ${theme === 'kiddy' ? 'text-blue-500' : t.text}`} size={32} />
            <h3 className={`font-bold ${t.text} mb-2`}>Location</h3>
            <p className={`text-sm ${t.textLight}`}>Chennai, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className={`py-8 ${t.cardBg} border-t ${t.border}`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className={t.textLight}>
          {theme === 'kiddy' ? '✨ Made with lots of fun by Zenith! ✨' : '© 2025 Zenith Joshua J. All rights reserved.'}
        </p>
      </div>
    </footer>
  </div>
);
}

import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, MapPin, Download, ExternalLink } from 'lucide-react';

export function AboutPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'zenithjoshua.27ti@licet.ac.in',
      link: 'mailto:zenithjoshua.27ti@licet.ac.in',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 7448343632',
      link: 'tel:+917448343632',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin',
      link: 'https://www.linkedin.com/in/zenith-joshua-7178a623a/',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github',
      link: 'https://github.com/Jos-zenith',
      color: 'from-gray-600 to-gray-800',
    },
  ];

  const interests = [
    { emoji: '🚀', text: 'Team Leadership' },
    { emoji: '💡', text: 'Innovation' },
    { emoji: '🔧', text: 'IoT & Embedded' },
    { emoji: '🌐', text: 'Business Development' },
    { emoji: '♿', text: 'Healthcare Tech' },
    { emoji: '📊', text: 'Data Analytics' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-10 text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 lg:w-28 lg:h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-5"
              >
                <span className="text-5xl lg:text-6xl">👨‍💻</span>
              </motion.div>
              <h1 className="text-3xl lg:text-4xl mb-3">Zenith Joshua</h1>
              <p className="text-purple-100 text-lg lg:text-xl mb-2">Tech Enthusiast & Entrepreneur</p>
              <p className="text-purple-100/80 text-sm lg:text-base">
                Innovative Product Leader and Developer with a track record of building scalable solutions across IoT, AI and Automotive Engineering.
                I specialized in bridging the gap between complex hardware systems and intuitive software architectures
              </p>
            </div>
          </motion.div>

          {/* About Me */}
          <div>
            <h2 className="text-xl lg:text-2xl mb-4">About Me</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100"
            >
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
                I thrive at the intersection of engineering, entrepreneurship, and empathy. My journey is driven by a fascination with how technology can solve physical-world problems. Whether I’m leading a 22-member team to build an electric vehicle from the chassis up, or architecting IoT systems to optimize urban infrastructure, I focus on one thing: building products that work for people</p>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Currently pursuing my Bachelor's in Information Technology while actively working on multiple projects
              </p>
            </motion.div>
          </div>

          {/* Interests */}
          <div>
            <h2 className="text-xl lg:text-2xl mb-4">Interests & Passions</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="bg-purple-50 rounded-2xl p-4 text-center hover:bg-purple-100 transition-colors"
                  >
                    <div className="text-3xl mb-2">{interest.emoji}</div>
                    <div className="text-xs lg:text-sm text-gray-700">{interest.text}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl lg:text-2xl mb-4">Get in Touch</h2>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="block bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white flex-shrink-0`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">{contact.label}</div>
                      <div className="text-sm lg:text-base text-gray-900 group-hover:text-purple-600 transition-colors">{contact.value}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white flex-shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-base lg:text-lg mb-2">Location</h3>
                <p className="text-sm text-gray-600 mb-1">Chennai, Tamil Nadu, India</p>
                <p className="text-xs text-gray-500">Loyola ICAM College of Engineering and Technology</p>
              </div>
            </div>
          </motion.div>

          {/* Download Resume CTA */}
          <motion.a
            href="https://docs.google.com/document/d/1ojae1n-xKYxAsfgFJk5XETuKijtpQ_1nXZOaocUttjY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-base lg:text-lg group active:scale-95"
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            <span>Download Resume</span>
          </motion.a>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center py-4"
          >
            <p className="text-xs lg:text-sm text-gray-400">
              Designed with 💜 inspired by Canva
            </p>
            <p className="text-xs lg:text-sm text-gray-400 mt-1">
              Developed by Jos_zenith
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
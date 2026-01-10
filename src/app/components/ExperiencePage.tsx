import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

interface ExperiencePageProps {
  searchQuery: string;
}

export function ExperiencePage({ searchQuery }: ExperiencePageProps) {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Team Lead',
      organization: 'Electric Four Wheeler Design Club (SAEISS)',
      period: 'February - November 2025',
      description: 'Led a 22-member cross-functional engineering team (Mechanical, Electrical, Electronics, IT) to design and develop an electric 4-wheeler prototype',
      achievements: [
        'Spearheaded a multidisciplinary engineering squad of 22 members (Mechanical, Electrical, IT) through the full product development lifecycle of an electric vehicle.',
        'Orchestrated complex project roadmaps, procurement logistics and milestone tracking to ensure seamless integration of hardware and software',
        'Secured a National Podium Finish (3rd Place) at EFWDC\'25, outperforming dozens of top-tier engineering institutions across India',
      ],
      color: 'purple',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: 2,
      type: 'work',
      title: 'Founder & Developer',
      organization: 'Panjaayathu - Wellness Startup',
      period: 'October 2025 - Present',
      description: 'Designing and developing a digital mental-health platform integrating with therapeutic CBT frameworks',
      achievements: [
        'Engineering the end-to-end technical stack, focusing on a user-centric interface and a secure, HIPAA-compliant architecture for sensitive data',
        'Managing the full product lifecycle, from initial wireframing and database design to user onboarding and feedback loop',
      ],
      color: 'green',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: 3,
      type: 'work',
      title: 'ParkinToday - Co-Founder & CTO',
      organization: 'IoT-based Smart Parking Startup',
      period: 'September 2024 - current',
      description: 'Co-founded an IoT startup providing real-time parking management solutions for urban areas',
      achievements: [
        'Engineered the backend infrastructure to process live data streams, significantly reducing the time spent by users searching for parking',
        'Architecting a high-concurrency IoT ecosystem for real-time urban parking management, integrating sensor data with cloud-based analytics',
        'Awarded 1st Place at the ECircle B-Pitch Competition, recognized for technical innovation and a viable business model',
      ],
      color: 'blue',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: 4,
      type: 'internship',
      title: 'AI & Machine Learning Intern',
      organization: 'Edunet Foundation (Under AICTE)',
      period: 'June 2025 - July 2025',
      description: 'Completed a structured internship in AI & Machine Learning under AICTE\'s Edunet program',
      achievements: [
        'Developed ML models including regression-based salary predictor',
        'Worked with Python, NumPy, Pandas, Scikit-learn',
        'Applied ML algorithms to real-world datasets',
      ],
      color: 'blue',
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  const education = {
    degree: 'Bachelor of Information Technology',
    institution: 'Loyola ICAM College of Engineering and Technology',
    cgpa: '7.0 (Current)',
    period: '2023 - 2027',
  };

  const certifications = [
    'Agile Business Analysis - Udemy',
    'Networks & Network security - Coursera',
    'Foundations of cybersecurity - Coursera',
    'Security risk management - Coursera',
    'C, Mysql, Java & Python Programming - Skillrack (Hands-on)',
    'AI Fundamentals - IBM skillsbuild',
    'Ports & Protocols - Springboard',
  ];

  const filteredExperiences = experiences.filter(exp =>
    exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl mb-2">Experience & Education</h1>
        <p className="text-sm lg:text-base text-gray-500">My professional journey</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 lg:p-8 text-white"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl mb-2">{education.degree}</h3>
                <p className="text-purple-100">{education.institution}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-purple-100">CGPA: {education.cgpa}</span>
              <span className="text-purple-100">•</span>
              <span className="text-purple-100">{education.period}</span>
            </div>
          </motion.div>

          {/* Work Experience */}
          <div className="space-y-4">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${
                    exp.color === 'purple' ? 'from-purple-500 to-pink-500' :
                    exp.color === 'green' ? 'from-green-500 to-emerald-500' :
                    'from-blue-500 to-cyan-500'
                  } flex items-center justify-center text-white flex-shrink-0`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl mb-1">{exp.title}</h3>
                    <p className="text-sm lg:text-base text-gray-600">{exp.organization}</p>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 mb-4 text-purple-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>

                {/* Description */}
                <p className="text-sm lg:text-base text-gray-600 mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 flex-1">{achievement}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar - Certifications */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24"
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-purple-500" />
              <h2 className="text-lg lg:text-xl">Certifications</h2>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 flex-1">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {filteredExperiences.length === 0 && searchQuery && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No experience found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}

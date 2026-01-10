import { motion } from 'motion/react';
import { Code, Cpu, Wrench, Trophy, Star } from 'lucide-react';

interface SkillsPageProps {
  searchQuery: string;
}

export function SkillsPage({ searchQuery }: SkillsPageProps) {
  const skillCategories = [
    {
      id: 1,
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['Python', 'Java', 'C', 'React', 'SQL', 'Nextjs', 'Embedded C', 'Figma', 'Nodejs', 'TailwindCSS'],
    },
    {
      id: 2,
      title: 'Technologies',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['IoT', 'Embedded Systems (Arduino, ESP32, Pi)', 'MATLAB', 'Networks', 'Web Development'],
    },
    {
      id: 3,
      title: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: ['Jira', 'Trello', 'MS Excel (Advanced)', 'Power BI', 'AutoCAD', 'NX CAD', 'Simulink'],
    },
    {
      id: 4,
      title: 'Core Competencies',
      icon: <Star className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: ['Agile Project Management', 'Leadership', 'Hardware-Software Integration', 'Documentation'],
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Envision\'23 - 1st Place',
      description: 'Built an IoT-based gesture-controlled wheelchair; won ₹10,000',
      icon: '🥇',
      color: 'from-purple-400 to-pink-500',
    },
    {
      id: 3,
      title: 'ECircle B-Pitch - 1st Place',
      description: 'Best pitch for real-time parking management solution',
      icon: '🎯',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      id: 2,
      title: 'INDIA@2047 - 2nd Place',
      description: 'Built IoT-based glaucoma eye pressure measuring device',
      icon: '🥈',
      color: 'from-green-400 to-emerald-500',
    },
    {
      id: 4,
      title: 'EFWDC\'25 - 3rd Place',
      description: 'Developed an energy-efficient electric vehicle; secured 3rd place under Chairman’s Special Award category',
      icon: '⚡',
      color: 'from-indigo-400 to-purple-500',
    },
    {
      id: 5,
      title: 'EFWDC\'24 - 4th Place',
      description: 'Designed an efficient electric 4-wheeler; won ₹10,000',
      icon: '⚡',
      color: 'from-indigo-400 to-purple-500',
    },
    {
      id: 6,
      title: 'ImpactX 2.0 - 4th Place',
      description: 'Developed a driver passenger interaction device for ride-hailing services',
      icon: '🚗',
      color: 'from-pink-400 to-rose-500',
    },
    {
      id: 7,
      title: 'KSR Innovative Business pitch - 5th Place',
      description: 'Pitch for IoT-based smart parking solution for Indian Tier-1 cities',
      icon: '🏅',
      color: 'from-yellow-400 to-orange-500',
    }
  ];

  const filteredCategories = skillCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredAchievements = achievements.filter(achievement =>
    achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    achievement.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl mb-2">Skills & Achievements</h1>
        <p className="text-sm lg:text-base text-gray-500">Technical expertise and accomplishments</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills Section */}
          <div className="space-y-4">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl text-sm border border-purple-100 hover:bg-purple-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <div>
            <h2 className="text-xl lg:text-2xl mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-purple-500" />
              <span>Achievements</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
              {filteredAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm mb-1">{achievement.title}</h3>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Stats */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 lg:p-8 text-white sticky top-24"
          >
            <h3 className="text-lg lg:text-xl mb-6">Quick Stats</h3>
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
                <div className="text-3xl lg:text-4xl mb-2">450+</div>
                <div className="text-sm text-purple-100">Problems Solved</div>
                <div className="text-xs text-purple-200 mt-1">Skillrack Global Ranking</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
                <div className="text-3xl lg:text-4xl mb-2">6</div>
                <div className="text-sm text-purple-100">Competitions Won</div>
                <div className="text-xs text-purple-200 mt-1">National & College Level</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
                <div className="text-3xl lg:text-4xl mb-2">7+</div>
                <div className="text-sm text-purple-100">Certifications</div>
                <div className="text-xs text-purple-200 mt-1">Industry Recognized</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
                <div className="text-3xl lg:text-4xl mb-2">22</div>
                <div className="text-sm text-purple-100">Team Members Led</div>
                <div className="text-xs text-purple-200 mt-1">Cross-functional Teams</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {(filteredCategories.length === 0 && filteredAchievements.length === 0) && searchQuery && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No skills or achievements found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}
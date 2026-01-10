import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';

interface ProjectsPageProps {
  searchQuery: string;
}

export function ProjectsPage({ searchQuery }: ProjectsPageProps) {
  const projects = [
    {
      id: 1,
      title: 'Electric 4-Wheeler Prototype',
      category: 'Engineering',
      description: 'Designed and developed an electric 4-wheeler prototype with a 22-member team',
      image: 'https://i.postimg.cc/P55smBJh/Whats-App-Image-2025-08-09-at-16-56-26-477fa066.jpg',
      tags: ['Team Leadership', 'Engineering', 'EV Design'],
      color: 'purple',
      achievement: '🏆 3rd Place EFWDC\'25',
    },
    {
      id: 2,
      title: 'EmployeeFit',
      category: 'Web development',
      description: 'Turning psychometrics into career clarity for South Indian engineers',
      image: 'https://i.postimg.cc/rsHWf6Tb/mechanical-gears-integration-human-brain-silhouette-innovation-creativity-concept-1332469-219.jpg',
      tags: ['Full Stack', 'Health Tech', 'UX Design'],
      color: 'green',
      achievement: '💡 Nellai Hackathon (STARTUPTN)',
    },
    {
      id: 3,
      title: 'Storm-Resilient Mars Rover',
      category: 'PCB design',
      description: 'Designed a storm-resilient Mars rover with advanced navigation systems',
      image: 'https://i.postimg.cc/9F4NCCDC/Screenshot-2026-01-10-102544.png',
      tags: ['PCB design', 'Embedded Systems', 'CAD design'],
      color: 'cyan',
      achievement: '🏆 Hardware Hackathon 2.0',
    },
    {
      id: 4,
      title: 'Karuvelam',
      category: 'Web development',
      description: 'Turning invasive weeds into world-class bio-preservatives',
      image: 'https://i.postimg.cc/hP9T95wZ/glass-beaker-with-green-leaf-inside-971713-5040.avif',
      tags: ['fullstack', 'NumPy', 'Scikit-learn'],
      color: 'blue',
      achievement: '💡 Ramnad Hackathon (STARTUPTN)',
    },
    {
      id: 5,
      title: 'Parkintoday',
      category: 'IoT',
      description: 'Best pitch for real-time parking management solution',
      image: 'https://i.postimg.cc/rmN2Gc1X/Screenshot-2026-01-10-102110.png',
      tags: ['IoT', 'Web Dev', 'infra Design'],
      color: 'pink',
      achievement: '🥇 1st Place ECircle B-Pitch',
    },
    {
      id: 6,
      title: 'Jalodhyam',
      category: 'web development',
      description: 'Turning village water data into community power for Kerala villages',
      image: 'https://i.postimg.cc/Y2Jqp2dF/A-digital-illustrati.png',
      tags: ['Fullstack', 'React', 'Node.js'],
      color: 'green',
      achievement: '💡 Smart India hackathon',
    },
    {
      id: 7,
      title: 'E-Mart Inventory Management System',
      category: 'web development',
      description: 'A sleek, full-stack shopping experience online',
      image: 'https://i.postimg.cc/QtFh3v1d/computer.png',
      tags: ['Full Stack', 'Inventory Management', 'Web App'],
      color: 'blue',
      achievement: '💡 Mini-Project',
    },
    {
      id: 8,
      title: 'IoT Gesture Wheelchair',
      category: 'IoT',
      description: 'Built IoT-based gesture-controlled wheelchair for differently-abled individuals',
      image: 'https://i.postimg.cc/d04Vv8f7/Screenshot-2026-01-10-110642.png',
      tags: ['Arduino', 'IoT', 'Embedded C', 'CAD design'],
      color: 'orange',
      achievement: '🥇 1st Place Envision\'23 - ₹10,000',
    },
    {
      id: 9,
      title: 'Raid-hailing Driver-Passenger Interaction Device',
      category: 'IoT',
      description: 'Developed a driver passenger interaction device for ride-hailing services',
      image: 'https://i.postimg.cc/8zYZY3pP/Screenshot-2026-01-10-105536.png',
      tags: ['IoT', 'Embedded Systems', 'Arduino'],
      color: 'purple',
      achievement: '🏅 4th Place ImpactX 2.0',
    },
    
    
    {
      id: 10,
      title: 'Glaucoma Pressure Monitor',
      category: 'Healthcare IoT',
      description: 'IoT-based glaucoma eye pressure measuring device',
      image: 'https://i.postimg.cc/3JRCHBb1/Screenshot-2026-01-10-105932.png',
      tags: ['IoT', 'Healthcare', 'Prototype'],
      color: 'cyan',
      achievement: '🥈 2nd Place INDIA@2047',
    },
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const colorClasses = {
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    blue: 'from-blue-500 to-cyan-500',
    orange: 'from-orange-500 to-red-500',
    pink: 'from-pink-500 to-rose-500',
    cyan: 'from-cyan-500 to-blue-500',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl mb-2">Projects</h1>
        <p className="text-sm lg:text-base text-gray-500">Explore my work and achievements</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all cursor-pointer group"
          >
            {/* Project Image */}
            <div className="relative h-48 lg:h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[project.color as keyof typeof colorClasses]} opacity-20`} />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-5 lg:p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base lg:text-lg flex-1 group-hover:text-purple-600 transition-colors">{project.title}</h3>
                <button className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 hover:bg-purple-100 transition-all opacity-0 group-hover:opacity-100">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {project.description}
              </p>

              {/* Achievement Badge */}
              {project.achievement && (
                <div className="bg-purple-50 rounded-xl px-3 py-2 mb-3 inline-block">
                  <span className="text-xs text-purple-700">{project.achievement}</span>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No projects found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}
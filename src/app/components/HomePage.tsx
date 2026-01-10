import { motion } from 'motion/react';
import { Sparkles, FileText, Download, ExternalLink, ArrowRight, Plus, Palette, Presentation, Video, Instagram, Code2, Trophy, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { TemplateEditor } from './TemplateEditor';

interface HomePageProps {
  searchQuery: string;
  setActiveTab: (tab: string) => void;
}

export function HomePage({ searchQuery, setActiveTab }: HomePageProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [counters, setCounters] = useState({ problems: 0, awards: 0, team: 0 });

  // Animate counters on mount
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    
    const targets = { problems: 500, awards: 6, team: 15 };
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        problems: Math.floor(targets.problems * progress),
        awards: Math.floor(targets.awards * progress),
        team: Math.floor(targets.team * progress),
      });
      
      if (step >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const templates = [
    {
      id: 1,
      title: 'Skillrack Profile',
      category: 'Resume',
      icon: <FileText className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'Competitive coding profile',
      link: 'https://www.skillrack.com/faces/resume.xhtml?id=446603&key=f9045f93b0e369e843179049553d743fc9e36693',
      stats: {
        label: 'Global Rank',
        value: '50,000',
        subtext: 'Top Coder',
        icon: <Code2 className="w-5 h-5" />,
      }
    },
    {
      id: 2,
      title: 'Duolingo',
      category: 'Portfolio',
      icon: <Palette className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Language learning streak',
      link: 'https://www.duolingo.com/profile/jos_zen?via=share_profile_link',
      stats: {
        label: 'Day Streak',
        value: '520',
        subtext: 'Days in a row',
        icon: <Sparkles className="w-5 h-5" />,
      }
    },
    {
      id: 3,
      title: 'Leetcode',
      category: 'Presentation',
      icon: <Presentation className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: 'Problems solved',
      link: 'https://leetcode.com/u/Zenith_Joshua/',
      stats: {
        label: 'Problems',
        value: '150+',
        subtext: 'Solved',
        icon: <Code2 className="w-5 h-5" />,
      }
    },
    {
      id: 4,
      title: 'Unstop',
      category: 'Social',
      icon: <Instagram className="w-5 h-5" />,
      color: 'from-pink-500 to-rose-500',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      description: 'Competition platform',
      link: 'https://unstop.com/u/zenitjos7470',
      stats: {
        label: 'Competitions',
        value: '25+',
        subtext: 'Participated',
        icon: <Trophy className="w-5 h-5" />,
      }
    },
  ];

  const quickActions = [
    { title: 'Download Resume', icon: <Download className="w-5 h-5" />, action: 'download' },
    { title: 'View Projects', icon: <ExternalLink className="w-5 h-5" />, action: 'projects' },
    { title: 'Contact Me', icon: <ArrowRight className="w-5 h-5" />, action: 'about' },
  ];

  const handleAction = (action: string) => {
    if (action === 'projects' || action === 'about') {
      setActiveTab(action);
    } else if (action === 'download') {
      // Handle resume download
      window.open('https://docs.google.com/document/d/1ojae1n-xKYxAsfgFJk5XETuKijtpQ_1nXZOaocUttjY/edit?usp=sharing', '_blank');
    }
  };

  const handleTemplateClick = (template: any) => {
    // If template has a link, open it in a new tab
    if (template.link) {
      window.open(template.link, '_blank');
    } else {
      setSelectedTemplate(template);
    }
  };

  return (
    <>
      <div className="min-h-[calc(100vh-140px)] lg:min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Available for opportunities</span>
              </motion.div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl lg:text-6xl mb-4">
                  <span className="block mb-2">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Zenith Joshua
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600">
                  Tech Enthusiast & Entrepreneur
                </p>
                <p className="text-base lg:text-lg text-gray-500 mt-4 max-w-xl mx-auto lg:mx-0">
                  I am a Technical Founder and Developer dedicated to solving complex real-world problems through integrated hardware and software systems
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 lg:gap-4 py-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl lg:text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                    {counters.problems}+
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600">Problems Solved</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border border-yellow-100 hover:border-yellow-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl lg:text-3xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-1">
                    {counters.awards}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600">Awards Won</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl lg:text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                    {counters.team}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600">Projects Completed</div>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    onClick={() => handleAction(action.action)}
                    className={`${
                      index === 0
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
                    } px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95`}
                  >
                    {action.icon}
                    <span>{action.title}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Resume Preview & Templates */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Resume Card - Canva Template Style */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg">My Resume</h3>
                      <p className="text-sm text-gray-500">Updated Jan 2026</p>
                    </div>
                  </div>
                  <a href="https://docs.google.com/document/d/1ojae1n-xKYxAsfgFJk5XETuKijtpQ_1nXZOaocUttjY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-purple-600 transition-all">
                    <Download className="w-5 h-5" />
                  </a>
                </div>

                {/* Resume Preview */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl">
                      ZJ
                    </div>
                    <div>
                      <div className="text-lg">Zenith Joshua</div>
                      <div className="text-sm text-gray-600">Tech Enthusiast & Entrepreneur</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span>Student @Loyola ICAM</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span>Team Lead @ EFWDC SAEISS</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span>Founder @ Panjaayathu Wellness</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span>Co-Founder @ ParkinToday </span>
                    </div>
                  </div>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Python', 'Java', 'IoT', 'Next.js', 'Leadership'].map((skill) => (
                      <span key={skill} className="bg-white px-3 py-1 rounded-full text-xs text-gray-700 border border-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Full Resume Button */}
                <button 
                  onClick={() => setActiveTab('about')}
                  className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Template Grid - Canva Style */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm"></h3>
                  <button className="text-sm text-purple-600 hover:text-purple-700"></button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {templates.map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      onClick={() => handleTemplateClick(template)}
                      className="group bg-white rounded-2xl p-4 border border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div 
                        className="w-full h-24 rounded-xl mb-3 flex flex-col items-center justify-center relative overflow-hidden p-3"
                        style={{ background: template.image }}
                      >
                        {/* Stats Display */}
                        <div className="text-white relative z-10 text-center">
                          <div className="flex items-center justify-center gap-1.5 mb-1 opacity-90">
                            {template.stats.icon}
                          </div>
                          <div className="text-2xl mb-0.5">{template.stats.value}</div>
                          <div className="text-xs opacity-90">{template.stats.label}</div>
                        </div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-all">
                            <ExternalLink className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <h4 className="text-sm mb-1">{template.title}</h4>
                      <p className="text-xs text-gray-500">{template.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recent Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 lg:mt-16"
          >
            <h2 className="text-xl lg:text-2xl mb-6 text-center lg:text-left">Recent Highlights</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Hardware Hackathon 2.0',
                  description: 'Designed a storm-resilient Mars rover with advanced navigation systems',
                  icon: '🥇',
                  color: 'from-purple-400 to-pink-500',
                },
                {
                  title: 'EFWDC\'25 - 3rd Place',
                  description: 'Led 22-member team to national achievement',
                  icon: '🏆',
                  color: 'from-yellow-400 to-orange-500',
                },
                {
                  title: 'Panjaayathu Launch',
                  description: 'Founded mental health wellness platform',
                  icon: '💡',
                  color: 'from-green-400 to-emerald-500',
                },
              ].map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center text-2xl mb-3`}>
                    {highlight.icon}
                  </div>
                  <h3 className="text-sm mb-1">{highlight.title}</h3>
                  <p className="text-xs text-gray-500">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Template Editor Modal */}
      {selectedTemplate && (
        <TemplateEditor
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </>
  );
}
import { useState } from 'react';
import { Home, Briefcase, User, Award, Mail, Search, Plus, Bell, Menu } from 'lucide-react';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ExperiencePage } from './components/ExperiencePage';
import { SkillsPage } from './components/SkillsPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage searchQuery={searchQuery} setActiveTab={setActiveTab} />;
      case 'projects':
        return <ProjectsPage searchQuery={searchQuery} />;
      case 'experience':
        return <ExperiencePage searchQuery={searchQuery} />;
      case 'skills':
        return <SkillsPage searchQuery={searchQuery} />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage searchQuery={searchQuery} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 lg:bg-white">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-20 bg-white border-r border-gray-200 z-50">
        <div className="flex flex-col items-center py-6 h-full">
          {/* Logo */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-8">
            <span className="text-white text-xl">Z</span>
          </div>
          
          {/* Nav Items */}
          <div className="flex-1 flex flex-col gap-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                activeTab === 'home'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-purple-500'
              }`}
              title="Home"
            >
              <Home className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setActiveTab('projects')}
              className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                activeTab === 'projects'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-purple-500'
              }`}
              title="Projects"
            >
              <Briefcase className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setActiveTab('experience')}
              className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                activeTab === 'experience'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-purple-500'
              }`}
              title="Experience"
            >
              <Award className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setActiveTab('skills')}
              className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                activeTab === 'skills'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-purple-500'
              }`}
              title="Skills"
            >
              <User className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setActiveTab('about')}
              className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                activeTab === 'about'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-purple-500'
              }`}
              title="Contact"
            >
              <Mail className="w-6 h-6" />
            </button>
          </div>

          {/* Profile */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm">
            ZJ
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <div className="lg:pl-20">
        {/* Header with Search */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3">
            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <button className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600">
                <Menu className="w-5 h-5" />
              </button>

              {/* Desktop: Canva Logo Text */}
              <div className="hidden lg:block">
                <h1 className="text-xl">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Zenith</span>
                  <span className="text-gray-700 ml-1">Portfolio</span>
                </h1>
              </div>
              
              {/* Search Bar */}
              <div className="flex-1 max-w-2xl relative">
                <Search className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 lg:pl-12 pr-3 lg:pr-4 py-2 lg:py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 focus:bg-white border-0 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-sm"
                />
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-2">
                <button className="hidden lg:flex w-10 h-10 items-center justify-center rounded-lg hover:bg-gray-100 transition-all text-gray-600">
                  <Bell className="w-5 h-5" />
                </button>
                
                {/* Mobile Profile */}
                <div className="lg:hidden w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs">
                  ZJ
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="pb-28 lg:pb-8">
          {renderPage()}
        </main>
      </div>

      {/* Mobile Bottom Navigation (Canva-style) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 pb-safe">
        <div className="px-2 py-3">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[56px] ${
                activeTab === 'home'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 active:bg-gray-100'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-[10px] font-medium">Home</span>
            </button>
            
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[56px] ${
                activeTab === 'projects'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 active:bg-gray-100'
              }`}
            >
              <Briefcase className="w-6 h-6" />
              <span className="text-[10px] font-medium">Projects</span>
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[56px] ${
                activeTab === 'experience'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 active:bg-gray-100'
              }`}
            >
              <Award className="w-6 h-6" />
              <span className="text-[10px] font-medium">Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[56px] ${
                activeTab === 'skills'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 active:bg-gray-100'
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-[10px] font-medium">Skills</span>
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[56px] ${
                activeTab === 'about'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 active:bg-gray-100'
              }`}
            >
              <Mail className="w-6 h-6" />
              <span className="text-[10px] font-medium">Contact</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Floating Action Button (Canva Create Button) */}
      <button className="fixed bottom-32 lg:bottom-8 right-4 lg:right-8 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all flex items-center justify-center text-white z-40 active:scale-95">
        <Plus className="w-7 h-7 lg:w-8 lg:h-8" />
      </button>
    </div>
  );
}
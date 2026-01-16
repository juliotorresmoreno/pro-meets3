import { 
  FaUser,
  FaCogs,
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaHeart,
  FaLink,
  FaMapMarkerAlt,
  FaGlobe,
  FaCertificate,
  FaFilePdf,
  FaCog
} from "react-icons/fa";

export type ProfileMenuItem = 
  | 'basic-info' 
  | 'skills-preferences' 
  | 'experience' 
  | 'education' 
  | 'projects' 
  | 'interests' 
  | 'links' 
  | 'work-preferences' 
  | 'languages' 
  | 'certifications' 
  | 'resume'
  | 'settings';

interface ProfileSidebarProps {
    selectedMenuItem: ProfileMenuItem;
}

export default function ProfileSidebar({ selectedMenuItem }: ProfileSidebarProps) {
    const menuItems = [
        {
            id: 'basic-info',
            label: 'Basic Info',
            description: 'Update your personal details',
            icon: FaUser,
            emoji: '📝'
        },
        {
            id: 'skills-preferences',
            label: 'Skills & Preferences',
            description: 'Add your technical expertise',
            icon: FaCogs,
            emoji: '🛠️'
        },
        {
            id: 'experience',
            label: 'Experience',
            description: 'Share your work history',
            icon: FaBriefcase,
            emoji: '💼'
        },
        {
            id: 'education',
            label: 'Education',
            description: 'Add your academic background',
            icon: FaGraduationCap,
            emoji: '🎓'
        },
        {
            id: 'projects',
            label: 'Projects',
            description: 'Showcase your work',
            icon: FaProjectDiagram,
            emoji: '🚀'
        },
        {
            id: 'interests',
            label: 'Interests',
            description: 'Share what motivates you',
            icon: FaHeart,
            emoji: '❤️'
        },
        {
            id: 'links',
            label: 'Links',
            description: 'Add your professional profiles',
            icon: FaLink,
            emoji: '🔗'
        },
        {
            id: 'work-preferences',
            label: 'Work Preferences',
            description: 'Job search status and salary expectations',
            icon: FaMapMarkerAlt,
            emoji: '📝'
        },
        {
            id: 'languages',
            label: 'Languages',
            description: 'Languages you speak and proficiency',
            icon: FaGlobe,
            emoji: '🌍'
        },
        {
            id: 'certifications',
            label: 'Certifications',
            description: 'Professional certifications and credentials',
            icon: FaCertificate,
            emoji: '📜'
        },
        {
            id: 'resume',
            label: 'Resume',
            description: 'Upload your resume',
            icon: FaFilePdf,
            emoji: '📝'
        },
        {
            id: 'settings',
            label: 'Settings',
            description: 'Account and privacy settings',
            icon: FaCog,
            emoji: '⚙️'
        }
    ];

    return (
        <aside className="w-80 bg-white border-r border-gray-200 min-h-screen">
            <div className="p-6">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Setup</h2>
                    <p className="text-gray-600">Complete your profile to improve your job matches</p>
                    <div className="mt-4">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Profile Completeness</span>
                            <span className="text-sm font-semibold text-purple-600">65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                                className="bg-purple-600 h-2 rounded-full" 
                                style={{ width: '65%' }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                    {menuItems.map((item) => {
                        const isSelected = selectedMenuItem === item.id;
                        
                        return (
                            <a
                                key={item.id}
                                href={`?section=${item.id.replace(/ & /g, '-').replace(/ /g, '-').toLowerCase()}`}
                                className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-200 ${
                                    isSelected 
                                        ? 'bg-purple-50 border border-purple-100 shadow-sm' 
                                        : 'hover:bg-gray-50 border border-transparent hover:border-gray-100'
                                }`}
                            >
                                {/* Left Icon */}
                                <div className={`p-3 rounded-lg ${
                                    isSelected ? 'bg-purple-100' : 'bg-gray-100'
                                }`}>
                                    <span className="text-lg">{item.emoji}</span>
                                </div>
                                
                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className={`font-medium ${
                                            isSelected ? 'text-purple-700' : 'text-gray-900'
                                        }`}>
                                            {item.label}
                                        </h3>
                                        {isSelected && (
                                            <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                                        )}
                                    </div>
                                    <p className={`text-sm mt-1 ${
                                        isSelected ? 'text-purple-600' : 'text-gray-600'
                                    }`}>
                                        {item.description}
                                    </p>
                                </div>
                                
                                {/* Right Indicator */}
                                <div className={`flex items-center ${
                                    isSelected ? 'text-purple-500' : 'text-gray-400'
                                }`}>
                                    {item.id === 'Skills & Preferences' && (
                                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
                                            3/5
                                        </span>
                                    )}
                                    {item.id === 'Experience' && (
                                        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">
                                            2
                                        </span>
                                    )}
                                    {item.id === 'Resume' && (
                                        <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full font-medium">
                                            PDF
                                        </span>
                                    )}
                                </div>
                            </a>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="space-y-4">
                        <div className="p-4 bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl">
                            <h3 className="font-semibold text-gray-900 mb-2">💡 Tips</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Complete all sections to increase your visibility by 70%
                            </p>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Profile Strength</span>
                            <div className="flex items-center space-x-2">
                                <div className="flex space-x-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div 
                                            key={i}
                                            className={`h-2 w-2 rounded-full ${
                                                i <= 3 ? 'bg-green-500' : 'bg-gray-300'
                                            }`}
                                        ></div>
                                    ))}
                                </div>
                                <span className="font-medium text-gray-900">Medium</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
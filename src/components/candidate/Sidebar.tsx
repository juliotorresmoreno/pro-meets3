
import { FaBriefcase, FaCalendarAlt, FaChartLine, FaCog, FaFileAlt, FaHome, FaUsers } from "react-icons/fa";

type MenuItem = 'dashboard' | 'jobs' | 'candidates' | 'interviews' | 'analytics' | 'reports' | 'settings';

interface SidebarProps {
    selectedMenuItem: MenuItem;
}

export default function Sidebar({ selectedMenuItem }: SidebarProps) {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]">
            <div className="p-6">
                <div className="flex items-center space-x-3 mb-8">
                    <div className="h-10 w-10 bg-linear-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <FaBriefcase className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">ProMeets</h2>
                </div>

                <nav className="space-y-1">
                    <a href="#" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${selectedMenuItem === 'dashboard' ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                        <FaHome className="h-5 w-5" />
                        <span className="font-medium">Dashboard</span>
                    </a>
                    <a href="#" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${selectedMenuItem === 'jobs' ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                        <FaBriefcase className="h-5 w-5" />
                        <span>Jobs</span>
                    </a>
                    <a href="#" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${selectedMenuItem === 'candidates' ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                        <FaUsers className="h-5 w-5" />
                        <span>Candidates</span>
                    </a>
                    <a href="#" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${selectedMenuItem === 'interviews' ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                        <FaCalendarAlt className="h-5 w-5" />
                        <span>Interviews</span>
                    </a>
                    <a href="#" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${selectedMenuItem === 'analytics' ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                        <FaChartLine className="h-5 w-5" />
                        <span>Analytics</span>
                    </a>
                    <a href="#" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${selectedMenuItem === 'reports' ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                        <FaFileAlt className="h-5 w-5" />
                        <span>Reports</span>
                    </a>
                    <a href="#" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${selectedMenuItem === 'settings' ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                        <FaCog className="h-5 w-5" />
                        <span>Settings</span>
                    </a>
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="p-4 bg-linear-to-r from-purple-50 to-blue-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Need help?</h3>
                        <p className="text-sm text-gray-600 mb-3">Get support from our team</p>
                        <button className="w-full bg-white text-purple-600 py-2 rounded-lg font-medium hover:bg-gray-50">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}
"use client";

import { useState } from 'react';
import {
    FaSearch,
    FaBell,
    FaBars,
    FaChevronDown,
} from 'react-icons/fa';

interface Notification {
    id: number;
    message: string;
    time: string;
    read: boolean;
}

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [notifications, setNotifications] = useState<Notification[]>([
        { id: 1, message: 'New candidate applied for Senior Developer', time: '10 min ago', read: false },
        { id: 2, message: 'Interview scheduled for tomorrow at 2 PM', time: '1 hour ago', read: true },
        { id: 3, message: 'Job posting approved by admin', time: '2 hours ago', read: false },
    ]);

    const toggleNotificationRead = (id: number) => {
        setNotifications(notifications.map(notif =>
            notif.id === id ? { ...notif, read: !notif.read } : notif
        ));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navigation */}
            <nav className="bg-white border-b border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100"
                        >
                            <FaBars className="h-5 w-5 text-gray-600" />
                        </button>
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Search jobs, candidates, or messages..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-96"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Notifications */}
                        <div className="relative">
                            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                                <FaBell className="h-5 w-5 text-gray-600" />
                                {notifications.filter(n => !n.read).length > 0 && (
                                    <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                                )}
                            </button>

                            {/* Notification Dropdown */}
                            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 hidden group-hover:block">
                                <div className="px-4 py-2 border-b border-gray-100">
                                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                                </div>
                                {notifications.map(notification => (
                                    <div
                                        key={notification.id}
                                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                                        onClick={() => toggleNotificationRead(notification.id)}
                                    >
                                        <p className="text-sm text-gray-900">{notification.message}</p>
                                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* User Profile */}
                        <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                                JD
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">John Doe</p>
                                <p className="text-xs text-gray-500">Recruiter</p>
                            </div>
                            <FaChevronDown className="h-4 w-4 text-gray-500" />
                        </div>
                    </div>
                </div>
            </nav>


            {children}

        </div>
    );
};

export default DashboardLayout;
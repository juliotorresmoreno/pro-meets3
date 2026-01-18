"use client";

import { useState } from 'react';
import {
    FaPlus,
    FaTimes,
    FaEdit,
    FaTrash,
    FaBriefcase,
    FaCalendarAlt,
    FaBuilding,
    FaUserTie,
    FaFileAlt,
    FaCheckCircle,
    FaLink,
    FaChevronDown,
    FaChevronUp
} from 'react-icons/fa';

interface Accomplishment {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    certificateUrl: string;
}

interface WorkExperience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
    description: string;
    accomplishments: Accomplishment[];
}

const WorkExperience = () => {
    const [experiences, setExperiences] = useState<WorkExperience[]>([
        {
            id: '1',
            company: 'TechCorp Inc.',
            position: 'Senior Software Engineer',
            startDate: '2022-01',
            endDate: '2023-12',
            currentlyWorking: false,
            description: 'Led development of microservices architecture for enterprise SaaS platform. Implemented CI/CD pipelines and improved system performance by 40%.',
            accomplishments: [
                {
                    id: '1-1',
                    title: 'Best Engineer Award',
                    issuer: 'TechCorp Leadership',
                    date: '2023-12',
                    description: 'Recognized for exceptional contributions to platform scalability and team mentorship.',
                    certificateUrl: 'https://certificates.techcorp.com/12345'
                }
            ]
        },
        {
            id: '2',
            company: 'StartupXYZ',
            position: 'Full Stack Developer',
            startDate: '2020-06',
            endDate: '2021-12',
            currentlyWorking: false,
            description: 'Built customer-facing web applications using React and Node.js. Collaborated with product team to implement user feedback.',
            accomplishments: []
        }
    ]);

    const [isAddingExperience, setIsAddingExperience] = useState(false);
    const [isAddingAccomplishment, setIsAddingAccomplishment] = useState<string | null>(null);
    const [expandedExperience, setExpandedExperience] = useState<string | null>('1');

    const [newExperience, setNewExperience] = useState<Partial<WorkExperience>>({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        description: '',
        accomplishments: []
    });

    const [newAccomplishment, setNewAccomplishment] = useState<Partial<Accomplishment>>({
        title: '',
        issuer: '',
        date: '',
        description: '',
        certificateUrl: ''
    });

    const handleAddExperience = () => {
        if (!newExperience.company || !newExperience.position || !newExperience.startDate) {
            alert('Please fill in all required fields: Company, Position, and Start Date');
            return;
        }

        const experience: WorkExperience = {
            id: Date.now().toString(),
            company: newExperience.company!,
            position: newExperience.position!,
            startDate: newExperience.startDate!,
            endDate: newExperience.currentlyWorking ? 'Present' : newExperience.endDate!,
            currentlyWorking: newExperience.currentlyWorking || false,
            description: newExperience.description || '',
            accomplishments: []
        };

        setExperiences([experience, ...experiences]);
        setNewExperience({
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            currentlyWorking: false,
            description: '',
            accomplishments: []
        });
        setIsAddingExperience(false);
        setExpandedExperience(experience.id);
    };

    const handleAddAccomplishment = (experienceId: string) => {
        if (!newAccomplishment.title || !newAccomplishment.issuer || !newAccomplishment.date) {
            alert('Please fill in all required fields: Title, Issuer, and Date');
            return;
        }

        const accomplishment: Accomplishment = {
            id: `${experienceId}-${Date.now()}`,
            title: newAccomplishment.title!,
            issuer: newAccomplishment.issuer!,
            date: newAccomplishment.date!,
            description: newAccomplishment.description || '',
            certificateUrl: newAccomplishment.certificateUrl || ''
        };

        setExperiences(experiences.map(exp =>
            exp.id === experienceId
                ? { ...exp, accomplishments: [...exp.accomplishments, accomplishment] }
                : exp
        ));

        setNewAccomplishment({
            title: '',
            issuer: '',
            date: '',
            description: '',
            certificateUrl: ''
        });
        setIsAddingAccomplishment(null);
    };

    const handleDeleteExperience = (id: string) => {
        if (confirm('Are you sure you want to delete this work experience?')) {
            setExperiences(experiences.filter(exp => exp.id !== id));
        }
    };

    const handleDeleteAccomplishment = (experienceId: string, accomplishmentId: string) => {
        setExperiences(experiences.map(exp =>
            exp.id === experienceId
                ? { ...exp, accomplishments: exp.accomplishments.filter(acc => acc.id !== accomplishmentId) }
                : exp
        ));
    };

    const toggleExperience = (id: string) => {
        setExpandedExperience(expandedExperience === id ? null : id);
    };

    const formatDate = (dateString: string) => {
        if (dateString === 'Present') return 'Present';
        const [year, month] = dateString.split('-');
        const date = new Date(parseInt(year), parseInt(month) - 1);
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    const calculateDuration = (startDate: string, endDate: string) => {
        if (endDate === 'Present') {
            const start = new Date(startDate);
            const now = new Date();
            const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;
            return `${years > 0 ? `${years} yr${years > 1 ? 's' : ''} ` : ''}${remainingMonths > 0 ? `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}` : ''}`.trim();
        }

        const start = new Date(startDate);
        const end = new Date(endDate);
        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        return `${years > 0 ? `${years} yr${years > 1 ? 's' : ''} ` : ''}${remainingMonths > 0 ? `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}` : ''}`.trim();
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl">
                        <FaBriefcase className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Work Experience</h1>
                        <p className="text-gray-600">
                            Add your work experience and notable accomplishments
                        </p>
                    </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                        <FaCheckCircle className="h-5 w-5 text-orange-600" />
                        <p className="text-orange-700 font-medium">
                            Adding detailed work experience increases your chances of getting hired by 50%.
                        </p>
                    </div>
                </div>
            </div>

            {/* Add New Experience Form */}
            {isAddingExperience ? (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Add New Experience</h2>
                        <button
                            type="button"
                            onClick={() => setIsAddingExperience(false)}
                            className="p-2 text-gray-500 hover:text-gray-700"
                        >
                            <FaTimes className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaBuilding className="inline mr-2 h-4 w-4 text-gray-500" />
                                    Company Name *
                                </label>
                                <input
                                    type="text"
                                    value={newExperience.company}
                                    onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="e.g., Google, Microsoft"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaUserTie className="inline mr-2 h-4 w-4 text-gray-500" />
                                    Position *
                                </label>
                                <input
                                    type="text"
                                    value={newExperience.position}
                                    onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="e.g., Senior Software Engineer"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaCalendarAlt className="inline mr-2 h-4 w-4 text-gray-500" />
                                    Start Date *
                                </label>
                                <input
                                    type="month"
                                    value={newExperience.startDate}
                                    onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaCalendarAlt className="inline mr-2 h-4 w-4 text-gray-500" />
                                    End Date
                                </label>
                                <input
                                    type="month"
                                    value={newExperience.endDate}
                                    onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    disabled={newExperience.currentlyWorking}
                                />
                                <div className="mt-3">
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            checked={newExperience.currentlyWorking}
                                            onChange={(e) => setNewExperience({
                                                ...newExperience,
                                                currentlyWorking: e.target.checked,
                                                endDate: e.target.checked ? '' : newExperience.endDate
                                            })}
                                            className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                                        />
                                        <span className="text-sm text-gray-700">I currently work here</span>
                                    </label>
                                </div>
                            </div>

                            <div className="md:col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Duration
                                </label>
                                <div className="h-full flex items-center">
                                    <div className="px-4 py-3 bg-gray-100 rounded-lg w-full text-gray-700">
                                        {newExperience.startDate && !newExperience.currentlyWorking && newExperience.endDate
                                            ? calculateDuration(newExperience.startDate, newExperience.endDate)
                                            : newExperience.currentlyWorking && newExperience.startDate
                                                ? `${calculateDuration(newExperience.startDate, 'Present')} (ongoing)`
                                                : '--'
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaFileAlt className="inline mr-2 h-4 w-4 text-gray-500" />
                                Description
                            </label>
                            <textarea
                                value={newExperience.description}
                                onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                                placeholder="Describe your responsibilities, achievements, and key projects..."
                            />
                            <div className="mt-2 text-sm text-gray-500">
                                Use bullet points or short paragraphs. Focus on impact and results.
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={() => setIsAddingExperience(false)}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleAddExperience}
                                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-lg font-medium hover:from-orange-700 hover:to-yellow-700 shadow-md"
                            >
                                Add Experience
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mb-6">
                    <button
                        type="button"
                        onClick={() => setIsAddingExperience(true)}
                        className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition-colors group"
                    >
                        <div className="h-12 w-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mb-3 group-hover:from-orange-200 group-hover:to-yellow-200">
                            <FaPlus className="h-5 w-5 text-orange-600" />
                        </div>
                        <span className="text-lg font-medium text-gray-900">Add Experience</span>
                        <span className="text-sm text-gray-600 mt-1">Click to add new work experience</span>
                    </button>
                </div>
            )}

            {/* Experience List */}
            <div className="space-y-6">
                {experiences.map((experience) => (
                    <div key={experience.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        {/* Experience Header */}
                        <div
                            className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => toggleExperience(experience.id)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaBriefcase className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{experience.position}</h3>
                                        <p className="text-gray-700">{experience.company}</p>
                                        <div className="flex items-center space-x-4 mt-2">
                                            <span className="text-sm text-gray-600">
                                                {formatDate(experience.startDate)} - {experience.endDate === 'Present' ? 'Present' : formatDate(experience.endDate)}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                • {calculateDuration(experience.startDate, experience.endDate)}
                                            </span>
                                            {experience.currentlyWorking && (
                                                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button className="p-2 text-gray-500 hover:text-gray-700">
                                        {expandedExperience === experience.id ? (
                                            <FaChevronUp className="h-5 w-5" />
                                        ) : (
                                            <FaChevronDown className="h-5 w-5" />
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteExperience(experience.id);
                                        }}
                                        className="p-2 text-gray-500 hover:text-red-600"
                                    >
                                        <FaTrash className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedExperience === experience.id && (
                            <div className="px-6 pb-6 border-t border-gray-200">
                                {/* Description */}
                                <div className="mt-6">
                                    <h4 className="text-sm font-medium text-gray-700 mb-3">Description</h4>
                                    <div className="prose max-w-none">
                                        <p className="text-gray-700 whitespace-pre-line">{experience.description}</p>
                                    </div>
                                </div>

                                {/* Accomplishments */}
                                <div className="mt-8">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="text-sm font-medium text-gray-700">Accomplishments</h4>
                                        <button
                                            type="button"
                                            onClick={() => setIsAddingAccomplishment(experience.id)}
                                            className="flex items-center space-x-2 px-4 py-2 text-orange-600 hover:text-orange-700"
                                        >
                                            <FaPlus className="h-4 w-4" />
                                            <span>Add Accomplishment</span>
                                        </button>
                                    </div>

                                    {/* Add Accomplishment Form */}
                                    {isAddingAccomplishment === experience.id && (
                                        <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Title *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={newAccomplishment.title}
                                                            onChange={(e) => setNewAccomplishment({ ...newAccomplishment, title: e.target.value })}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                            placeholder="e.g., Employee of the Month"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Issuer *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={newAccomplishment.issuer}
                                                            onChange={(e) => setNewAccomplishment({ ...newAccomplishment, issuer: e.target.value })}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                            placeholder="e.g., Company Leadership"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Date *
                                                        </label>
                                                        <input
                                                            type="month"
                                                            value={newAccomplishment.date}
                                                            onChange={(e) => setNewAccomplishment({ ...newAccomplishment, date: e.target.value })}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            <FaLink className="inline mr-2 h-4 w-4 text-gray-500" />
                                                            Certificate URL
                                                        </label>
                                                        <input
                                                            type="url"
                                                            value={newAccomplishment.certificateUrl}
                                                            onChange={(e) => setNewAccomplishment({ ...newAccomplishment, certificateUrl: e.target.value })}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                            placeholder="https://..."
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Description
                                                    </label>
                                                    <textarea
                                                        value={newAccomplishment.description}
                                                        onChange={(e) => setNewAccomplishment({ ...newAccomplishment, description: e.target.value })}
                                                        rows={3}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                                                        placeholder="Describe the accomplishment..."
                                                    />
                                                </div>

                                                <div className="flex justify-end space-x-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsAddingAccomplishment(null)}
                                                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleAddAccomplishment(experience.id)}
                                                        className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                                                    >
                                                        Add Accomplishment
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Accomplishments List */}
                                    <div className="space-y-4">
                                        {experience.accomplishments.map((accomplishment) => (
                                            <div key={accomplishment.id} className="p-4 border border-gray-200 rounded-lg">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div>
                                                        <h5 className="font-medium text-gray-900">{accomplishment.title}</h5>
                                                        <p className="text-sm text-gray-600">
                                                            {accomplishment.issuer} • {formatDate(accomplishment.date)}
                                                        </p>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDeleteAccomplishment(experience.id, accomplishment.id)}
                                                        className="p-1 text-gray-500 hover:text-red-600"
                                                    >
                                                        <FaTimes className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <p className="text-gray-700 text-sm mb-3">{accomplishment.description}</p>
                                                {accomplishment.certificateUrl && (
                                                    <a
                                                        href={accomplishment.certificateUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center space-x-2 text-sm text-orange-600 hover:text-orange-700"
                                                    >
                                                        <FaLink className="h-3 w-3" />
                                                        <span>View Certificate</span>
                                                    </a>
                                                )}
                                            </div>
                                        ))}

                                        {experience.accomplishments.length === 0 && (
                                            <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-xl">
                                                <div className="text-gray-500 mb-2">No accomplishments added yet</div>
                                                <div className="text-sm text-gray-400">Add awards, recognitions, or certifications</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {experiences.length === 0 && !isAddingExperience && (
                    <div className="text-center py-12">
                        <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaBriefcase className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No work experience added yet</h3>
                        <p className="text-gray-600 mb-6">Add your first work experience to showcase your career journey</p>
                        <button
                            type="button"
                            onClick={() => setIsAddingExperience(true)}
                            className="px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-lg font-medium hover:from-orange-700 hover:to-yellow-700"
                        >
                            Add Your First Experience
                        </button>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-200">
                <button
                    type="button"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                >
                    Back
                </button>

                <div className="flex space-x-4">
                    <button
                        type="button"
                        className="px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-lg font-medium hover:from-orange-700 hover:to-yellow-700 shadow-md"
                    >
                        Save & Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
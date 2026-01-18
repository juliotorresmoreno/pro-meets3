"use client";

import { useState } from 'react';
import {
    FaPlus,
    FaTimes,
    FaTrash,
    FaGraduationCap,
    FaCalendarAlt,
    FaUniversity,
    FaUserGraduate,
    FaBook,
    FaChevronDown,
    FaChevronUp,
    FaStar,
    FaCheckCircle
} from 'react-icons/fa';

interface Education {
    id: string;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    currentlyStudying: boolean;
    description: string;
    gpa?: string;
    honors?: string;
}

const Education = () => {
    const [educations, setEducations] = useState<Education[]>([
        {
            id: '1',
            institution: 'Stanford University',
            degree: 'Master of Science',
            fieldOfStudy: 'Computer Science',
            startDate: '2020-09',
            endDate: '2022-06',
            currentlyStudying: false,
            description: 'Specialized in Machine Learning and Artificial Intelligence. Published research paper on neural networks.',
            gpa: '3.8',
            honors: 'Summa Cum Laude'
        },
        {
            id: '2',
            institution: 'University of California, Berkeley',
            degree: 'Bachelor of Science',
            fieldOfStudy: 'Software Engineering',
            startDate: '2016-08',
            endDate: '2020-05',
            currentlyStudying: false,
            description: 'Minor in Business Administration. President of Computer Science Club.',
            gpa: '3.6',
            honors: 'Dean\'s List'
        }
    ]);

    const [isAddingEducation, setIsAddingEducation] = useState(false);
    const [expandedEducation, setExpandedEducation] = useState<string | null>('1');

    const [newEducation, setNewEducation] = useState<Partial<Education>>({
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        currentlyStudying: false,
        description: '',
        gpa: '',
        honors: ''
    });

    const degreeOptions = [
        'High School Diploma',
        'Associate Degree',
        'Bachelor of Arts (BA)',
        'Bachelor of Science (BS)',
        'Bachelor of Engineering (BEng)',
        'Master of Arts (MA)',
        'Master of Science (MS)',
        'Master of Engineering (MEng)',
        'Master of Business Administration (MBA)',
        'Doctor of Philosophy (PhD)',
        'Doctor of Medicine (MD)',
        'Juris Doctor (JD)',
        'Other'
    ];

    const fieldOfStudyOptions = [
        'Computer Science',
        'Software Engineering',
        'Information Technology',
        'Data Science',
        'Computer Engineering',
        'Electrical Engineering',
        'Mechanical Engineering',
        'Civil Engineering',
        'Business Administration',
        'Finance',
        'Marketing',
        'Economics',
        'Psychology',
        'Biology',
        'Chemistry',
        'Physics',
        'Mathematics',
        'English',
        'History',
        'Political Science',
        'Other'
    ];

    const handleAddEducation = () => {
        if (!newEducation.institution || !newEducation.degree || !newEducation.startDate) {
            alert('Please fill in all required fields: Institution, Degree, and Start Date');
            return;
        }

        const education: Education = {
            id: Date.now().toString(),
            institution: newEducation.institution!,
            degree: newEducation.degree!,
            fieldOfStudy: newEducation.fieldOfStudy || '',
            startDate: newEducation.startDate!,
            endDate: newEducation.currentlyStudying ? 'Present' : newEducation.endDate!,
            currentlyStudying: newEducation.currentlyStudying || false,
            description: newEducation.description || '',
            gpa: newEducation.gpa || undefined,
            honors: newEducation.honors || undefined
        };

        setEducations([education, ...educations]);
        setNewEducation({
            institution: '',
            degree: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: '',
            currentlyStudying: false,
            description: '',
            gpa: '',
            honors: ''
        });
        setIsAddingEducation(false);
        setExpandedEducation(education.id);
    };

    const handleDeleteEducation = (id: string) => {
        if (confirm('Are you sure you want to delete this education entry?')) {
            setEducations(educations.filter(edu => edu.id !== id));
        }
    };

    const toggleEducation = (id: string) => {
        setExpandedEducation(expandedEducation === id ? null : id);
    };

    const formatDate = (dateString: string) => {
        if (dateString === 'Present') return 'Present';
        const [year, month] = dateString.split('-');
        const date = new Date(parseInt(year), parseInt(month) - 1);
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    const getDegreeIcon = (degree: string) => {
        if (degree.toLowerCase().includes('master') || degree.toLowerCase().includes('mba')) {
            return '🎓';
        } else if (degree.toLowerCase().includes('bachelor') || degree.toLowerCase().includes('ba') || degree.toLowerCase().includes('bs')) {
            return '📚';
        } else if (degree.toLowerCase().includes('phd') || degree.toLowerCase().includes('doctor')) {
            return '👨‍🎓';
        } else if (degree.toLowerCase().includes('high school')) {
            return '🏫';
        }
        return '🎓';
    };

    const calculateDuration = (startDate: string, endDate: string) => {
        if (endDate === 'Present') {
            const start = new Date(startDate);
            const now = new Date();
            const years = now.getFullYear() - start.getFullYear();
            return `${years}+ years (ongoing)`;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);
        const years = end.getFullYear() - start.getFullYear();
        return `${years} year${years > 1 ? 's' : ''}`;
    };

    const getGPAStars = (gpa?: string) => {
        if (!gpa) return null;
        const numericGPA = parseFloat(gpa);
        if (numericGPA >= 3.5) return '⭐⭐⭐⭐⭐';
        if (numericGPA >= 3.0) return '⭐⭐⭐⭐';
        if (numericGPA >= 2.5) return '⭐⭐⭐';
        if (numericGPA >= 2.0) return '⭐⭐';
        return '⭐';
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl">
                        <FaGraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Education</h1>
                        <p className="text-gray-600">
                            Add your educational background to showcase your qualifications
                        </p>
                    </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                        <FaCheckCircle className="h-5 w-5 text-blue-600" />
                        <p className="text-blue-700 font-medium">
                            Adding your educational background increases profile credibility by 65%.
                        </p>
                    </div>
                </div>
            </div>

            {/* Add New Education Form */}
            {isAddingEducation ? (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Add Education</h2>
                        <button
                            type="button"
                            onClick={() => setIsAddingEducation(false)}
                            className="p-2 text-gray-500 hover:text-gray-700"
                        >
                            <FaTimes className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {/* Institution */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaUniversity className="inline mr-2 h-4 w-4 text-gray-500" />
                                Institution *
                            </label>
                            <input
                                type="text"
                                value={newEducation.institution}
                                onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="e.g., Stanford University, Harvard University"
                            />
                        </div>

                        {/* Degree and Field of Study */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaUserGraduate className="inline mr-2 h-4 w-4 text-gray-500" />
                                    Degree *
                                </label>
                                <select
                                    value={newEducation.degree}
                                    onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Select Degree</option>
                                    {degreeOptions.map(degree => (
                                        <option key={degree} value={degree}>{degree}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaBook className="inline mr-2 h-4 w-4 text-gray-500" />
                                    Field of Study
                                </label>
                                <select
                                    value={newEducation.fieldOfStudy}
                                    onChange={(e) => setNewEducation({ ...newEducation, fieldOfStudy: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Select Field of Study</option>
                                    {fieldOfStudyOptions.map(field => (
                                        <option key={field} value={field}>{field}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaCalendarAlt className="inline mr-2 h-4 w-4 text-gray-500" />
                                    Start Date *
                                </label>
                                <input
                                    type="month"
                                    value={newEducation.startDate}
                                    onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaCalendarAlt className="inline mr-2 h-4 w-4 text-gray-500" />
                                    End Date
                                </label>
                                <input
                                    type="month"
                                    value={newEducation.endDate}
                                    onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    disabled={newEducation.currentlyStudying}
                                />
                                <div className="mt-3">
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            checked={newEducation.currentlyStudying}
                                            onChange={(e) => setNewEducation({
                                                ...newEducation,
                                                currentlyStudying: e.target.checked,
                                                endDate: e.target.checked ? '' : newEducation.endDate
                                            })}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-700">Currently studying</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Duration
                                </label>
                                <div className="px-4 py-3 bg-gray-100 rounded-lg text-gray-700">
                                    {newEducation.startDate && !newEducation.currentlyStudying && newEducation.endDate
                                        ? calculateDuration(newEducation.startDate, newEducation.endDate)
                                        : newEducation.currentlyStudying && newEducation.startDate
                                            ? `${calculateDuration(newEducation.startDate, 'Present')} (ongoing)`
                                            : '--'
                                    }
                                </div>
                            </div>
                        </div>

                        {/* GPA and Honors */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    GPA (Optional)
                                </label>
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="text"
                                        value={newEducation.gpa}
                                        onChange={(e) => setNewEducation({ ...newEducation, gpa: e.target.value })}
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="e.g., 3.8"
                                    />
                                    <div className="text-sm text-gray-500">
                                        Scale: 4.0
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Honors & Awards (Optional)
                                </label>
                                <input
                                    type="text"
                                    value={newEducation.honors}
                                    onChange={(e) => setNewEducation({ ...newEducation, honors: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g., Summa Cum Laude, Dean's List"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                value={newEducation.description}
                                onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                placeholder="Describe your coursework, projects, research, extracurricular activities..."
                            />
                            <div className="mt-2 text-sm text-gray-500">
                                Mention relevant coursework, research projects, or leadership roles
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={() => setIsAddingEducation(false)}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleAddEducation}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 shadow-md"
                            >
                                Add Education
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mb-6">
                    <button
                        type="button"
                        onClick={() => setIsAddingEducation(true)}
                        className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-colors group"
                    >
                        <div className="h-12 w-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-3 group-hover:from-blue-200 group-hover:to-indigo-200">
                            <FaPlus className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="text-lg font-medium text-gray-900">Add Education</span>
                        <span className="text-sm text-gray-600 mt-1">Click to add new education entry</span>
                    </button>
                </div>
            )}

            {/* Education List */}
            <div className="space-y-6">
                {educations.map((education) => (
                    <div key={education.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        {/* Education Header */}
                        <div
                            className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => toggleEducation(education.id)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">{getDegreeIcon(education.degree)}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900">{education.degree}</h3>
                                        <p className="text-gray-700">{education.institution}</p>
                                        {education.fieldOfStudy && (
                                            <p className="text-gray-600 mt-1">{education.fieldOfStudy}</p>
                                        )}
                                        <div className="flex items-center space-x-4 mt-2">
                                            <span className="text-sm text-gray-600">
                                                {formatDate(education.startDate)} - {education.endDate === 'Present' ? 'Present' : formatDate(education.endDate)}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                • {calculateDuration(education.startDate, education.endDate)}
                                            </span>
                                            {education.currentlyStudying && (
                                                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                                    Current Student
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button className="p-2 text-gray-500 hover:text-gray-700">
                                        {expandedEducation === education.id ? (
                                            <FaChevronUp className="h-5 w-5" />
                                        ) : (
                                            <FaChevronDown className="h-5 w-5" />
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteEducation(education.id);
                                        }}
                                        className="p-2 text-gray-500 hover:text-red-600"
                                    >
                                        <FaTrash className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex items-center space-x-6 mt-4">
                                {education.gpa && (
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm text-gray-700">GPA:</span>
                                        <span className="font-semibold text-blue-600">{education.gpa}/4.0</span>
                                        <span className="text-yellow-500">{getGPAStars(education.gpa)}</span>
                                    </div>
                                )}
                                {education.honors && (
                                    <div className="flex items-center space-x-2">
                                        <FaStar className="h-4 w-4 text-yellow-500" />
                                        <span className="text-sm text-gray-700">{education.honors}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedEducation === education.id && (
                            <div className="px-6 pb-6 border-t border-gray-200">
                                {/* Description */}
                                {education.description && (
                                    <div className="mt-6">
                                        <h4 className="text-sm font-medium text-gray-700 mb-3">Description</h4>
                                        <div className="prose max-w-none">
                                            <p className="text-gray-700 whitespace-pre-line">{education.description}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Details Grid */}
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-700 mb-3">Education Details</h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-sm text-gray-600">Institution</span>
                                                <span className="text-sm font-medium text-gray-900">{education.institution}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-sm text-gray-600">Degree</span>
                                                <span className="text-sm font-medium text-gray-900">{education.degree}</span>
                                            </div>
                                            {education.fieldOfStudy && (
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600">Field of Study</span>
                                                    <span className="text-sm font-medium text-gray-900">{education.fieldOfStudy}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span className="text-sm text-gray-600">Duration</span>
                                                <span className="text-sm font-medium text-gray-900">{calculateDuration(education.startDate, education.endDate)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {(education.gpa || education.honors) && (
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-3">Achievements</h4>
                                            <div className="space-y-3">
                                                {education.gpa && (
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm text-gray-600">GPA</span>
                                                        <div className="flex items-center space-x-2">
                                                            <span className="text-sm font-medium text-gray-900">{education.gpa}/4.0</span>
                                                            <span className="text-yellow-500">{getGPAStars(education.gpa)}</span>
                                                        </div>
                                                    </div>
                                                )}
                                                {education.honors && (
                                                    <div className="flex justify-between">
                                                        <span className="text-sm text-gray-600">Honors</span>
                                                        <span className="text-sm font-medium text-gray-900">{education.honors}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {educations.length === 0 && !isAddingEducation && (
                    <div className="text-center py-12">
                        <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaGraduationCap className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No education added yet</h3>
                        <p className="text-gray-600 mb-6">Add your educational background to showcase your qualifications</p>
                        <button
                            type="button"
                            onClick={() => setIsAddingEducation(true)}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700"
                        >
                            Add Your First Education
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
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                    >
                        Save as Draft
                    </button>

                    <button
                        type="button"
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 shadow-md"
                    >
                        Save & Continue
                    </button>
                </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Education Progress</span>
                    <span className="text-sm font-semibold text-blue-600">
                        {Math.min(100, educations.length * 33)}%
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                        style={{ width: `${Math.min(100, educations.length * 33)}%` }}
                    ></div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                    {educations.length > 0
                        ? `✓ ${educations.length} education${educations.length > 1 ? ' entries' : ' entry'} added`
                        : 'Add at least one education entry'
                    }
                </div>
            </div>
        </div>
    );
};

export default Education;
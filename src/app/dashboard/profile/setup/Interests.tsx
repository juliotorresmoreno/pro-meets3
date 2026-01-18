"use client";

import { useState } from 'react';
import {
    FaPlus,
    FaTimes,
    FaHeart,
    FaStar,
    FaLightbulb,
    FaUsers,
    FaChartLine,
    FaCode,
    FaChevronDown,
    FaChevronUp
} from 'react-icons/fa';

type Category = 'professional' | 'personal' | 'industry'

interface Interest {
    id: string;
    name: string;
    category: Category;
    description?: string;
}

const Interests = () => {
    const [interests, setInterests] = useState<Interest[]>([
        {
            id: '1',
            name: 'Machine Learning',
            category: 'professional',
            description: 'Exploring neural networks and AI algorithms'
        },
        {
            id: '2',
            name: 'Web Development',
            category: 'professional'
        },
        {
            id: '3',
            name: 'Photography',
            category: 'personal',
            description: 'Landscape and portrait photography'
        }
    ]);

    const [newInterest, setNewInterest] = useState('');
    const [interestCategory, setInterestCategory] = useState<'professional' | 'personal' | 'industry'>('professional');
    const [interestDescription, setInterestDescription] = useState('');
    const [isAddingInterest, setIsAddingInterest] = useState(false);
    const [expandedInterest, setExpandedInterest] = useState<string | null>(null);

    const professionalSuggestions = [
        'AI', 'Machine Learning', 'Data Science', 'Web Development', 'UI/UX Design',
        'Cloud Computing', 'Blockchain', 'DevOps', 'Cybersecurity', 'Mobile Development',
        'Game Development', 'IoT', 'AR/VR', 'Quantum Computing', 'Bioinformatics'
    ];

    const personalSuggestions = [
        'Photography', 'Travel', 'Reading', 'Hiking', 'Cooking',
        'Music', 'Gaming', 'Sports', 'Art', 'Writing',
        'Yoga', 'Meditation', 'Volunteering', 'Dancing', 'Gardening'
    ];

    const industrySuggestions = [
        'Tech Startups', 'Healthcare Tech', 'FinTech', 'EdTech', 'E-commerce',
        'SaaS', 'AI Ethics', 'Sustainable Tech', 'Remote Work', 'Digital Nomad'
    ];

    const handleAddInterest = () => {
        if (newInterest.trim()) {
            const interest: Interest = {
                id: Date.now().toString(),
                name: newInterest.trim(),
                category: interestCategory,
                description: interestDescription.trim() || undefined
            };

            setInterests([interest, ...interests]);
            setNewInterest('');
            setInterestDescription('');
            setIsAddingInterest(false);
            setExpandedInterest(interest.id);
        }
    };

    const handleAddSuggestion = (name: string, category: 'professional' | 'personal' | 'industry') => {
        const exists = interests.some(i =>
            i.name.toLowerCase() === name.toLowerCase() && i.category === category
        );

        if (!exists) {
            const interest: Interest = {
                id: Date.now().toString(),
                name,
                category
            };

            setInterests([interest, ...interests]);
        }
    };

    const handleRemoveInterest = (id: string) => {
        setInterests(interests.filter(interest => interest.id !== id));
    };

    const toggleInterest = (id: string) => {
        setExpandedInterest(expandedInterest === id ? null : id);
    };

    const getInterestIcon = (category: string) => {
        switch (category) {
            case 'professional':
                return <FaCode className="h-4 w-4 text-blue-600" />;
            case 'personal':
                return <FaHeart className="h-4 w-4 text-pink-600" />;
            case 'industry':
                return <FaChartLine className="h-4 w-4 text-purple-600" />;
            default:
                return <FaLightbulb className="h-4 w-4 text-yellow-600" />;
        }
    };

    const getInterestColor = (category: string) => {
        switch (category) {
            case 'professional':
                return 'bg-blue-50 border-blue-100 text-blue-800';
            case 'personal':
                return 'bg-pink-50 border-pink-100 text-pink-800';
            case 'industry':
                return 'bg-purple-50 border-purple-100 text-purple-800';
            default:
                return 'bg-gray-50 border-gray-100 text-gray-800';
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'professional':
                return 'Professional';
            case 'personal':
                return 'Personal';
            case 'industry':
                return 'Industry';
            default:
                return category;
        }
    };

    const filterInterestsByCategory = (category: 'professional' | 'personal' | 'industry') => {
        return interests.filter(interest => interest.category === category);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl">
                        <FaHeart className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Interests</h1>
                        <p className="text-gray-600">
                            Share your professional and personal interests to connect with like-minded professionals
                        </p>
                    </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                        <FaUsers className="h-5 w-5 text-pink-600" />
                        <p className="text-pink-700 font-medium">
                            Adding interests helps employers understand your passions and creates more meaningful connections.
                        </p>
                    </div>
                </div>
            </div>

            {/* Add Interest Section */}
            <div className="mb-8">
                {isAddingInterest ? (
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-semibold text-gray-900">Add New Interest</h2>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsAddingInterest(false);
                                    setNewInterest('');
                                    setInterestDescription('');
                                }}
                                className="p-2 text-gray-500 hover:text-gray-700"
                            >
                                <FaTimes className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Category Selection */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Interest Category
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { id: 'professional', label: 'Professional', icon: FaCode, description: 'Skills and topics related to your career' },
                                        { id: 'personal', label: 'Personal', icon: FaHeart, description: 'Hobbies and activities outside work' },
                                        { id: 'industry', label: 'Industry', icon: FaChartLine, description: 'Industry trends and focus areas' }
                                    ].map((cat) => (
                                        <button
                                            key={cat.id}
                                            type="button"
                                            onClick={() => setInterestCategory(cat.id as Category)}
                                            className={`flex flex-col items-center p-4 border rounded-xl transition-all ${interestCategory === cat.id
                                                    ? 'border-pink-500 bg-pink-50 text-pink-700'
                                                    : 'border-gray-300 hover:border-pink-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            <cat.icon className={`h-6 w-6 mb-2 ${interestCategory === cat.id ? 'text-pink-600' : 'text-gray-500'}`} />
                                            <span className="font-medium mb-1">{cat.label}</span>
                                            <span className="text-xs text-center text-gray-600">{cat.description}</span>
                                            {interestCategory === cat.id && (
                                                <div className="mt-2 h-2 w-2 bg-pink-500 rounded-full"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Interest Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Interest Name *
                                </label>
                                <input
                                    type="text"
                                    value={newInterest}
                                    onChange={(e) => setNewInterest(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleAddInterest()}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    placeholder="e.g., Artificial Intelligence, Photography, Sustainable Tech"
                                    autoFocus
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description (Optional)
                                </label>
                                <textarea
                                    value={interestDescription}
                                    onChange={(e) => setInterestDescription(e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                                    placeholder="Share more about this interest, your experience, or why it matters to you..."
                                />
                                <div className="mt-2 text-sm text-gray-500">
                                    This helps others understand your level of involvement or expertise
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsAddingInterest(false);
                                        setNewInterest('');
                                        setInterestDescription('');
                                    }}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleAddInterest}
                                    disabled={!newInterest.trim()}
                                    className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg font-medium hover:from-pink-700 hover:to-rose-700 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Add Interest
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={() => setIsAddingInterest(true)}
                        className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:border-pink-400 hover:bg-pink-50 transition-colors group"
                    >
                        <div className="h-12 w-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mb-3 group-hover:from-pink-200 group-hover:to-rose-200">
                            <FaPlus className="h-5 w-5 text-pink-600" />
                        </div>
                        <span className="text-lg font-medium text-gray-900">Add Interest</span>
                        <span className="text-sm text-gray-600 mt-1">Share what you're passionate about</span>
                    </button>
                )}
            </div>

            {/* Interests by Category */}
            <div className="space-y-8">
                {/* Professional Interests */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <FaCode className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Professional Interests</h2>
                                <p className="text-sm text-gray-600">
                                    Add topics you're professionally interested in
                                </p>
                            </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${filterInterestsByCategory('professional').length > 0
                                ? 'bg-blue-100 text-blue-600'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                            {filterInterestsByCategory('professional').length} added
                        </div>
                    </div>

                    {/* Suggestions */}
                    <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-3">Suggestions:</p>
                        <div className="flex flex-wrap gap-2">
                            {professionalSuggestions.map(suggestion => (
                                <button
                                    key={suggestion}
                                    type="button"
                                    onClick={() => handleAddSuggestion(suggestion, 'professional')}
                                    className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
                                >
                                    <FaPlus className="h-3 w-3" />
                                    <span className="text-sm">{suggestion}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Professional Interests List */}
                    <div className="space-y-3">
                        {filterInterestsByCategory('professional').map(interest => (
                            <div
                                key={interest.id}
                                className="group p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-blue-50 rounded-lg">
                                            {getInterestIcon(interest.category)}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">{interest.name}</h3>
                                            {interest.description && (
                                                <p className="text-sm text-gray-600 mt-1">{interest.description}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button
                                            type="button"
                                            onClick={() => toggleInterest(interest.id)}
                                            className="p-1 text-gray-500 hover:text-gray-700"
                                        >
                                            {expandedInterest === interest.id ? (
                                                <FaChevronUp className="h-4 w-4" />
                                            ) : (
                                                <FaChevronDown className="h-4 w-4" />
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveInterest(interest.id)}
                                            className="p-1 text-gray-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <FaTimes className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filterInterestsByCategory('professional').length === 0 && (
                            <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-xl">
                                <FaCode className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                                <div className="text-gray-500 mb-1">No professional interests added yet</div>
                                <div className="text-sm text-gray-400">Add topics like Machine Learning, Web Development, or UX Design</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Personal Interests */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-pink-100 rounded-lg">
                                <FaHeart className="h-5 w-5 text-pink-600" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Personal Interests</h2>
                                <p className="text-sm text-gray-600">
                                    Share your hobbies and personal passions
                                </p>
                            </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${filterInterestsByCategory('personal').length > 0
                                ? 'bg-pink-100 text-pink-600'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                            {filterInterestsByCategory('personal').length} added
                        </div>
                    </div>

                    {/* Suggestions */}
                    <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-3">Suggestions:</p>
                        <div className="flex flex-wrap gap-2">
                            {personalSuggestions.map(suggestion => (
                                <button
                                    key={suggestion}
                                    type="button"
                                    onClick={() => handleAddSuggestion(suggestion, 'personal')}
                                    className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-pink-500 hover:text-pink-600 transition-colors"
                                >
                                    <FaPlus className="h-3 w-3" />
                                    <span className="text-sm">{suggestion}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Personal Interests List */}
                    <div className="space-y-3">
                        {filterInterestsByCategory('personal').map(interest => (
                            <div
                                key={interest.id}
                                className="group p-4 border border-gray-200 rounded-xl hover:border-pink-300 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-pink-50 rounded-lg">
                                            {getInterestIcon(interest.category)}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">{interest.name}</h3>
                                            {interest.description && (
                                                <p className="text-sm text-gray-600 mt-1">{interest.description}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button
                                            type="button"
                                            onClick={() => toggleInterest(interest.id)}
                                            className="p-1 text-gray-500 hover:text-gray-700"
                                        >
                                            {expandedInterest === interest.id ? (
                                                <FaChevronUp className="h-4 w-4" />
                                            ) : (
                                                <FaChevronDown className="h-4 w-4" />
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveInterest(interest.id)}
                                            className="p-1 text-gray-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <FaTimes className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filterInterestsByCategory('personal').length === 0 && (
                            <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-xl">
                                <FaHeart className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                                <div className="text-gray-500 mb-1">No personal interests added yet</div>
                                <div className="text-sm text-gray-400">Add hobbies like Photography, Travel, or Cooking</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Industry Interests */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <FaChartLine className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Industry Interests</h2>
                                <p className="text-sm text-gray-600">
                                    Focus areas and trends you follow in your industry
                                </p>
                            </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${filterInterestsByCategory('industry').length > 0
                                ? 'bg-purple-100 text-purple-600'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                            {filterInterestsByCategory('industry').length} added
                        </div>
                    </div>

                    {/* Suggestions */}
                    <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-3">Suggestions:</p>
                        <div className="flex flex-wrap gap-2">
                            {industrySuggestions.map(suggestion => (
                                <button
                                    key={suggestion}
                                    type="button"
                                    onClick={() => handleAddSuggestion(suggestion, 'industry')}
                                    className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-600 transition-colors"
                                >
                                    <FaPlus className="h-3 w-3" />
                                    <span className="text-sm">{suggestion}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Industry Interests List */}
                    <div className="space-y-3">
                        {filterInterestsByCategory('industry').map(interest => (
                            <div
                                key={interest.id}
                                className="group p-4 border border-gray-200 rounded-xl hover:border-purple-300 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-purple-50 rounded-lg">
                                            {getInterestIcon(interest.category)}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">{interest.name}</h3>
                                            {interest.description && (
                                                <p className="text-sm text-gray-600 mt-1">{interest.description}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button
                                            type="button"
                                            onClick={() => toggleInterest(interest.id)}
                                            className="p-1 text-gray-500 hover:text-gray-700"
                                        >
                                            {expandedInterest === interest.id ? (
                                                <FaChevronUp className="h-4 w-4" />
                                            ) : (
                                                <FaChevronDown className="h-4 w-4" />
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveInterest(interest.id)}
                                            className="p-1 text-gray-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <FaTimes className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filterInterestsByCategory('industry').length === 0 && (
                            <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-xl">
                                <FaChartLine className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                                <div className="text-gray-500 mb-1">No industry interests added yet</div>
                                <div className="text-sm text-gray-400">Add interests like Tech Startups, Healthcare Tech, or FinTech</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* All Interests Summary */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200 p-6 mt-8">
                <div className="flex items-center space-x-3 mb-4">
                    <FaStar className="h-5 w-5 text-pink-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Your Interests Summary</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{filterInterestsByCategory('professional').length}</div>
                        <div className="text-sm font-medium text-gray-700">Professional</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                        <div className="text-2xl font-bold text-pink-600 mb-1">{filterInterestsByCategory('personal').length}</div>
                        <div className="text-sm font-medium text-gray-700">Personal</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                        <div className="text-2xl font-bold text-purple-600 mb-1">{filterInterestsByCategory('industry').length}</div>
                        <div className="text-sm font-medium text-gray-700">Industry</div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {interests.slice(0, 10).map(interest => (
                        <span
                            key={interest.id}
                            className={`px-3 py-1 rounded-full text-sm border ${getInterestColor(interest.category)}`}
                        >
                            {interest.name}
                        </span>
                    ))}
                    {interests.length > 10 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full border border-gray-200">
                            +{interests.length - 10} more
                        </span>
                    )}
                </div>
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
                        className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg font-medium hover:from-pink-700 hover:to-rose-700 shadow-md"
                    >
                        Save & Continue
                    </button>
                </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Interests Progress</span>
                    <span className="text-sm font-semibold text-pink-600">
                        {Math.min(100, Math.floor((interests.length / 6) * 100))}%
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full"
                        style={{ width: `${Math.min(100, Math.floor((interests.length / 6) * 100))}%` }}
                    ></div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                    {interests.length >= 3
                        ? '✓ Good variety of interests added'
                        : `Add ${3 - interests.length} more interests for better matching`
                    }
                </div>
            </div>
        </div>
    );
};

export default Interests;
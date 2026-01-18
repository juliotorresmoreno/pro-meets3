"use client";

import { useState } from 'react';
import { FaCamera, FaMapMarkerAlt, FaFlag, FaBuilding, FaCity, FaUserEdit, FaInfoCircle } from 'react-icons/fa';

interface BasicInfoFormData {
    fullName: string;
    professionalTitle: string;
    phone: string;
    country: string;
    state: string;
    city: string;
    bio: string;
    careerGoals: string;
}

const BasicInfo = () => {
    const [formData, setFormData] = useState<BasicInfoFormData>({
        fullName: '',
        professionalTitle: '',
        phone: '',
        country: 'Colombia',
        state: '',
        city: '',
        bio: '',
        careerGoals: ''
    });

    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [errors, setErrors] = useState<Partial<BasicInfoFormData>>({});

    const handleInputChange = (field: keyof BasicInfoFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        const newErrors: Partial<BasicInfoFormData> = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.professionalTitle.trim()) newErrors.professionalTitle = 'Professional title is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.country.trim()) newErrors.country = 'Country is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData);
            alert('Basic information saved successfully!');
        }
    };

    const countries = ['Colombia', 'United States', 'Mexico', 'Spain', 'United Kingdom', 'Germany', 'France'];
    const colombianStates = [
        'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá',
        'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare',
        'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 'Putumayo',
        'Quindío', 'Risaralda', 'San Andrés y Providencia', 'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">Basic Information</h1>
                <p className="text-gray-600">
                    Let's start with some basic information to create your professional profile
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Profile Picture Section */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-1">Profile Picture</h2>
                            <p className="text-sm text-gray-600">
                                A professional photo helps recruiters recognize you
                            </p>
                        </div>
                        <div className="text-sm text-gray-500">
                            Recommended: 400x400px
                        </div>
                    </div>

                    <div className="flex items-center space-x-8">
                        <div className="relative">
                            <div className="h-40 w-40 rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                {profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center">
                                        <div className="h-20 w-20 bg-linear-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                                            <FaUserEdit className="h-10 w-10 text-white" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="absolute -bottom-2 -right-2">
                                <label htmlFor="profile-upload" className="cursor-pointer">
                                    <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors">
                                        <FaCamera className="h-5 w-5 text-white" />
                                    </div>
                                    <input
                                        id="profile-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3 className="font-medium text-gray-900 mb-2">Upload new photo</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Choose a professional headshot where your face is clearly visible.
                                This helps recruiters connect with your profile.
                            </p>
                            <div className="flex items-center space-x-4">
                                <label htmlFor="profile-upload" className="cursor-pointer">
                                    <div className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                                        Upload Photo
                                    </div>
                                </label>
                                {profileImage && (
                                    <button
                                        type="button"
                                        onClick={() => setProfileImage(null)}
                                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Information */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="John Doe"
                            />
                            {errors.fullName && (
                                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                            )}
                        </div>

                        {/* Professional Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Professional Title *
                            </label>
                            <input
                                type="text"
                                value={formData.professionalTitle}
                                onChange={(e) => handleInputChange('professionalTitle', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${errors.professionalTitle ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Senior Software Engineer"
                            />
                            {errors.professionalTitle && (
                                <p className="mt-1 text-sm text-red-600">{errors.professionalTitle}</p>
                            )}
                        </div>
                    </div>

                    {/* WhatsApp Phone */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            WhatsApp Phone Number *
                        </label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="+57 300 123 4567"
                        />
                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                        )}

                        <div className="mt-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <div className="flex items-start space-x-3">
                                <div className="text-yellow-600">
                                    <FaInfoCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-yellow-800 mb-1">Very Important</h4>
                                    <p className="text-sm text-yellow-700">
                                        Companies will contact you via this WhatsApp number to send job offers and interview invitations.
                                        Please ensure this number is correct and active.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location Section */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Location *</h2>
                            <p className="text-sm text-gray-600">
                                Help recruiters find you by providing your location details
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Country */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaFlag className="inline mr-2 h-4 w-4 text-gray-500" />
                                Country *
                            </label>
                            <select
                                value={formData.country}
                                onChange={(e) => handleInputChange('country', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${errors.country ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            >
                                {countries.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                            {errors.country && (
                                <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                            )}
                        </div>

                        {/* State/Province */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaBuilding className="inline mr-2 h-4 w-4 text-gray-500" />
                                State/Province
                            </label>
                            <select
                                value={formData.state}
                                onChange={(e) => handleInputChange('state', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                            >
                                <option value="">Select State</option>
                                {colombianStates.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaCity className="inline mr-2 h-4 w-4 text-gray-500" />
                                City *
                            </label>
                            <input
                                type="text"
                                value={formData.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${errors.city ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Bogotá"
                            />
                            {errors.city && (
                                <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Professional Bio */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Professional Bio</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        A great bio is concise and highlights your expertise. Aim for 2-4 sentences.
                    </p>

                    <textarea
                        value={formData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                        placeholder="Senior Software Engineer with 8+ years of experience specializing in React, Node.js, and cloud architecture. Passionate about building scalable applications and mentoring junior developers. Previously led development at TechCorp and StartupXYZ. Always eager to take on new challenges and contribute to innovative projects."
                    />

                    <div className="mt-3 flex justify-between items-center text-sm text-gray-500">
                        <div>
                            Characters: {formData.bio.length} / 500
                        </div>
                        <div>
                            Recommended: 150-300 characters
                        </div>
                    </div>
                </div>

                {/* Career Goals */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Career Goals</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Share your long-term career goals to help recruiters understand your vision.
                    </p>

                    <textarea
                        value={formData.careerGoals}
                        onChange={(e) => handleInputChange('careerGoals', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                        placeholder="Looking to join a forward-thinking company where I can lead engineering teams and contribute to product strategy. Interested in opportunities that combine technical leadership with business impact. Long-term goal is to become a CTO or VP of Engineering at a scaling startup."
                    />

                    <div className="mt-3 text-sm text-gray-500">
                        Optional but recommended
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            Save & Continue
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BasicInfo;
"use client";

import { useState } from 'react';
import {
    FaPlus,
    FaTimes,
    FaTrash,
    FaExternalLinkAlt,
    FaImage,
    FaCode,
    FaGithub,
    FaGlobe,
    FaChevronDown,
    FaChevronUp,
    FaStar,
    FaCalendarAlt,
    FaTag
} from 'react-icons/fa';

interface Project {
    id: string;
    name: string;
    description: string;
    url: string;
    imageUrl: string;
    technologies: string[];
    role: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
    featured: boolean;
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([
        {
            id: '1',
            name: 'E-Commerce Platform',
            description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented user authentication, payment processing, and admin dashboard.',
            url: 'https://github.com/user/ecommerce-platform',
            imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
            role: 'Full Stack Developer',
            startDate: '2023-01',
            endDate: '2023-06',
            currentlyWorking: false,
            featured: true
        },
        {
            id: '2',
            name: 'AI Chat Assistant',
            description: 'Developed an AI-powered chat assistant using OpenAI API and React. Features include conversation history, file uploads, and multiple AI models.',
            url: 'https://github.com/user/ai-chat-assistant',
            imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w-800&auto=format&fit=crop',
            technologies: ['React', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
            role: 'Frontend Developer',
            startDate: '2023-07',
            endDate: 'Present',
            currentlyWorking: true,
            featured: true
        }
    ]);

    const [isAddingProject, setIsAddingProject] = useState(false);
    const [expandedProject, setExpandedProject] = useState<string | null>('1');

    const [newProject, setNewProject] = useState<Partial<Project>>({
        name: '',
        description: '',
        url: '',
        imageUrl: '',
        technologies: [],
        role: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        featured: false
    });

    const [newTech, setNewTech] = useState('');

    const popularTechnologies = [
        'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript',
        'Next.js', 'Vue.js', 'Angular', 'Express', 'Django',
        'Flask', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis',
        'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP',
        'GraphQL', 'REST API', 'Tailwind CSS', 'Bootstrap', 'Material-UI'
    ];

    const handleAddProject = () => {
        if (!newProject.name || !newProject.description) {
            alert('Please fill in all required fields: Project Name and Description');
            return;
        }

        const project: Project = {
            id: Date.now().toString(),
            name: newProject.name!,
            description: newProject.description!,
            url: newProject.url || '',
            imageUrl: newProject.imageUrl || '',
            technologies: newProject.technologies || [],
            role: newProject.role || '',
            startDate: newProject.startDate || '',
            endDate: newProject.currentlyWorking ? 'Present' : newProject.endDate || '',
            currentlyWorking: newProject.currentlyWorking || false,
            featured: newProject.featured || false
        };

        setProjects([project, ...projects]);
        setNewProject({
            name: '',
            description: '',
            url: '',
            imageUrl: '',
            technologies: [],
            role: '',
            startDate: '',
            endDate: '',
            currentlyWorking: false,
            featured: false
        });
        setIsAddingProject(false);
        setExpandedProject(project.id);
    };

    const handleDeleteProject = (id: string) => {
        if (confirm('Are you sure you want to delete this project?')) {
            setProjects(projects.filter(project => project.id !== id));
        }
    };

    const toggleProject = (id: string) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    const handleAddTechnology = () => {
        if (newTech.trim() && !newProject.technologies?.includes(newTech.trim())) {
            setNewProject({
                ...newProject,
                technologies: [...(newProject.technologies || []), newTech.trim()]
            });
            setNewTech('');
        }
    };

    const handleRemoveTechnology = (tech: string) => {
        setNewProject({
            ...newProject,
            technologies: newProject.technologies?.filter(t => t !== tech) || []
        });
    };

    const handleAddPopularTech = (tech: string) => {
        if (!newProject.technologies?.includes(tech)) {
            setNewProject({
                ...newProject,
                technologies: [...(newProject.technologies || []), tech]
            });
        }
    };

    const formatDate = (dateString: string) => {
        if (dateString === 'Present') return 'Present';
        const [year, month] = dateString.split('-');
        const date = new Date(parseInt(year), parseInt(month) - 1);
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    const getDomainFromUrl = (url: string) => {
        try {
            const urlObj = new URL(url);
            return urlObj.hostname.replace('www.', '');
        } catch {
            return url;
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl">
                        <FaCode className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
                        <p className="text-gray-600">
                            Showcase your work or personal projects
                        </p>
                    </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                        <FaStar className="h-5 w-5 text-green-600" />
                        <p className="text-green-700 font-medium">
                            Projects demonstrate your practical skills and can increase interview chances by 80%.
                        </p>
                    </div>
                </div>
            </div>

            {/* Add New Project Form */}
            {isAddingProject ? (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Add New Project</h2>
                        <button
                            type="button"
                            onClick={() => setIsAddingProject(false)}
                            className="p-2 text-gray-500 hover:text-gray-700"
                        >
                            <FaTimes className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {/* Project Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaCode className="inline mr-2 h-4 w-4 text-gray-500" />
                                Project Name *
                            </label>
                            <input
                                type="text"
                                value={newProject.name}
                                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="e.g., E-Commerce Platform, AI Chat Assistant"
                            />
                        </div>

                        {/* Project URL and Image URL */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaGlobe className="inline mr-2 h-4 w-4 text-gray-500" />
                                    Project URL
                                </label>
                                <input
                                    type="url"
                                    value={newProject.url}
                                    onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="https://github.com/username/project"
                                />
                                <div className="mt-2 text-xs text-gray-500">
                                    Link to live demo or repository
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaImage className="inline mr-2 h-4 w-4 text-gray-500" />
                                    Project Image URL
                                </label>
                                <input
                                    type="url"
                                    value={newProject.imageUrl}
                                    onChange={(e) => setNewProject({ ...newProject, imageUrl: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="https://images.unsplash.com/..."
                                />
                                <div className="mt-2 text-xs text-gray-500">
                                    Link to an image that showcases your project
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description *
                            </label>
                            <textarea
                                value={newProject.description}
                                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                                placeholder="Describe your project, its features, and what problems it solves..."
                            />
                            <div className="mt-2 text-sm text-gray-500">
                                Focus on the impact and technical challenges you overcame
                            </div>
                        </div>

                        {/* Technologies */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaTag className="inline mr-2 h-4 w-4 text-gray-500" />
                                Technologies Used
                            </label>

                            {/* Selected Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {newProject.technologies?.map(tech => (
                                    <div
                                        key={tech}
                                        className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                                    >
                                        <span>{tech}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveTechnology(tech)}
                                            className="h-4 w-4 rounded-full bg-green-200 flex items-center justify-center hover:bg-green-300"
                                        >
                                            <FaTimes className="h-2 w-2" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Add Technology */}
                            <div className="flex items-center space-x-3 mb-4">
                                <input
                                    type="text"
                                    value={newTech}
                                    onChange={(e) => setNewTech(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleAddTechnology()}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Add a technology"
                                />
                                <button
                                    type="button"
                                    onClick={handleAddTechnology}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                >
                                    Add
                                </button>
                            </div>

                            {/* Popular Technologies */}
                            <div>
                                <p className="text-sm text-gray-600 mb-3">Popular technologies:</p>
                                <div className="flex flex-wrap gap-2">
                                    {popularTechnologies.slice(0, 10).map(tech => (
                                        <button
                                            key={tech}
                                            type="button"
                                            onClick={() => handleAddPopularTech(tech)}
                                            className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:border-green-500 hover:text-green-600 transition-colors"
                                        >
                                            + {tech}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Role and Dates */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Role
                                </label>
                                <input
                                    type="text"
                                    value={newProject.role}
                                    onChange={(e) => setNewProject({ ...newProject, role: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="e.g., Full Stack Developer, Lead Developer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaCalendarAlt className="inline mr-2 h-4 w-4 text-gray-500" />
                                    Start Date
                                </label>
                                <input
                                    type="month"
                                    value={newProject.startDate}
                                    onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaCalendarAlt className="inline mr-2 h-4 w-4 text-gray-500" />
                                    End Date
                                </label>
                                <input
                                    type="month"
                                    value={newProject.endDate}
                                    onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    disabled={newProject.currentlyWorking}
                                />
                                <div className="mt-3">
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            checked={newProject.currentlyWorking}
                                            onChange={(e) => setNewProject({
                                                ...newProject,
                                                currentlyWorking: e.target.checked,
                                                endDate: e.target.checked ? '' : newProject.endDate
                                            })}
                                            className="h-4 w-4 text-green-600 focus:ring-green-500"
                                        />
                                        <span className="text-sm text-gray-700">Currently working on this project</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Featured Project */}
                        <div>
                            <label className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    checked={newProject.featured}
                                    onChange={(e) => setNewProject({ ...newProject, featured: e.target.checked })}
                                    className="h-4 w-4 text-green-600 focus:ring-green-500"
                                />
                                <div>
                                    <span className="text-sm font-medium text-gray-700">Feature this project</span>
                                    <p className="text-sm text-gray-500">
                                        Featured projects appear first and are highlighted on your profile
                                    </p>
                                </div>
                            </label>
                        </div>

                        <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={() => setIsAddingProject(false)}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleAddProject}
                                className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-teal-700 shadow-md"
                            >
                                Add Project
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mb-6">
                    <button
                        type="button"
                        onClick={() => setIsAddingProject(true)}
                        className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:border-green-400 hover:bg-green-50 transition-colors group"
                    >
                        <div className="h-12 w-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-full flex items-center justify-center mb-3 group-hover:from-green-200 group-hover:to-teal-200">
                            <FaPlus className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium text-gray-900">Add Project</span>
                        <span className="text-sm text-gray-600 mt-1">Showcase your work or personal projects</span>
                    </button>
                </div>
            )}

            {/* Projects List */}
            <div className="space-y-6">
                {projects
                    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
                    .map((project) => (
                        <div key={project.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            {/* Project Header */}
                            <div className="p-6">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-3">
                                            {project.featured && (
                                                <span className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 text-xs font-medium rounded-full">
                                                    ⭐ Featured
                                                </span>
                                            )}
                                            {project.currentlyWorking && (
                                                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                                    🚀 Active
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            {/* Project Image */}
                                            {project.imageUrl ? (
                                                <div className="h-24 w-24 rounded-lg overflow-hidden flex-shrink-0">
                                                    <img
                                                        src={project.imageUrl}
                                                        alt={project.name}
                                                        className="h-full w-full object-cover"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.src = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format&fit=crop';
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="h-24 w-24 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <FaCode className="h-8 w-8 text-green-600" />
                                                </div>
                                            )}

                                            <div className="flex-1">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                                                        {project.role && (
                                                            <p className="text-gray-700 mt-1">{project.role}</p>
                                                        )}
                                                        <div className="flex items-center space-x-4 mt-2">
                                                            <span className="text-sm text-gray-600">
                                                                {formatDate(project.startDate)} - {project.endDate === 'Present' ? 'Present' : formatDate(project.endDate)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleProject(project.id)}
                                                            className="p-2 text-gray-500 hover:text-gray-700"
                                                        >
                                                            {expandedProject === project.id ? (
                                                                <FaChevronUp className="h-5 w-5" />
                                                            ) : (
                                                                <FaChevronDown className="h-5 w-5" />
                                                            )}
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleDeleteProject(project.id)}
                                                            className="p-2 text-gray-500 hover:text-red-600"
                                                        >
                                                            <FaTrash className="h-5 w-5" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Technologies */}
                                                {project.technologies.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        {project.technologies.slice(0, 5).map(tech => (
                                                            <span
                                                                key={tech}
                                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {project.technologies.length > 5 && (
                                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                                +{project.technologies.length - 5} more
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project URL */}
                                {project.url && (
                                    <div className="mt-4">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700"
                                        >
                                            {project.url.includes('github.com') ? (
                                                <FaGithub className="h-4 w-4" />
                                            ) : (
                                                <FaExternalLinkAlt className="h-4 w-4" />
                                            )}
                                            <span className="text-sm">
                                                {project.url.includes('github.com') ? 'View on GitHub' : getDomainFromUrl(project.url)}
                                            </span>
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Expanded Content */}
                            {expandedProject === project.id && (
                                <div className="px-6 pb-6 border-t border-gray-200">
                                    {/* Description */}
                                    <div className="mt-6">
                                        <h4 className="text-sm font-medium text-gray-700 mb-3">Description</h4>
                                        <div className="prose max-w-none">
                                            <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
                                        </div>
                                    </div>

                                    {/* All Technologies */}
                                    {project.technologies.length > 0 && (
                                        <div className="mt-6">
                                            <h4 className="text-sm font-medium text-gray-700 mb-3">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map(tech => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-gradient-to-r from-green-50 to-teal-50 text-green-800 text-sm rounded-lg border border-green-100"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Project Details */}
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-3">Project Details</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600">Status</span>
                                                    <span className="text-sm font-medium text-gray-900">
                                                        {project.currentlyWorking ? 'Active' : 'Completed'}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600">Duration</span>
                                                    <span className="text-sm font-medium text-gray-900">
                                                        {project.startDate && project.endDate ?
                                                            `${formatDate(project.startDate)} - ${project.endDate === 'Present' ? 'Present' : formatDate(project.endDate)}`
                                                            : '--'
                                                        }
                                                    </span>
                                                </div>
                                                {project.role && (
                                                    <div className="flex justify-between">
                                                        <span className="text-sm text-gray-600">Your Role</span>
                                                        <span className="text-sm font-medium text-gray-900">{project.role}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {project.url && (
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-700 mb-3">Links</h4>
                                                <div className="space-y-3">
                                                    <a
                                                        href={project.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors group"
                                                    >
                                                        {project.url.includes('github.com') ? (
                                                            <div className="h-8 w-8 bg-gray-900 rounded-lg flex items-center justify-center">
                                                                <FaGithub className="h-4 w-4 text-white" />
                                                            </div>
                                                        ) : (
                                                            <div className="h-8 w-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center">
                                                                <FaExternalLinkAlt className="h-4 w-4 text-white" />
                                                            </div>
                                                        )}
                                                        <div className="flex-1">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {project.url.includes('github.com') ? 'GitHub Repository' : 'Live Project'}
                                                            </div>
                                                            <div className="text-xs text-gray-500 truncate">{project.url}</div>
                                                        </div>
                                                        <FaExternalLinkAlt className="h-4 w-4 text-gray-400 group-hover:text-green-600" />
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                {projects.length === 0 && !isAddingProject && (
                    <div className="text-center py-12">
                        <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaCode className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No projects added yet</h3>
                        <p className="text-gray-600 mb-6">Showcase your work or personal projects to demonstrate your skills</p>
                        <button
                            type="button"
                            onClick={() => setIsAddingProject(true)}
                            className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-teal-700"
                        >
                            Add Your First Project
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
                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-teal-700 shadow-md"
                    >
                        Save & Continue
                    </button>
                </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Projects Progress</span>
                    <span className="text-sm font-semibold text-green-600">
                        {Math.min(100, projects.length * 50)}%
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                        style={{ width: `${Math.min(100, projects.length * 50)}%` }}
                    ></div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                    {projects.length > 0
                        ? `✓ ${projects.length} project${projects.length > 1 ? 's' : ''} added`
                        : 'Add at least one project'
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;
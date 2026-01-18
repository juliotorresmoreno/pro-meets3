"use client";

import { useState } from 'react';
import { 
  FaPlus, 
  FaTimes, 
  FaCheck, 
  FaRobot, 
  FaBriefcase, 
  FaCode, 
  FaChartLine,
  FaToolbox,
  FaLightbulb,
  FaMagic
} from 'react-icons/fa';

interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'ai';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

interface SkillsPreferencesData {
  technicalSkills: Skill[];
  aiSkills: Skill[];
  employmentTypes: string[];
  workLocation: string;
  salaryExpectation: string;
  noticePeriod: string;
}

const SkillsPreferences = () => {
  const [formData, setFormData] = useState<SkillsPreferencesData>({
    technicalSkills: [],
    aiSkills: [],
    employmentTypes: [],
    workLocation: 'hybrid',
    salaryExpectation: '',
    noticePeriod: '2 weeks'
  });
  
  const [newSkill, setNewSkill] = useState('');
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [skillCategory, setSkillCategory] = useState<'technical' | 'ai'>('technical');

  const popularTechnicalSkills = [
    'JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 
    'UI/UX Design', 'Product Management', 'Data Science', 'Java',
    'AWS', 'Docker', 'Kubernetes', 'SQL', 'MongoDB', 'GraphQL',
    'Vue.js', 'Angular', 'Next.js', 'Spring Boot', '.NET'
  ];

  const popularAISkills = [
    'Cursor', 'Lovable', 'Claude Code', 'GitHub Copilot', 'ChatGPT',
    'Claude', 'Perplexity', 'OpenAI API', 'Anthropic API', 'Google Gemini',
    'Mistral', 'Groq', 'Midjourney', 'DALL-E', 'Adobe Firefly',
    'Leonardo AI', 'LangChain', 'LlamaIndex', 'Pinecone', 'ChromaDB',
    'Hugging Face', 'TensorFlow', 'PyTorch', 'Keras', 'Stable Diffusion'
  ];

  const employmentOptions = [
    { id: 'full_time', label: 'Full time', icon: FaBriefcase },
    { id: 'part_time', label: 'Part time', icon: FaBriefcase },
    { id: 'contract', label: 'Contract', icon: FaChartLine },
    { id: 'internship', label: 'Internship', icon: FaLightbulb },
    { id: 'freelance', label: 'Freelance', icon: FaToolbox },
  ];

  const workLocationOptions = [
    { id: 'remote', label: 'Remote Only' },
    { id: 'hybrid', label: 'Hybrid' },
    { id: 'onsite', label: 'On-site' },
    { id: 'flexible', label: 'Flexible' },
  ];

  const noticePeriodOptions = [
    { id: 'immediately', label: 'Immediately' },
    { id: '1_week', label: '1 week' },
    { id: '2_weeks', label: '2 weeks' },
    { id: '1_month', label: '1 month' },
    { id: '2_months', label: '2 months' },
    { id: '3_months', label: '3 months' },
  ];

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      const skill: Skill = {
        id: Date.now().toString(),
        name: newSkill.trim(),
        category: skillCategory
      };
      
      if (skillCategory === 'technical') {
        setFormData(prev => ({
          ...prev,
          technicalSkills: [...prev.technicalSkills, skill]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          aiSkills: [...prev.aiSkills, skill]
        }));
      }
      
      setNewSkill('');
      setIsAddingSkill(false);
    }
  };

  const handleRemoveSkill = (skillId: string, category: 'technical' | 'ai') => {
    if (category === 'technical') {
      setFormData(prev => ({
        ...prev,
        technicalSkills: prev.technicalSkills.filter(s => s.id !== skillId)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        aiSkills: prev.aiSkills.filter(s => s.id !== skillId)
      }));
    }
  };

  const handleAddPopularSkill = (skillName: string, category: 'technical' | 'ai') => {
    const exists = category === 'technical' 
      ? formData.technicalSkills.some(s => s.name.toLowerCase() === skillName.toLowerCase())
      : formData.aiSkills.some(s => s.name.toLowerCase() === skillName.toLowerCase());

    if (!exists) {
      const skill: Skill = {
        id: Date.now().toString(),
        name: skillName,
        category
      };
      
      if (category === 'technical') {
        setFormData(prev => ({
          ...prev,
          technicalSkills: [...prev.technicalSkills, skill]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          aiSkills: [...prev.aiSkills, skill]
        }));
      }
    }
  };

  const handleEmploymentTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      employmentTypes: prev.employmentTypes.includes(type)
        ? prev.employmentTypes.filter(t => t !== type)
        : [...prev.employmentTypes, type]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    if (formData.technicalSkills.length < 3) {
      alert('Please add at least 3 technical skills');
      return;
    }
    
    alert('Skills & Preferences saved successfully!');
  };

  const getSkillCountColor = (count: number) => {
    if (count >= 5) return 'text-green-600 bg-green-100';
    if (count >= 3) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
            <FaCode className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Skills & Preferences</h1>
            <p className="text-gray-600">
              Add your technical skills and employment preferences to help employers find you
            </p>
          </div>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
          <div className="flex items-center space-x-3">
            <FaChartLine className="h-5 w-5 text-blue-600" />
            <p className="text-blue-700 font-medium">
              Adding relevant skills increases your visibility to potential employers by up to 70%.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Technical Skills */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Technical Skills *</h2>
              <p className="text-sm text-gray-600">
                Add at least 3 skills to help employers find you
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getSkillCountColor(formData.technicalSkills.length)}`}>
                {formData.technicalSkills.length} skills added
              </div>
              {formData.technicalSkills.length < 3 && (
                <div className="text-sm text-red-600">
                  Need {3 - formData.technicalSkills.length} more
                </div>
              )}
            </div>
          </div>

          {/* Selected Skills */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-3">
              {formData.technicalSkills.map(skill => (
                <div
                  key={skill.id}
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full"
                >
                  <span className="font-medium">{skill.name}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill.id, 'technical')}
                    className="h-5 w-5 rounded-full bg-purple-200 flex items-center justify-center hover:bg-purple-300"
                  >
                    <FaTimes className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
            
            {formData.technicalSkills.length === 0 && (
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-xl">
                <div className="text-gray-500 mb-2">No technical skills added yet</div>
                <div className="text-sm text-gray-400">Add skills using the options below</div>
              </div>
            )}
          </div>

          {/* Popular Skills */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Popular skills:</h3>
            <div className="flex flex-wrap gap-3">
              {popularTechnicalSkills.slice(0, 8).map(skill => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleAddPopularSkill(skill, 'technical')}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:border-purple-500 hover:text-purple-600 transition-colors"
                >
                  <FaPlus className="h-3 w-3" />
                  <span>{skill}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Add Custom Skill */}
          <div>
            {isAddingSkill && skillCategory === 'technical' ? (
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Type a skill and press Enter"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  <FaCheck className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingSkill(false);
                    setNewSkill('');
                  }}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  <FaTimes className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setSkillCategory('technical');
                  setIsAddingSkill(true);
                }}
                className="flex items-center space-x-2 px-4 py-2 text-purple-600 hover:text-purple-700"
              >
                <FaPlus className="h-4 w-4" />
                <span>Add custom skill</span>
              </button>
            )}
          </div>
        </div>

        {/* AI Skills & Tools */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg">
              <FaRobot className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">AI Skills & Tools (Optional)</h2>
              <p className="text-sm text-gray-600">
                Add AI tools and platforms you're familiar with (Cursor, ChatGPT, etc.)
              </p>
            </div>
          </div>

          {/* Selected AI Skills */}
          <div className="mb-6">
            {formData.aiSkills.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {formData.aiSkills.map(skill => (
                  <div
                    key={skill.id}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill.id, 'ai')}
                      className="h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center hover:bg-blue-300"
                    >
                      <FaTimes className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
                <FaMagic className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                <div className="text-gray-500 mb-1">No AI skills added yet</div>
                <div className="text-sm text-gray-400">
                  Add tools like Cursor, ChatGPT, or Midjourney
                </div>
              </div>
            )}
          </div>

          {/* Popular AI Tools */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Popular AI Tools</h3>
            <div className="flex flex-wrap gap-3">
              {popularAISkills.slice(0, 8).map(skill => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleAddPopularSkill(skill, 'ai')}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaPlus className="h-3 w-3" />
                  <span>{skill}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Add Custom AI Skill */}
          <div>
            {isAddingSkill && skillCategory === 'ai' ? (
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Type an AI tool and press Enter"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <FaCheck className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingSkill(false);
                    setNewSkill('');
                  }}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  <FaTimes className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setSkillCategory('ai');
                  setIsAddingSkill(true);
                }}
                className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700"
              >
                <FaPlus className="h-4 w-4" />
                <span>Add custom AI tool</span>
              </button>
            )}
          </div>
        </div>

        {/* Employment Preferences */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Employment Types *</h2>
          <p className="text-sm text-gray-600 mb-6">
            Select all types of employment you're interested in
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {employmentOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = formData.employmentTypes.includes(option.id);
              
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleEmploymentTypeToggle(option.id)}
                  className={`flex flex-col items-center justify-center p-4 border rounded-xl transition-all ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-300 hover:border-purple-300 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-6 w-6 mb-2 ${isSelected ? 'text-purple-600' : 'text-gray-500'}`} />
                  <span className="font-medium">{option.label}</span>
                  {isSelected && (
                    <div className="mt-2 h-2 w-2 bg-purple-500 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Additional Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Work Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Work Location Preference
              </label>
              <div className="space-y-2">
                {workLocationOptions.map(option => (
                  <label key={option.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="workLocation"
                      checked={formData.workLocation === option.id}
                      onChange={() => setFormData(prev => ({ ...prev, workLocation: option.id }))}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Salary Expectation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Salary (USD/year)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="text"
                  value={formData.salaryExpectation}
                  onChange={(e) => setFormData(prev => ({ ...prev, salaryExpectation: e.target.value }))}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 80000"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                This helps match you with suitable opportunities
              </p>
            </div>

            {/* Notice Period */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Notice Period
              </label>
              <div className="space-y-2">
                {noticePeriodOptions.map(option => (
                  <label key={option.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="noticePeriod"
                      checked={formData.noticePeriod === option.id}
                      onChange={() => setFormData(prev => ({ ...prev, noticePeriod: option.id }))}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <button
            type="button"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Save as Draft
            </button>
            
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
              disabled={formData.technicalSkills.length < 3}
            >
              Save & Continue
            </button>
          </div>
        </div>
      </form>

      {/* Progress Indicator */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Skills & Preferences Progress</span>
          <span className="text-sm font-semibold text-purple-600">
            {Math.min(100, Math.floor((formData.technicalSkills.length / 5) * 100))}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" 
            style={{ width: `${Math.min(100, Math.floor((formData.technicalSkills.length / 5) * 100))}%` }}
          ></div>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          {formData.technicalSkills.length >= 3 ? '✓ Minimum skills requirement met' : `Add ${3 - formData.technicalSkills.length} more skills to meet minimum requirement`}
        </div>
      </div>
    </div>
  );
};

export default SkillsPreferences;
"use client";

import { useState } from 'react';
import { FaUserTie, FaUserGraduate, FaEye, FaEyeSlash } from 'react-icons/fa';
import { defaultLanguage, Language } from '@/utils';
import PhoneNumber from './PhoneNumber';
import { CountryCode } from 'libphonenumber-js';

const translations = {
    en: {
        title: "Create your ProMeets account",
        subtitle: "Choose your profile type to get started",
        recruiter: "Recruiter",
        recruiterDesc: "Hire talent and manage recruitment processes",
        candidate: "Candidate",
        candidateDesc: "Find opportunities and showcase your skills",
        formTitle: "Complete your profile",
        fullName: "Full Name *",
        email: "Email *",
        whatsapp: "WhatsApp Phone Number *",
        phonePlaceholder: "Select your country and enter your phone number",
        password: "Password *",
        confirmPassword: "Confirm Password *",
        countryPlaceholder: "Select country",
        createAccount: "Create Account",
        alreadyHaveAccount: "Already have an account?",
        signIn: "Sign In",
        backToSelection: "Back to selection",
        requiredField: "This field is required",
        invalidEmail: "Please enter a valid email",
        passwordMismatch: "Passwords do not match",
        passwordRequirements: "Password must be at least 8 characters long",
    },
    es: {
        title: "Crea tu cuenta de ProMeets",
        subtitle: "Elige tu tipo de perfil para comenzar",
        recruiter: "Reclutador",
        recruiterDesc: "Contrata talento y gestiona procesos de reclutamiento",
        candidate: "Candidato",
        candidateDesc: "Encuentra oportunidades y muestra tus habilidades",
        formTitle: "Completa tu perfil",
        fullName: "Nombre Completo *",
        email: "Correo Electrónico *",
        whatsapp: "Número de WhatsApp *",
        phonePlaceholder: "Selecciona tu país e ingresa tu número de teléfono",
        password: "Contraseña *",
        confirmPassword: "Confirmar Contraseña *",
        countryPlaceholder: "Seleccionar país",
        createAccount: "Crear Cuenta",
        alreadyHaveAccount: "¿Ya tienes una cuenta?",
        signIn: "Iniciar Sesión",
        backToSelection: "Volver a la selección",
        requiredField: "Este campo es obligatorio",
        invalidEmail: "Por favor ingresa un correo válido",
        passwordMismatch: "Las contraseñas no coinciden",
        passwordRequirements: "La contraseña debe tener al menos 8 caracteres",
    },
    fr: {
        title: "Créez votre compte ProMeets",
        subtitle: "Choisissez votre type de profil pour commencer",
        recruiter: "Recruteur",
        recruiterDesc: "Recrutez des talents et gérez les processus de recrutement",
        candidate: "Candidat",
        candidateDesc: "Trouvez des opportunités et mettez en valeur vos compétences",
        formTitle: "Complétez votre profil",
        fullName: "Nom Complet *",
        email: "Email *",
        whatsapp: "Numéro WhatsApp *",
        phonePlaceholder: "Sélectionnez votre pays et entrez votre numéro de téléphone",
        password: "Mot de passe *",
        confirmPassword: "Confirmer le Mot de passe *",
        countryPlaceholder: "Sélectionner un pays",
        createAccount: "Créer un Compte",
        alreadyHaveAccount: "Vous avez déjà un compte ?",
        signIn: "Se Connecter",
        backToSelection: "Retour à la sélection",
        requiredField: "Ce champ est obligatoire",
        invalidEmail: "Veuillez entrer un email valide",
        passwordMismatch: "Les mots de passe ne correspondent pas",
        passwordRequirements: "Le mot de passe doit comporter au moins 8 caractères",
    },
    jp: {
        title: "ProMeetsアカウントを作成",
        subtitle: "プロフィールタイプを選択して開始",
        recruiter: "採用担当者",
        recruiterDesc: "人材を採用し、採用プロセスを管理",
        candidate: "候補者",
        candidateDesc: "機会を見つけ、スキルをアピール",
        formTitle: "プロフィールを完了",
        fullName: "フルネーム *",
        email: "メールアドレス *",
        whatsapp: "WhatsApp電話番号 *",
        phonePlaceholder: "国を選択して電話番号を入力",
        password: "パスワード *",
        confirmPassword: "パスワード確認 *",
        countryPlaceholder: "国を選択",
        createAccount: "アカウント作成",
        alreadyHaveAccount: "すでにアカウントをお持ちですか？",
        signIn: "サインイン",
        backToSelection: "選択に戻る",
        requiredField: "この項目は必須です",
        invalidEmail: "有効なメールアドレスを入力してください",
        passwordMismatch: "パスワードが一致しません",
        passwordRequirements: "パスワードは8文字以上必要です",
    },
    zh: {
        title: "创建您的ProMeets账户",
        subtitle: "选择您的个人资料类型开始",
        recruiter: "招聘人员",
        recruiterDesc: "招聘人才并管理招聘流程",
        candidate: "候选人",
        candidateDesc: "寻找机会并展示您的技能",
        formTitle: "完善您的个人资料",
        fullName: "全名 *",
        email: "电子邮箱 *",
        whatsapp: "WhatsApp电话号码 *",
        phonePlaceholder: "选择您的国家并输入电话号码",
        password: "密码 *",
        confirmPassword: "确认密码 *",
        countryPlaceholder: "选择国家",
        createAccount: "创建账户",
        alreadyHaveAccount: "已有账户？",
        signIn: "登录",
        backToSelection: "返回选择",
        requiredField: "此字段为必填项",
        invalidEmail: "请输入有效的邮箱地址",
        passwordMismatch: "密码不匹配",
        passwordRequirements: "密码长度至少为8个字符",
    }
};

interface RegistrationFormProps {
    language?: Language;
}

interface FormData {
    userType: 'recruiter' | 'candidate' | null;
    fullName: string;
    email: string;
    country: CountryCode;
    phone: string;
    password: string;
    confirmPassword: string;
}

const RegistrationForm = ({ language = 'en' }: RegistrationFormProps) => {
    const [step, setStep] = useState<'selection' | 'form'>('selection');
    const [formData, setFormData] = useState<FormData>({
        userType: null,
        fullName: '',
        email: '',
        country: 'US',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const t = translations[language] || translations[defaultLanguage];

    const handleUserTypeSelect = (type: 'recruiter' | 'candidate') => {
        setFormData(prev => ({ ...prev, userType: type }));
        setStep('form');
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const validateForm = () => {
        const newErrors: Partial<FormData> = {};

        if (!formData.fullName.trim()) newErrors.fullName = t.requiredField;
        if (!formData.email.trim()) {
            newErrors.email = t.requiredField;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t.invalidEmail;
        }
        if (!formData.phone.trim()) newErrors.phone = t.requiredField;
        if (!formData.password) newErrors.password = t.requiredField;
        if (formData.password.length < 8) newErrors.password = t.passwordRequirements;
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = t.passwordMismatch;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Here you would typically make an API call
            console.log('Form submitted:', formData);
            alert('Registration successful! (This is a demo)');
        }
    };

    if (step === 'selection') {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-4">
                <div className="max-w-4xl w-full">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {t.title}
                        </h1>
                        <p className="text-lg text-gray-600">
                            {t.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Recruiter Option */}
                        <button
                            onClick={() => handleUserTypeSelect('recruiter')}
                            className="group bg-white rounded-2xl border-2 border-gray-200 p-8 text-left hover:border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                                    <FaUserTie className="h-10 w-10 text-purple-600" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {t.recruiter}
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    {t.recruiterDesc}
                                </p>

                                <div className="mt-auto">
                                    <div className="inline-flex items-center gap-2 text-purple-600 font-semibold">
                                        <span>{t.recruiter}</span>
                                        <div className="w-2 h-2 bg-purple-600 rounded-full group-hover:animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        {/* Candidate Option */}
                        <button
                            onClick={() => handleUserTypeSelect('candidate')}
                            className="group bg-white rounded-2xl border-2 border-gray-200 p-8 text-left hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                                    <FaUserGraduate className="h-10 w-10 text-blue-600" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {t.candidate}
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    {t.candidateDesc}
                                </p>

                                <div className="mt-auto">
                                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                                        <span>{t.candidate}</span>
                                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600">
                            {t.alreadyHaveAccount}{' '}
                            <a href="/login" className="text-purple-600 font-semibold hover:text-purple-700">
                                {t.signIn}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4 pt-24">
            <div className="max-w-xl w-full">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                    {/* Back button */}
                    <button
                        onClick={() => setStep('selection')}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {t.backToSelection}
                    </button>

                    {/* Form header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            {formData.userType === 'recruiter' ? (
                                <FaUserTie className="h-8 w-8 text-purple-600" />
                            ) : (
                                <FaUserGraduate className="h-8 w-8 text-blue-600" />
                            )}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {t.formTitle}
                        </h2>
                        <p className="text-gray-600">
                            {formData.userType === 'recruiter' ? t.recruiterDesc : t.candidateDesc}
                        </p>
                    </div>

                    {/* Registration form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t.fullName}
                            </label>
                            <input
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="John Doe"
                            />
                            {errors.fullName && (
                                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t.email}
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="john@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        {/* Country and Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t.whatsapp}
                            </label>
                            <p className="text-sm text-gray-500 mb-3">{t.phonePlaceholder}</p>

                            <div className="flex gap-3">
                                {/* Country Selector */}
                                <PhoneNumber
                                    language={language}
                                    value={formData.phone}
                                    onChange={(value) => handleInputChange('phone', value)}
                                    placeholder={t.countryPlaceholder}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t.password}
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t.confirmPassword}
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg active:scale-95"
                        >
                            {t.createAccount}
                        </button>
                    </form>

                    {/* Sign in link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            {t.alreadyHaveAccount}{' '}
                            <a href="/login" className="text-purple-600 font-semibold hover:text-purple-700">
                                {t.signIn}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
"use client";

import { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { Language } from '@/utils';

const translations = {
    en: {
        title: "Welcome back to ProMeets",
        subtitle: "Sign in to your account to continue",
        email: "Email Address *",
        password: "Password *",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        signIn: "Sign In",
        orContinueWith: "Or continue with",
        noAccount: "Don't have an account?",
        signUp: "Sign Up",
        requiredField: "This field is required",
        invalidEmail: "Please enter a valid email",
        passwordRequirements: "Password is required",
        google: "Continue with Google",
        linkedin: "Continue with LinkedIn"
    },
    es: {
        title: "Bienvenido de nuevo a ProMeets",
        subtitle: "Inicia sesión en tu cuenta para continuar",
        email: "Correo Electrónico *",
        password: "Contraseña *",
        rememberMe: "Recordarme",
        forgotPassword: "¿Olvidaste tu contraseña?",
        signIn: "Iniciar Sesión",
        orContinueWith: "O continuar con",
        noAccount: "¿No tienes una cuenta?",
        signUp: "Regístrate",
        requiredField: "Este campo es obligatorio",
        invalidEmail: "Por favor ingresa un correo válido",
        passwordRequirements: "La contraseña es obligatoria",
        google: "Continuar con Google",
        linkedin: "Continuar con LinkedIn"
    },
    fr: {
        title: "Bienvenue sur ProMeets",
        subtitle: "Connectez-vous à votre compte pour continuer",
        email: "Adresse Email *",
        password: "Mot de Passe *",
        rememberMe: "Se souvenir de moi",
        forgotPassword: "Mot de passe oublié ?",
        signIn: "Se Connecter",
        orContinueWith: "Ou continuer avec",
        noAccount: "Vous n'avez pas de compte ?",
        signUp: "S'inscrire",
        requiredField: "Ce champ est obligatoire",
        invalidEmail: "Veuillez entrer un email valide",
        passwordRequirements: "Le mot de passe est requis",
        google: "Continuer avec Google",
        linkedin: "Continuer avec LinkedIn"
    },
    jp: {
        title: "ProMeetsへようこそ",
        subtitle: "続行するにはアカウントにサインインしてください",
        email: "メールアドレス *",
        password: "パスワード *",
        rememberMe: "ログイン情報を記憶する",
        forgotPassword: "パスワードをお忘れですか？",
        signIn: "サインイン",
        orContinueWith: "または次で続行",
        noAccount: "アカウントをお持ちでないですか？",
        signUp: "サインアップ",
        requiredField: "この項目は必須です",
        invalidEmail: "有効なメールアドレスを入力してください",
        passwordRequirements: "パスワードは必須です",
        google: "Googleで続行",
        linkedin: "LinkedInで続行"
    },
    zh: {
        title: "欢迎回到 ProMeets",
        subtitle: "登录您的账户以继续",
        email: "电子邮箱 *",
        password: "密码 *",
        rememberMe: "记住我",
        forgotPassword: "忘记密码？",
        signIn: "登录",
        orContinueWith: "或使用以下方式继续",
        noAccount: "还没有账户？",
        signUp: "注册",
        requiredField: "此字段为必填项",
        invalidEmail: "请输入有效的邮箱地址",
        passwordRequirements: "密码是必需的",
        google: "使用 Google 继续",
        linkedin: "使用 LinkedIn 继续"
    }
};

interface LoginFormProps {
    language?: Language;
}

interface FormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm = ({ language = 'en' }: LoginFormProps) => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        rememberMe: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    
    const t = translations[language] || translations['en'];

    const handleInputChange = (field: keyof FormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        
        // Clear error for this field when user starts typing
        if (errors[field as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const validateForm = () => {
        const newErrors: Partial<FormData> = {};

        if (!formData.email.trim()) {
            newErrors.email = t.requiredField;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t.invalidEmail;
        }
        if (!formData.password) {
            newErrors.password = t.passwordRequirements;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Here you would typically make an API call
            console.log('Login submitted:', formData);
            alert('Login successful! (This is a demo)');
        }
    };

    const handleSocialLogin = (provider: 'google' | 'linkedin') => {
        // Here you would typically redirect to OAuth endpoint
        console.log(`Redirecting to ${provider} OAuth`);
        alert(`Redirecting to ${provider} login (This is a demo)`);
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4 pt-24">
            <div className="max-w-xl w-full">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {t.title}
                        </h1>
                        <p className="text-gray-600">
                            {t.subtitle}
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 mb-8">
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

                        {/* Password */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    {t.password}
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                                >
                                    {t.forgotPassword}
                                </Link>
                            </div>
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

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={formData.rememberMe}
                                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                                {t.rememberMe}
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg active:scale-95"
                        >
                            {t.signIn}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">
                                {t.orContinueWith}
                            </span>
                        </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="space-y-4 mb-8">
                        <button
                            onClick={() => handleSocialLogin('google')}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300"
                        >
                            <FaGoogle className="h-5 w-5 text-red-600" />
                            <span>{t.google}</span>
                        </button>

                        <button
                            onClick={() => handleSocialLogin('linkedin')}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300"
                        >
                            <FaLinkedin className="h-5 w-5 text-blue-600" />
                            <span>{t.linkedin}</span>
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <p className="text-gray-600">
                            {t.noAccount}{' '}
                            <Link 
                                href="/registro/empresa" 
                                className="text-purple-600 font-semibold hover:text-purple-700"
                            >
                                {t.signUp}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
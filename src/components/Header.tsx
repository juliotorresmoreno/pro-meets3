"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
    FaSearch,
    FaBookOpen,
    FaUser,
    FaBars,
    FaTimes,
    FaChevronDown,
    FaGlobe,
    FaArrowRight
} from 'react-icons/fa';
import Image from 'next/image';
import { Language } from '@/utils';
import useLanguageStore from '@/store/language';

const translations: Record<Language, Record<string, string>> = {
    en: {
        search: 'Search',
        blog: 'Blog',
        login: 'Login',
        signup: 'Sign Up',
        language: 'Language',
        menu: 'Menu'
    },
    es: {
        search: 'Buscar',
        blog: 'Blog',
        login: 'Iniciar sesión',
        signup: 'Regístrate',
        language: 'Idioma',
        menu: 'Menú'
    },
    fr: {
        search: 'Rechercher',
        blog: 'Blog',
        login: 'Connexion',
        signup: "S'inscrire",
        language: 'Langue',
        menu: 'Menu'
    },
    jp: {
        search: '検索',
        blog: 'ブログ',
        login: 'ログイン',
        signup: 'サインアップ',
        language: '言語',
        menu: 'メニュー'
    },
    zh: {
        search: '搜索',
        blog: '博客',
        login: '登录',
        signup: '注册',
        language: '语言',
        menu: '菜单'
    },
};

function getFlagEmoji(language: Language): string {
    const flagMap: Record<Language, string> = {
        en: '🇬🇧',
        es: '🇪🇸',
        fr: '🇫🇷',
        jp: '🇯🇵',
        zh: '🇨🇳'
    };
    return flagMap[language] || '🇬🇧';
}

interface HeaderProps {
    readonly language?: Language;
}

const Header = ({ language }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const { language: storeLanguage, setLanguage } = useLanguageStore();
    const currentLanguage = language || storeLanguage;
    
    const languages: Array<{ flag: string; name: string; code: Language }> = [
        { flag: '🇬🇧', name: 'English', code: 'en' },
        { flag: '🇪🇸', name: 'Español', code: 'es' },
        { flag: '🇫🇷', name: 'Français', code: 'fr' },
        { flag: '🇯🇵', name: '日本語', code: 'jp' },
        { flag: '🇨🇳', name: '中文', code: 'zh' }
    ];

    const menuItems = [
        { name: 'search', href: '/search', icon: FaSearch },
        { name: 'blog', href: '/blog', icon: FaBookOpen },
    ];

    const t = translations[currentLanguage];
    
    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
        setIsLanguageOpen(false);
    };

    return (
        <header className="fixed w-full z-50 transition-all duration-300 py-2 bg-purple-50/70 backdrop-blur-sm">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        className="flex items-center focus:outline-none rounded-md"
                        href="/"
                    >
                        <Image
                            width={128}
                            height={48}
                            src="/logo.png"
                            alt="ProMeets"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="flex items-center space-x-6">
                        <nav className="hidden lg:flex items-center space-x-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium text-sm uppercase tracking-wider px-3 py-2 rounded-md group"
                                    href={item.href}
                                >
                                    <item.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                                    {t[item.name]}
                                </Link>
                            ))}
                        </nav>

                        <div className="hidden lg:flex items-center space-x-4">
                            <Link
                                className="flex items-center text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 px-3 py-2 group"
                                href="/login"
                            >
                                <FaUser className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                                {t.login}
                            </Link>

                            <Link
                                className="px-4 py-2 bg-linear-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center group"
                                href="/signup"
                            >
                                <FaArrowRight className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                                {t.signup}
                            </Link>

                            {/* Language Selector Desktop */}
                            <div className="relative ml-2">
                                <button
                                    className="flex cursor-pointer items-center text-gray-700 hover:text-purple-600 transition-colors duration-200 px-3 py-2 rounded-md group"
                                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                    onBlur={() => setTimeout(() => setIsLanguageOpen(false), 200)}
                                >
                                    <span className="text-xl mr-1">{getFlagEmoji(currentLanguage)}</span>
                                    <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isLanguageOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-10">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                className={`flex cursor-pointer items-center w-full px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 ${currentLanguage === lang.code ? 'text-purple-600 bg-purple-50' : 'text-gray-700'}`}
                                                onClick={() => handleLanguageChange(lang.code)}
                                            >
                                                <span className="text-xl mr-3">{lang.flag}</span>
                                                <span>{lang.name} ({lang.code.toUpperCase()})</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-label={t.menu}
                        >
                            <span className="sr-only">{t.menu}</span>
                            {isMenuOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                    {/* Mobile Menu Items */}
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            className="flex items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <item.icon className="w-5 h-5 mr-2" />
                            {t[item.name]}
                        </Link>
                    ))}

                    {/* Mobile Language Selector */}
                    <div className="px-3 py-2">
                        <button
                            className="flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                        >
                            <div className="flex items-center">
                                <FaGlobe className="w-5 h-5 mr-3 text-gray-500" />
                                <span>{t.language}</span>
                            </div>
                            <FaChevronDown className={`w-5 h-5 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <div
                            className={`transition-all duration-200 overflow-hidden ${isLanguageOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="space-y-2 pl-4 pt-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`flex cursor-pointer items-center w-full px-3 py-2 text-sm rounded-md text-left transition-colors duration-150 ${currentLanguage === lang.code
                                            ? 'bg-purple-50 text-purple-600'
                                            : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        onClick={() => handleLanguageChange(lang.code)}
                                    >
                                        <span className="text-xl mr-3">{getFlagEmoji(lang.code)}</span>
                                        <span>{lang.name} ({lang.code.toUpperCase()})</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Auth Buttons */}
                    <div className="pt-4 border-t border-gray-200 space-y-3">
                        <Link
                            className="flex items-center justify-center w-full px-4 py-3 text-center rounded-md text-base font-medium text-gray-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-200 transition-colors duration-200"
                            href="/login"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaUser className="w-5 h-5 mr-2" />
                            {t.login}
                        </Link>
                        <Link
                            className="flex items-center justify-center w-full px-4 py-3 text-center rounded-md bg-linear-to-r from-purple-500 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
                            href="/signup"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaArrowRight className="w-5 h-5 mr-2" />
                            {t.signup}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
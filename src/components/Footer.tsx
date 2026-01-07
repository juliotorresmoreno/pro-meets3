import Link from "next/link";
import config from "@/config";
import { FaLinkedin, FaVideo } from "react-icons/fa";
import { Language } from "@/utils/language";

const translations = {
    en: {
        tagline: "The all-in-one solution for modern recruiting. Schedule, interview, manage and record with ease.",
        quickLinks: "Quick Links",
        features: "Features",
        productShowcase: "Product Showcase",
        competitorComparison: "Competitor Comparison",
        howItWorks: "How It Works",
        pricing: "Pricing",
        faq: "FAQ",
        blog: "Blog",
        legalContact: "Legal & Contact",
        privacyPolicy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact",
        copyright: "All rights reserved."
    },
    es: {
        tagline: "La solución integral para el reclutamiento moderno. Agenda, entrevista, gestiona y graba con facilidad.",
        quickLinks: "Enlaces Rápidos",
        features: "Características",
        productShowcase: "Vitrina del Producto",
        competitorComparison: "Comparación con Competidores",
        howItWorks: "Cómo Funciona",
        pricing: "Precios",
        faq: "Preguntas Frecuentes",
        blog: "Blog",
        legalContact: "Legal y Contacto",
        privacyPolicy: "Política de Privacidad",
        terms: "Términos de Servicio",
        contact: "Contacto",
        copyright: "Todos los derechos reservados."
    },
    fr: {
        tagline: "La solution tout-en-un pour le recrutement moderne. Planifiez, interviewez, gérez et enregistrez facilement.",
        quickLinks: "Liens Rapides",
        features: "Fonctionnalités",
        productShowcase: "Présentation du Produit",
        competitorComparison: "Comparaison avec les Concurrents",
        howItWorks: "Comment ça marche",
        pricing: "Tarifs",
        faq: "FAQ",
        blog: "Blog",
        legalContact: "Légal & Contact",
        privacyPolicy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
        contact: "Contact",
        copyright: "Tous droits réservés."
    },
    jp: {
        tagline: "現代的な採用のためのオールインワンソリューション。簡単にスケジュール、面接、管理、録画。",
        quickLinks: "クイックリンク",
        features: "特徴",
        productShowcase: "製品紹介",
        competitorComparison: "競合比較",
        howItWorks: "使い方",
        pricing: "価格",
        faq: "よくある質問",
        blog: "ブログ",
        legalContact: "法的事項 & お問い合わせ",
        privacyPolicy: "プライバシーポリシー",
        terms: "利用規約",
        contact: "お問い合わせ",
        copyright: "全著作権所有。"
    },
    zh: {
        tagline: "现代招聘的一体化解决方案。轻松安排、面试、管理和录制。",
        quickLinks: "快速链接",
        features: "功能",
        productShowcase: "产品展示",
        competitorComparison: "竞争对手比较",
        howItWorks: "工作原理",
        pricing: "定价",
        faq: "常见问题",
        blog: "博客",
        legalContact: "法律与联系",
        privacyPolicy: "隐私政策",
        terms: "服务条款",
        contact: "联系我们",
        copyright: "版权所有。"
    }
};

interface FooterProps {
    readonly language: Language;
}

export default function Footer({ language }: FooterProps) {
    const currentYear = new Date().getFullYear();
    const t = translations[language] || translations.en;

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Columna 1: Información de ProMeets */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <FaVideo className="h-7 w-7 text-purple-400" />
                        <span className="text-xl font-bold text-white">ProMeets</span>
                    </div>
                    <p className="text-sm leading-relaxed">
                        {t.tagline}
                    </p>
                </div>

                {/* Columna 2: Enlaces Rápidos */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        {t.quickLinks}
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="#features"
                                className="hover:text-purple-400 transition-colors duration-200"
                            >
                                {t.features}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pricing"
                                className="hover:text-purple-400 transition-colors duration-200"
                            >
                                {t.pricing}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#frequent-asked-questions"
                                className="hover:text-purple-400 transition-colors duration-200"
                            >
                                {t.faq}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="hover:text-purple-400 transition-colors duration-200"
                            >
                                {t.blog}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Columna 3: Legal y Contacto */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        {t.legalContact}
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/privacy-policy"
                                className="hover:text-purple-400 transition-colors duration-200"
                            >
                                {t.privacyPolicy}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms-of-service"
                                className="hover:text-purple-400 transition-colors duration-200"
                            >
                                {t.terms}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-purple-400 transition-colors duration-200"
                            >
                                {t.contact}
                            </Link>
                        </li>
                    </ul>
                    <div className="flex space-x-4 mt-6">
                        {/* Iconos de Redes Sociales usando react-icons */}
                        <a
                            href={config.linkedinUrl}
                            aria-label="LinkedIn"
                            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm text-gray-500 mt-8">
                &copy; {currentYear} ProMeets. {t.copyright}
            </div>
        </footer>
    );
}

import React, { useMemo } from "react";
import Link from "next/link";
import {
    FaVideo,
    FaUsers,
    FaLightbulb,
    FaChartLine,
    FaChevronRight,
    FaBuilding,
    FaUserCheck,
    FaHandshake,
    FaBullseye
} from "react-icons/fa";
import TypeWriter from "@/components/TypeWriter";

const translations = {
    es: {
        titlePrefix: "Conectamos ",
        titleSuffix: "talento con oportunidades",
        subtitle:
            "La plataforma donde reclutadores y candidatos se encuentran para crear conexiones profesionales significativas.",
        typing1: "Inteligente",
        typing2: "Eficiente",
        typing3: "Colaborativo",
        typing4: "Transparente",
        ctaJoin: "Unirse Ahora",
        ctaFeatures: "Ver Funcionalidades",
        poweredBy: "Potenciado con tecnología avanzada:",
        newPlatform: "✨ La nueva forma de conectar talento",
        scheduledMeeting: "Reunión programada",
        interviewExample:
            "Entrevista con TechCorp para puesto de Desarrollador Senior",
        joinNow: "Unirse ahora",
        platformPillars: {
            matching: "Emparejamiento",
            videoCalls: "Entrevistas",
            collaboration: "Colaboración",
            intelligence: "Inteligencia",
            analytics: "Analíticas",
        },
        forRecruiters: "Para Reclutadores",
        forCandidates: "Para Candidatos",
        recruitersBenefit: "Encuentra el talento perfecto para tu equipo",
        candidatesBenefit: "Descubre oportunidades que se ajustan a tu perfil",
    },
    en: {
        titlePrefix: "Connecting ",
        titleSuffix: "talent with opportunities",
        subtitle:
            "The platform where recruiters and candidates meet to create meaningful professional connections.",
        typing1: "Smart",
        typing2: "Efficient",
        typing3: "Collaborative",
        typing4: "Transparent",
        ctaJoin: "Join Now",
        ctaFeatures: "Explore Features",
        poweredBy: "Powered by advanced technology:",
        newPlatform: "✨ The new way to connect talent",
        scheduledMeeting: "Scheduled meeting",
        interviewExample: "Interview with TechCorp for Senior Developer position",
        joinNow: "Join now",
        platformPillars: {
            matching: "Matching",
            videoCalls: "Interviews",
            collaboration: "Collaboration",
            intelligence: "Intelligence",
            analytics: "Analytics",
        },
        forRecruiters: "For Recruiters",
        forCandidates: "For Candidates",
        recruitersBenefit: "Find the perfect talent for your team",
        candidatesBenefit: "Discover opportunities that match your profile",
    },
    fr: {
        titlePrefix: "Connecter ",
        titleSuffix: "les talents aux opportunités",
        subtitle:
            "La plateforme où recruteurs et candidats se rencontrent pour créer des connexions professionnelles significatives.",
        typing1: "Intelligent",
        typing2: "Efficace",
        typing3: "Collaboratif",
        typing4: "Transparent",
        ctaJoin: "Rejoindre Maintenant",
        ctaFeatures: "Voir les fonctionnalités",
        poweredBy: "Propulsé par une technologie avancée :",
        newPlatform: "✨ La nouvelle façon de connecter les talents",
        scheduledMeeting: "Réunion programmée",
        interviewExample: "Entretien avec TechCorp pour un poste de Développeur Senior",
        joinNow: "Rejoindre maintenant",
        platformPillars: {
            matching: "Appariement",
            videoCalls: "Entretiens",
            collaboration: "Collaboration",
            intelligence: "Intelligence",
            analytics: "Analytique",
        },
        forRecruiters: "Pour Recruteurs",
        forCandidates: "Pour Candidats",
        recruitersBenefit: "Trouvez le talent parfait pour votre équipe",
        candidatesBenefit: "Découvrez des opportunités qui correspondent à votre profil",
    },
    jp: {
        titlePrefix: "機会と人材を",
        titleSuffix: "つなぐプラットフォーム",
        subtitle:
            "採用担当者と候補者が出会い、意味のある専門的なつながりを作るプラットフォーム。",
        typing1: "スマート",
        typing2: "効率的",
        typing3: "協力的",
        typing4: "透明",
        ctaJoin: "今すぐ参加",
        ctaFeatures: "機能を見る",
        poweredBy: "高度な技術で構築:",
        newPlatform: "✨ 新しい人材コネクション",
        scheduledMeeting: "予定された面接",
        interviewExample: "TechCorpとのシニア開発者ポジションについての面談",
        joinNow: "今すぐ参加",
        platformPillars: {
            matching: "マッチング",
            videoCalls: "面接",
            collaboration: "コラボレーション",
            intelligence: "インテリジェンス",
            analytics: "分析",
        },
        forRecruiters: "採用担当者向け",
        forCandidates: "候補者向け",
        recruitersBenefit: "あなたのチームにぴったりの人材を見つけましょう",
        candidatesBenefit: "あなたのプロファイルに合った機会を見つけましょう",
    },
    zh: {
        titlePrefix: "连接人才与",
        titleSuffix: "机遇的平台",
        subtitle: "招聘人员和候选人见面的平台，创造有意义的专业联系。",
        typing1: "智能",
        typing2: "高效",
        typing3: "协作",
        typing4: "透明",
        ctaJoin: "立即加入",
        ctaFeatures: "查看功能",
        poweredBy: "由先进技术驱动：",
        newPlatform: "✨ 连接人才的新方式",
        scheduledMeeting: "安排的会议",
        interviewExample: "与TechCorp面试高级开发职位",
        joinNow: "立即加入",
        platformPillars: {
            matching: "匹配",
            videoCalls: "面试",
            collaboration: "协作",
            intelligence: "智能",
            analytics: "分析",
        },
        forRecruiters: "招聘人员",
        forCandidates: "候选人",
        recruitersBenefit: "为您的团队找到完美人才",
        candidatesBenefit: "发现与您资料匹配的机会",
    },
};

interface HeroProps {
    readonly language?: keyof typeof translations;
}

const HeroSection: React.FC<HeroProps> = ({ language = "es" }) => {
    const t = translations[language] || translations.es;

    const words = useMemo(
        () => [t.typing1, t.typing2, t.typing3, t.typing4],
        [t]
    );

    // Pilares de la plataforma
    const platformPillars = useMemo(
        () => [
            {
                icon: <FaBullseye className="w-5 h-5" />,
                title: t.platformPillars.matching,
            },
            {
                icon: <FaVideo className="w-5 h-5" />,
                title: t.platformPillars.videoCalls,
            },
            {
                icon: <FaUsers className="w-5 h-5" />,
                title: t.platformPillars.collaboration,
            },
            {
                icon: <FaLightbulb className="w-5 h-5" />,
                title: t.platformPillars.intelligence,
            },
            {
                icon: <FaChartLine className="w-5 h-5" />,
                title: t.platformPillars.analytics,
            },
        ],
        [t]
    );

    return (
        <section className="relative overflow-hidden bg-purple-50 min-h-[90vh] flex items-center lg:pt-0">
            {/* Background elements con animaciones CSS */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 animate-fade-in">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200 blur-3xl animate-pulse-slow" />
                    <div className="absolute top-2/3 left-2/3 w-64 h-64 rounded-full bg-blue-700 blur-3xl animate-pulse-slow animation-delay-1000" />
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-300 blur-3xl animate-pulse-slow animation-delay-2000" />
                </div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 animate-slide-up animation-delay-300">
                    {/* Text content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="mb-8 animate-fade-in animation-delay-400">
                            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-800 mb-4 hover:scale-105 transition-transform duration-300">
                                {t.newPlatform}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up animation-delay-500">
                            {t.titlePrefix}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600">
                                {t.titleSuffix}
                            </span>
                        </h1>

                        <div className="h-12 mb-6 animate-fade-in animation-delay-600">
                            <span className="text-2xl md:text-3xl font-medium text-purple-600">

                                <TypeWriter words={words} />

                                <span className="inline-block w-0.5 h-8 bg-purple-600 ml-1 animate-pulse"></span>
                            </span>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up animation-delay-700">
                            {t.subtitle}
                        </p>

                        {/* Dual audience benefits */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-10 animate-stagger-fade-up">
                            <div
                                className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-2 transition-all duration-300 animate-slide-in-left animation-delay-800"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                                        <FaBuilding className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                                        {t.forRecruiters}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">{t.recruitersBenefit}</p>
                            </div>

                            <div
                                className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-2 transition-all duration-300 animate-slide-in-right animation-delay-900"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                                        <FaUserCheck className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                                        {t.forCandidates}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">{t.candidatesBenefit}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-1000">
                            <Link
                                href="/signup"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 font-bold text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                            >
                                <FaHandshake className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                {t.ctaJoin}
                            </Link>
                            <Link
                                href="#features"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group"
                            >
                                {t.ctaFeatures}
                                <FaChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>

                        <div className="mt-12 animate-slide-up animation-delay-1100">
                            <p className="text-sm text-gray-500 mb-4 font-medium">{t.poweredBy}</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                {platformPillars.map((pillar, index) => (
                                    <div
                                        key={pillar.title}
                                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 animate-stagger-fade-up"
                                        style={{ animationDelay: `${1200 + (index * 100)}ms` }}
                                    >
                                        <div className="text-purple-600 group-hover:scale-110 transition-transform duration-300">
                                            {pillar.icon}
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                            {pillar.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mockup image */}
                    <div className="lg:w-1/2 relative animate-float animation-delay-400">
                        <div className="relative floating-animation">
                            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-2xl bg-purple-100/50 border border-purple-200/50 animate-fade-in animation-delay-500" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-2xl bg-purple-200/50 border border-purple-300/50 animate-fade-in animation-delay-600" />
                            <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                                <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                                </div>
                                <div className="p-4 bg-linear-to-br from-purple-50 to-blue-50 h-96 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white hover:rotate-360 hover:scale-110 transition-all duration-700">
                                            <FaHandshake className="w-8 h-8" />
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2 text-gray-800 animate-fade-in">
                                            {t.scheduledMeeting}
                                        </h3>
                                        <p className="text-gray-600 text-sm max-w-xs mx-auto mb-6 animate-slide-up animation-delay-200">
                                            {t.interviewExample}
                                        </p>

                                        {/* Stats section */}
                                        <div className="grid grid-cols-2 gap-4 mb-6 max-w-xs mx-auto animate-stagger-fade-up">
                                            <div className="bg-white/80 rounded-lg p-3 border border-gray-200 hover:border-purple-300 hover:scale-105 transition-all duration-300">
                                                <div className="text-lg font-bold text-purple-600">95%</div>
                                                <div className="text-xs text-gray-600">Match Score</div>
                                            </div>
                                            <div className="bg-white/80 rounded-lg p-3 border border-gray-200 hover:border-blue-300 hover:scale-105 transition-all duration-300">
                                                <div className="text-lg font-bold text-blue-600">24min</div>
                                                <div className="text-xs text-gray-600">Time Saved</div>
                                            </div>
                                        </div>

                                        <Link
                                            href="/signup"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all duration-300 animate-bounce-in animation-delay-800"
                                        >
                                            {t.joinNow}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
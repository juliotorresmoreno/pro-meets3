import { defaultLanguage, Language } from '@/utils';
import {
    FaSearch,
    FaChartLine,
    FaComments,
    FaRobot,
    FaCheckCircle,
    FaDatabase,
    FaClipboardCheck,
    FaUsers,
} from 'react-icons/fa';

const translations = {
    en: {
        header: "Features designed to help you hire better",
        subheader: "A comprehensive platform that transforms every stage of recruitment with intelligent tools and an intuitive design.",
        advancedTechnology: "Advanced Technology",
        features: [
            {
                title: "Intelligent Talent Search",
                description: "Find ideal candidates in seconds with our AI-powered search engine that analyzes skills, experience, and cultural fit.",
                benefits: ["Skills-based search", "Advanced filters", "Automatic recommendations"]
            },
            {
                title: "Automated Assessment",
                description: "Smart systems that evaluate candidates through technical skills analysis and soft skills assessment.",
                benefits: ["Technical tests", "Behavioral analysis", "Objective scoring"]
            },
            {
                title: "Complete Management",
                description: "Control the entire hiring cycle from a single platform, from first contact to onboarding.",
                benefits: ["Visual pipeline", "Unified communication", "Automated tracking"]
            },
            {
                title: "Centralized Database",
                description: "Store and organize all candidate profiles in a secure and accessible repository.",
                benefits: ["Enriched profiles", "Complete history", "Smart search"]
            },
            {
                title: "Team Collaboration",
                description: "Tools designed for your entire team to work in a coordinated and efficient manner.",
                benefits: ["Shared comments", "Group ratings", "Collaborative workflows"]
            },
            {
                title: "Reports and Analytics",
                description: "Get valuable insights into your hiring processes with interactive dashboards.",
                benefits: ["Key metrics", "Market trends", "Process optimization"]
            }
        ]
    },
    es: {
        header: "Características diseñadas para contratar mejor",
        subheader: "Una plataforma completa que transforma cada etapa del reclutamiento con herramientas inteligentes y un diseño intuitivo.",
        advancedTechnology: "Tecnología Avanzada",
        features: [
            {
                title: "Búsqueda Inteligente de Talento",
                description: "Encuentra candidatos ideales en segundos con nuestro motor de búsqueda con IA que analiza habilidades, experiencia y compatibilidad cultural.",
                benefits: ["Búsqueda por competencias", "Filtros avanzados", "Recomendaciones automáticas"]
            },
            {
                title: "Evaluación Automatizada",
                description: "Sistemas inteligentes que evalúan candidatos mediante análisis de habilidades técnicas y evaluación de soft skills.",
                benefits: ["Tests técnicos", "Análisis de comportamiento", "Puntuación objetiva"]
            },
            {
                title: "Gestión Integral",
                description: "Controla todo el ciclo de contratación desde una sola plataforma, desde el primer contacto hasta la incorporación.",
                benefits: ["Pipeline visual", "Comunicación unificada", "Seguimiento automatizado"]
            },
            {
                title: "Base de Datos Centralizada",
                description: "Almacena y organiza todos los perfiles de candidatos en un repositorio seguro y accesible.",
                benefits: ["Perfiles enriquecidos", "Historial completo", "Búsqueda inteligente"]
            },
            {
                title: "Colaboración en Equipo",
                description: "Herramientas diseñadas para que todo tu equipo trabaje de manera coordinada y eficiente.",
                benefits: ["Comentarios compartidos", "Calificaciones grupales", "Workflows colaborativos"]
            },
            {
                title: "Reportes y Analytics",
                description: "Obtén insights valiosos sobre tus procesos de contratación con dashboards interactivos.",
                benefits: ["Métricas clave", "Tendencias del mercado", "Optimización de procesos"]
            }
        ]
    },
    fr: {
        header: "Fonctionnalités conçues pour vous aider à mieux recruter",
        subheader: "Une plateforme complète qui transforme chaque étape du recrutement avec des outils intelligents et un design intuitif.",
        advancedTechnology: "Technologie Avancée",
        features: [
            {
                title: "Recherche Intelligente de Talents",
                description: "Trouvez des candidats idéaux en quelques secondes avec notre moteur de recherche IA qui analyse les compétences, l'expérience et l'adéquation culturelle.",
                benefits: ["Recherche par compétences", "Filtres avancés", "Recommandations automatiques"]
            },
            {
                title: "Évaluation Automatisée",
                description: "Systèmes intelligents qui évaluent les candidats par l'analyse des compétences techniques et l'évaluation des compétences comportementales.",
                benefits: ["Tests techniques", "Analyse comportementale", "Notation objective"]
            },
            {
                title: "Gestion Complète",
                description: "Contrôlez l'ensemble du cycle de recrutement depuis une seule plateforme, du premier contact à l'intégration.",
                benefits: ["Pipeline visuel", "Communication unifiée", "Suivi automatisé"]
            },
            {
                title: "Base de Données Centralisée",
                description: "Stockez et organisez tous les profils de candidats dans un référentiel sécurisé et accessible.",
                benefits: ["Profils enrichis", "Historique complet", "Recherche intelligente"]
            },
            {
                title: "Collaboration d'Équipe",
                description: "Outils conçus pour que toute votre équipe travaille de manière coordonnée et efficace.",
                benefits: ["Commentaires partagés", "Évaluations de groupe", "Workflows collaboratifs"]
            },
            {
                title: "Rapports et Analyses",
                description: "Obtenez des informations précieuses sur vos processus de recrutement avec des tableaux de bord interactifs.",
                benefits: ["Métriques clés", "Tendances du marché", "Optimisation des processus"]
            }
        ]
    },
    jp: {
        header: "より良い採用を支援するために設計された機能",
        subheader: "インテリジェントなツールと直感的なデザインで採用のあらゆる段階を変革する包括的なプラットフォーム。",
        advancedTechnology: "先進技術",
        features: [
            {
                title: "インテリジェントな人材検索",
                description: "スキル、経験、文化適性を分析するAI検索エンジンで、理想的な候補者を数秒で見つけます。",
                benefits: ["スキルベース検索", "高度なフィルター", "自動レコメンデーション"]
            },
            {
                title: "自動化された評価",
                description: "技術スキル分析とソフトスキル評価を通じて候補者を評価するスマートシステム。",
                benefits: ["技術テスト", "行動分析", "客観的採点"]
            },
            {
                title: "完全な管理",
                description: "最初の接触からオンボーディングまで、単一のプラットフォームから採用サイクル全体を管理。",
                benefits: ["視覚的パイプライン", "統合コミュニケーション", "自動追跡"]
            },
            {
                title: "集中化されたデータベース",
                description: "すべての候補者プロファイルを安全でアクセス可能なリポジトリに保存・整理。",
                benefits: ["充実したプロファイル", "完全な履歴", "スマート検索"]
            },
            {
                title: "チームコラボレーション",
                description: "チーム全体が協調的かつ効率的に働くように設計されたツール。",
                benefits: ["共有コメント", "グループ評価", "共同ワークフロー"]
            },
            {
                title: "レポートと分析",
                description: "インタラクティブなダッシュボードで採用プロセスに関する貴重な洞察を取得。",
                benefits: ["主要メトリクス", "市場動向", "プロセス最適化"]
            }
        ]
    },
    zh: {
        header: "旨在帮助您更好招聘的功能",
        subheader: "一个全面的平台，通过智能工具和直观的设计，改变招聘的每个阶段。",
        advancedTechnology: "先进技术",
        features: [
            {
                title: "智能人才搜索",
                description: "使用我们的人工智能搜索引擎，分析技能、经验和文化契合度，在几秒钟内找到理想候选人。",
                benefits: ["基于技能搜索", "高级筛选", "自动推荐"]
            },
            {
                title: "自动化评估",
                description: "通过技术技能分析和软技能评估来评估候选人的智能系统。",
                benefits: ["技术测试", "行为分析", "客观评分"]
            },
            {
                title: "全面管理",
                description: "从单一平台控制整个招聘周期，从初次接触到入职。",
                benefits: ["可视化流程", "统一沟通", "自动跟踪"]
            },
            {
                title: "集中化数据库",
                description: "将所有的候选人资料存储和组织在一个安全、可访问的存储库中。",
                benefits: ["丰富资料", "完整历史", "智能搜索"]
            },
            {
                title: "团队协作",
                description: "为整个团队设计的工具，实现协调高效的工作。",
                benefits: ["共享评论", "团队评分", "协作工作流"]
            },
            {
                title: "报告与分析",
                description: "通过交互式仪表板获取关于招聘流程的宝贵见解。",
                benefits: ["关键指标", "市场趋势", "流程优化"]
            }
        ]
    }
};

interface FeaturesSectionProps {
    language?: Language;
}

const FeaturesSection = ({ language = defaultLanguage }: FeaturesSectionProps) => {
    const t = translations[language] || translations[defaultLanguage];
    
    const featuresData = [
        {
            id: 1,
            icon: FaSearch,
            bgColor: "bg-purple-50"
        },
        {
            id: 2,
            icon: FaChartLine,
            bgColor: "bg-blue-50"
        },
        {
            id: 3,
            icon: FaComments,
            bgColor: "bg-green-50"
        },
        {
            id: 4,
            icon: FaDatabase,
            bgColor: "bg-orange-50"
        },
        {
            id: 5,
            icon: FaUsers,
            bgColor: "bg-indigo-50"
        },
        {
            id: 6,
            icon: FaClipboardCheck,
            bgColor: "bg-teal-50"
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                        <FaRobot className="h-5 w-5 text-purple-600" />
                        <span className="text-purple-700 font-medium">{t.advancedTechnology}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t.header.split(' ').map((word, index, array) => (
                            index === array.length - 1 ? (
                                <span key={index} className="text-purple-600">{word} </span>
                            ) : (
                                <span key={index}>{word} </span>
                            )
                        ))}
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        {t.subheader}
                    </p>
                </div>

                {/* Grid de características */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {featuresData.map((feature, index) => {
                        const featureContent = t.features[index];
                        const IconComponent = feature.icon;
                        
                        return (
                            <div
                                key={feature.id}
                                className="group relative bg-white rounded-xl border border-gray-200 p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                            >
                                {/* Icono */}
                                <div className="mb-6">
                                    <IconComponent className={`h-12 w-12 text-purple-600`} />
                                </div>

                                {/* Contenido */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                                        {featureContent.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {featureContent.description}
                                    </p>

                                    {/* Lista de beneficios */}
                                    <div className="pt-4 border-t border-gray-100 space-y-3">
                                        {featureContent.benefits.map((benefit, benefitIndex) => (
                                            <div
                                                key={benefitIndex}
                                                className="flex items-center gap-3"
                                            >
                                                <FaCheckCircle className="h-5 w-5 text-green-500" />
                                                <span className="text-gray-700 font-medium">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Indicador de hover */}
                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;
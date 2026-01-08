import {
    FaDatabase,
    FaRobot,
    FaClipboardCheck,
    FaLaptopCode,
    FaProjectDiagram,
    FaSyncAlt,
    FaNetworkWired,
    FaChartLine,
    FaPlusCircle,
    FaCheck,
    FaShieldAlt,
    FaUsers,
    FaCogs,
    FaComments,
    FaFileAlt
} from 'react-icons/fa';
import { Language } from '@/utils';

const translations = {
    en: {
        ourOffer: "Our Offer",
        header: "A comprehensive platform for your entire process",
        subheader: "We integrate all the necessary tools into a unified solution, from initial search to final hiring.",
        offerings: [
            {
                title: "Verified Talent Database",
                description: "Access validated profiles with complete information about skills, experience, and references.",
                benefits: ["Identity verification", "Experience validation", "Verified references"]
            },
            {
                title: "AI-Powered Smart Search",
                description: "Find ideal candidates using advanced search algorithms and predictive matching.",
                benefits: ["Smart matching", "Semantic search", "Personalized recommendations"]
            },
            {
                title: "Comprehensive Assessment",
                description: "Analyze profiles with detailed metrics and objective evaluation tools.",
                benefits: ["Technical evaluation", "Soft skills analysis", "Comparative ratings"]
            },
            {
                title: "Automated Technical Tests",
                description: "Automate the evaluation of specific skills with expert-designed tests.",
                benefits: ["Technical tests", "Practical exercises", "Real-time evaluation"]
            },
            {
                title: "Visual Pipeline Management",
                description: "Monitor the progress of each candidate through a visual and intuitive interface.",
                benefits: ["Kanban view", "Stage tracking", "Progress alerts"]
            },
            {
                title: "Tool Integration",
                description: "Connect our platform with your current systems for a unified workflow.",
                benefits: ["Available API", "Webhooks", "Bidirectional synchronization"]
            },
            {
                title: "Relationship Management",
                description: "Maintain and develop relationships with candidates through communication and tracking tools.",
                benefits: ["Talent database", "Automated follow-up", "Centralized communication"]
            },
            {
                title: "Market Analytics",
                description: "Get insights on labor market trends and competitive salary ranges.",
                benefits: ["Salary benchmarking", "Market trends", "Competitive analysis"]
            },
            {
                title: "Additional Modules",
                description: "Expand functionality with specialized modules according to your specific needs.",
                benefits: ["Customization", "Scalability", "Constant updates"]
            }
        ],
        platformHighlights: [
            {
                title: "Security and Privacy",
                description: "We implement the highest security standards to protect your data and that of your candidates."
            },
            {
                title: "Team Collaboration",
                description: "Work in a coordinated manner with your team through integrated collaboration tools."
            },
            {
                title: "Flexible Configuration",
                description: "Adapt the platform to your specific processes with advanced customization options."
            }
        ],
        integralApproachTitle: "An integral approach to recruitment",
        integralApproachDescription: "Instead of multiple disconnected tools, we offer a unified solution that covers the entire hiring cycle. This means less time integrating systems and more time focused on finding the right talent.",
        unifiedApproachTitle: "How our approach works",
        unifiedApproachDescription: "Each stage is interconnected, allowing for a continuous and efficient workflow.",
        whatMakesSpecialTitle: "What makes our platform special",
        whatMakesSpecialDescription: "Features designed with the real needs of modern recruitment teams in mind.",
        hoverIndicator: "Part of our comprehensive solution",
        approachSteps: [
            "Search and discovery",
            "Evaluation and selection",
            "Process management",
            "Analysis and improvement"
        ],
        features: [
            {
                title: "Centralized communication",
                description: "Everything in one place, without switching between applications"
            },
            {
                title: "Synchronized data",
                description: "Information automatically updated throughout the system"
            },
            {
                title: "Unified reports",
                description: "Consistent metrics throughout the hiring process"
            }
        ]
    },
    es: {
        ourOffer: "Nuestra Oferta",
        header: "Una plataforma completa para todo tu proceso",
        subheader: "Integramos todas las herramientas necesarias en una solución unificada, desde la búsqueda inicial hasta la contratación final.",
        offerings: [
            {
                title: "Base de Talento Verificada",
                description: "Acceda a perfiles validados con información completa sobre habilidades, experiencia y referencias.",
                benefits: ["Verificación de identidad", "Validación de experiencia", "Referencias comprobadas"]
            },
            {
                title: "Búsqueda Inteligente con IA",
                description: "Encuentre candidatos ideales utilizando algoritmos avanzados de búsqueda y matching predictivo.",
                benefits: ["Matching inteligente", "Búsqueda semántica", "Recomendaciones personalizadas"]
            },
            {
                title: "Evaluación Integral",
                description: "Analice perfiles con métricas detalladas y herramientas de evaluación objetiva.",
                benefits: ["Evaluación técnica", "Análisis de soft skills", "Calificaciones comparativas"]
            },
            {
                title: "Pruebas Técnicas Automatizadas",
                description: "Automatice la evaluación de habilidades específicas con tests diseñados por expertos.",
                benefits: ["Tests técnicos", "Ejercicios prácticos", "Evaluación en tiempo real"]
            },
            {
                title: "Gestión de Pipeline Visual",
                description: "Monitoree el progreso de cada candidato a través de una interfaz visual e intuitiva.",
                benefits: ["Vista Kanban", "Seguimiento de etapas", "Alertas de progreso"]
            },
            {
                title: "Integración con Herramientas",
                description: "Conecte nuestra plataforma con sus sistemas actuales para un flujo de trabajo unificado.",
                benefits: ["API disponible", "Webhooks", "Sincronización bidireccional"]
            },
            {
                title: "Gestión de Relaciones",
                description: "Mantenga y desarrolle relaciones con candidatos mediante herramientas de comunicación y seguimiento.",
                benefits: ["Base de datos de talento", "Seguimiento automatizado", "Comunicación centralizada"]
            },
            {
                title: "Analíticas de Mercado",
                description: "Obtenga insights sobre tendencias del mercado laboral y rangos salariales competitivos.",
                benefits: ["Benchmarking salarial", "Tendencias del mercado", "Análisis competitivo"]
            },
            {
                title: "Módulos Adicionales",
                description: "Amplíe la funcionalidad con módulos especializados según sus necesidades específicas.",
                benefits: ["Personalización", "Escalabilidad", "Actualizaciones constantes"]
            }
        ],
        platformHighlights: [
            {
                title: "Seguridad y Privacidad",
                description: "Implementamos los más altos estándares de seguridad para proteger sus datos y los de sus candidatos."
            },
            {
                title: "Colaboración en Equipo",
                description: "Trabaje de manera coordinada con su equipo mediante herramientas de colaboración integradas."
            },
            {
                title: "Configuración Flexible",
                description: "Adapte la plataforma a sus procesos específicos con opciones de personalización avanzadas."
            }
        ],
        integralApproachTitle: "Un enfoque integral para el reclutamiento",
        integralApproachDescription: "En lugar de múltiples herramientas desconectadas, ofrecemos una solución unificada que cubre todo el ciclo de contratación. Esto significa menos tiempo integrando sistemas y más tiempo enfocado en encontrar el talento adecuado.",
        unifiedApproachTitle: "Cómo funciona nuestro enfoque",
        unifiedApproachDescription: "Cada etapa está interconectada, permitiendo un flujo de trabajo continuo y eficiente.",
        whatMakesSpecialTitle: "Lo que hace especial a nuestra plataforma",
        whatMakesSpecialDescription: "Características diseñadas pensando en las necesidades reales de los equipos de reclutamiento moderno.",
        hoverIndicator: "Parte de nuestra solución integral",
        approachSteps: [
            "Búsqueda y descubrimiento",
            "Evaluación y selección",
            "Gestión del proceso",
            "Análisis y mejora"
        ],
        features: [
            {
                title: "Comunicación centralizada",
                description: "Todo en un solo lugar, sin cambiar entre aplicaciones"
            },
            {
                title: "Datos sincronizados",
                description: "Información actualizada automáticamente en todo el sistema"
            },
            {
                title: "Reportes unificados",
                description: "Métricas consistentes en todo el proceso de contratación"
            }
        ]
    },
    fr: {
        ourOffer: "Notre Offre",
        header: "Une plateforme complète pour l'ensemble de votre processus",
        subheader: "Nous intégrons tous les outils nécessaires dans une solution unifiée, de la recherche initiale à l'embauche finale.",
        offerings: [
            {
                title: "Base de Données de Talents Vérifiée",
                description: "Accédez à des profils validés avec des informations complètes sur les compétences, l'expérience et les références.",
                benefits: ["Vérification d'identité", "Validation d'expérience", "Références vérifiées"]
            },
            {
                title: "Recherche Intelligente par IA",
                description: "Trouvez des candidats idéaux en utilisant des algorithmes de recherche avancés et un matching prédictif.",
                benefits: ["Matching intelligent", "Recherche sémantique", "Recommandations personnalisées"]
            },
            {
                title: "Évaluation Complète",
                description: "Analysez les profils avec des métriques détaillées et des outils d'évaluation objective.",
                benefits: ["Évaluation technique", "Analyse des soft skills", "Évaluations comparatives"]
            },
            {
                title: "Tests Techniques Automatisés",
                description: "Automatisez l'évaluation des compétences spécifiques avec des tests conçus par des experts.",
                benefits: ["Tests techniques", "Exercices pratiques", "Évaluation en temps réel"]
            },
            {
                title: "Gestion Visuelle du Pipeline",
                description: "Surveillez la progression de chaque candidat à travers une interface visuelle et intuitive.",
                benefits: ["Vue Kanban", "Suivi des étapes", "Alertes de progression"]
            },
            {
                title: "Intégration d'Outils",
                description: "Connectez notre plateforme à vos systèmes actuels pour un flux de travail unifié.",
                benefits: ["API disponible", "Webhooks", "Synchronisation bidirectionnelle"]
            },
            {
                title: "Gestion des Relations",
                description: "Maintenez et développez les relations avec les candidats grâce à des outils de communication et de suivi.",
                benefits: ["Base de données de talents", "Suivi automatisé", "Communication centralisée"]
            },
            {
                title: "Analytiques de Marché",
                description: "Obtenez des insights sur les tendances du marché du travail et les fourchettes salariales compétitives.",
                benefits: ["Benchmark salarial", "Tendances du marché", "Analyse compétitive"]
            },
            {
                title: "Modules Supplémentaires",
                description: "Étendez les fonctionnalités avec des modules spécialisés selon vos besoins spécifiques.",
                benefits: ["Personnalisation", "Évolutivité", "Mises à jour constantes"]
            }
        ],
        platformHighlights: [
            {
                title: "Sécurité et Confidentialité",
                description: "Nous mettons en œuvre les normes de sécurité les plus élevées pour protéger vos données et celles de vos candidats."
            },
            {
                title: "Collaboration d'Équipe",
                description: "Travaillez de manière coordonnée avec votre équipe grâce à des outils de collaboration intégrés."
            },
            {
                title: "Configuration Flexible",
                description: "Adaptez la plateforme à vos processus spécifiques avec des options de personnalisation avancées."
            }
        ],
        integralApproachTitle: "Une approche intégrale du recrutement",
        integralApproachDescription: "Au lieu de plusieurs outils déconnectés, nous offrons une solution unifiée qui couvre tout le cycle d'embauche. Cela signifie moins de temps à intégrer des systèmes et plus de temps à se concentrer sur la recherche des bons talents.",
        unifiedApproachTitle: "Comment fonctionne notre approche",
        unifiedApproachDescription: "Chaque étape est interconnectée, permettant un flux de travail continu et efficace.",
        whatMakesSpecialTitle: "Ce qui rend notre plateforme spéciale",
        whatMakesSpecialDescription: "Des fonctionnalités conçues en pensant aux besoins réels des équipes de recrutement modernes.",
        hoverIndicator: "Partie de notre solution complète",
        approachSteps: [
            "Recherche et découverte",
            "Évaluation et sélection",
            "Gestion du processus",
            "Analyse et amélioration"
        ],
        features: [
            {
                title: "Communication centralisée",
                description: "Tout en un seul endroit, sans changer d'applications"
            },
            {
                title: "Données synchronisées",
                description: "Informations automatiquement mises à jour dans tout le système"
            },
            {
                title: "Rapports unifiés",
                description: "Métriques cohérentes tout au long du processus d'embauche"
            }
        ]
    },
    jp: {
        ourOffer: "私たちの提供",
        header: "プロセス全体に対応する包括的なプラットフォーム",
        subheader: "最初の検索から最終採用まで、必要なツールを統合ソリューションとして提供します。",
        offerings: [
            {
                title: "検証済み人材データベース",
                description: "スキル、経験、参照情報に関する完全な情報を備えた検証済みプロファイルにアクセスできます。",
                benefits: ["身元確認", "経験検証", "検証済み参照"]
            },
            {
                title: "AI搭載スマート検索",
                description: "高度な検索アルゴリズムと予測マッチングを使用して理想的な候補者を見つけます。",
                benefits: ["スマートマッチング", "意味検索", "パーソナライズドレコメンデーション"]
            },
            {
                title: "包括的評価",
                description: "詳細な指標と客観的評価ツールでプロファイルを分析します。",
                benefits: ["技術評価", "ソフトスキル分析", "比較評価"]
            },
            {
                title: "自動化技術テスト",
                description: "専門家設計のテストで特定のスキル評価を自動化します。",
                benefits: ["技術テスト", "実践演習", "リアルタイム評価"]
            },
            {
                title: "視覚的パイプラインマネジメント",
                description: "視覚的で直感的なインターフェースを通じて各候補者の進捗を監視します。",
                benefits: ["かんばんビュー", "ステージ追跡", "進捗アラート"]
            },
            {
                title: "ツール統合",
                description: "統一されたワークフローのために当社プラットフォームを現在のシステムと接続します。",
                benefits: ["利用可能なAPI", "Webhooks", "双方向同期"]
            },
            {
                title: "関係管理",
                description: "コミュニケーションと追跡ツールを通じて候補者との関係を維持・発展させます。",
                benefits: ["人材データベース", "自動フォローアップ", "一元化されたコミュニケーション"]
            },
            {
                title: "市場分析",
                description: "労働市場のトレンドと競争力のある給与範囲に関するインサイトを取得します。",
                benefits: ["給与ベンチマーク", "市場トレンド", "競合分析"]
            },
            {
                title: "追加モジュール",
                description: "特定のニーズに応じて専門モジュールで機能を拡張します。",
                benefits: ["カスタマイズ", "スケーラビリティ", "定期的な更新"]
            }
        ],
        platformHighlights: [
            {
                title: "セキュリティとプライバシー",
                description: "お客様と候補者のデータを保護するために最高レベルのセキュリティ基準を実装しています。"
            },
            {
                title: "チームコラボレーション",
                description: "統合されたコラボレーションツールを通じてチームと協調的に作業します。"
            },
            {
                title: "柔軟な構成",
                description: "高度なカスタマイズオプションでプラットフォームを特定のプロセスに適応させます。"
            }
        ],
        integralApproachTitle: "採用に対する統合的なアプローチ",
        integralApproachDescription: "断片的な複数のツールではなく、採用サイクル全体をカバーする統合ソリューションを提供します。システム統合に費やす時間を減らし、適切な人材を見つけることに集中する時間を増やすことを意味します。",
        unifiedApproachTitle: "当社のアプローチの仕組み",
        unifiedApproachDescription: "各段階が相互接続され、継続的で効率的なワークフローが可能になります。",
        whatMakesSpecialTitle: "当社プラットフォームの特別な点",
        whatMakesSpecialDescription: "現代の採用チームの実際のニーズを考慮して設計された機能。",
        hoverIndicator: "当社の包括的ソリューションの一部",
        approachSteps: [
            "検索と発見",
            "評価と選考",
            "プロセス管理",
            "分析と改善"
        ],
        features: [
            {
                title: "一元化されたコミュニケーション",
                description: "アプリケーションを切り替えることなく、すべてが一箇所に"
            },
            {
                title: "同期されたデータ",
                description: "システム全体で自動的に更新される情報"
            },
            {
                title: "統一されたレポート",
                description: "採用プロセス全体での一貫した指標"
            }
        ]
    },
    zh: {
        ourOffer: "我们的服务",
        header: "为您整个流程设计的全面平台",
        subheader: "我们将所有必要的工具集成到统一的解决方案中，从初始搜索到最终招聘。",
        offerings: [
            {
                title: "验证人才数据库",
                description: "访问经过验证的个人资料，获取有关技能、经验和参考的完整信息。",
                benefits: ["身份验证", "经验验证", "已验证参考"]
            },
            {
                title: "AI驱动的智能搜索",
                description: "使用高级搜索算法和预测匹配功能找到理想的候选人。",
                benefits: ["智能匹配", "语义搜索", "个性化推荐"]
            },
            {
                title: "全面评估",
                description: "使用详细的指标和客观的评估工具分析个人资料。",
                benefits: ["技术评估", "软技能分析", "比较评级"]
            },
            {
                title: "自动化技术测试",
                description: "通过专家设计的测试自动评估特定技能。",
                benefits: ["技术测试", "实践练习", "实时评估"]
            },
            {
                title: "可视化流程管理",
                description: "通过视觉直观的界面监控每位候选人的进展。",
                benefits: ["看板视图", "阶段跟踪", "进展提醒"]
            },
            {
                title: "工具集成",
                description: "将我们的平台与您当前的系统连接，实现统一的工作流程。",
                benefits: ["可用API", "Webhooks", "双向同步"]
            },
            {
                title: "关系管理",
                description: "通过沟通和跟踪工具与候选人维护和发展关系。",
                benefits: ["人才数据库", "自动化跟进", "集中沟通"]
            },
            {
                title: "市场分析",
                description: "获取有关劳动力市场趋势和有竞争力的薪资范围的洞察。",
                benefits: ["薪资基准测试", "市场趋势", "竞争分析"]
            },
            {
                title: "附加模块",
                description: "根据您的具体需求，通过专业模块扩展功能。",
                benefits: ["定制化", "可扩展性", "持续更新"]
            }
        ],
        platformHighlights: [
            {
                title: "安全与隐私",
                description: "我们实施最高安全标准，保护您和候选人的数据。"
            },
            {
                title: "团队协作",
                description: "通过集成的协作工具与您的团队协调工作。"
            },
            {
                title: "灵活配置",
                description: "通过高级定制选项使平台适应您的特定流程。"
            }
        ],
        integralApproachTitle: "招聘的整体方法",
        integralApproachDescription: "我们不是提供多个分散的工具，而是提供覆盖整个招聘周期的统一解决方案。这意味着减少系统集成时间，更多时间专注于寻找合适的人才。",
        unifiedApproachTitle: "我们的方法如何运作",
        unifiedApproachDescription: "每个阶段相互连接，实现持续高效的工作流程。",
        whatMakesSpecialTitle: "我们平台的特别之处",
        whatMakesSpecialDescription: "考虑现代招聘团队实际需求而设计的功能。",
        hoverIndicator: "我们全面解决方案的一部分",
        approachSteps: [
            "搜索与发现",
            "评估与选择",
            "流程管理",
            "分析与改进"
        ],
        features: [
            {
                title: "集中沟通",
                description: "一切尽在一处，无需切换应用程序"
            },
            {
                title: "同步数据",
                description: "整个系统自动更新的信息"
            },
            {
                title: "统一报告",
                description: "整个招聘过程中的一致指标"
            }
        ]
    }
};

interface OfferingsSectionProps {
    language?: Language;
}

const OfferingsSection = ({ language = 'en' }: OfferingsSectionProps) => {
    const t = translations[language] || translations['en'];
    
    const icons = [
        FaDatabase,
        FaRobot,
        FaClipboardCheck,
        FaLaptopCode,
        FaProjectDiagram,
        FaSyncAlt,
        FaNetworkWired,
        FaChartLine,
        FaPlusCircle
    ];

    const highlightIcons = [FaShieldAlt, FaUsers, FaCogs];
    const highlightColors = ["purple", "blue", "green"];
    const featureIcons = [FaComments, FaSyncAlt, FaChartLine];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                        <FaFileAlt className="h-5 w-5 text-purple-600" />
                        <span className="text-purple-700 font-medium">{t.ourOffer}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t.header.split(' ').map((word, index, array) => (
                            index === array.length - 2 ? (
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

                {/* Grid de ofertas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {t.offerings.map((offering, index) => {
                        const IconComponent = icons[index];
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-xl border border-gray-200 p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                            >
                                {/* Icono */}
                                <div className="mb-6">
                                    <IconComponent className={`h-12 w-12 text-purple-600`} />
                                </div>

                                {/* Contenido */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                                        {offering.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {offering.description}
                                    </p>

                                    {/* Lista de beneficios */}
                                    <div className="pt-4 border-t border-gray-100 space-y-3">
                                        {offering.benefits.map((benefit, benefitIndex) => (
                                            <div
                                                key={benefitIndex}
                                                className="flex items-center gap-3"
                                            >
                                                <FaCheck className="h-5 w-5 text-green-500" />
                                                <span className="text-gray-700 font-medium">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Indicador de hover */}
                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>{t.hoverIndicator}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Sección de destacados */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {t.whatMakesSpecialTitle}
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {t.whatMakesSpecialDescription}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {t.platformHighlights.map((highlight, index) => {
                            const IconComponent = highlightIcons[index];
                            const colorClass = highlightColors[index];
                            
                            return (
                                <div
                                    key={index}
                                    className="group text-center p-6 hover:bg-gray-50 rounded-xl transition-colors duration-300"
                                >
                                    <div className={`inline-flex p-4 rounded-xl ${colorClass === 'purple' ? 'bg-purple-50' : colorClass === 'blue' ? 'bg-blue-50' : 'bg-green-50'} mb-6`}>
                                        <IconComponent className={`h-8 w-8 ${colorClass === 'purple' ? 'text-purple-600' : colorClass === 'blue' ? 'text-blue-600' : 'text-green-600'}`} />
                                    </div>

                                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                                        {highlight.title}
                                    </h4>

                                    <p className="text-gray-600">
                                        {highlight.description}
                                    </p>

                                    <div className="mt-4">
                                        <div className={`w-8 h-1 ${colorClass === 'purple' ? 'bg-purple-500' : colorClass === 'blue' ? 'bg-blue-500' : 'bg-green-500'} rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Sección de enfoque integral */}
                <div className="bg-purple-50 rounded-2xl border border-purple-200 p-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {t.integralApproachTitle}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {t.integralApproachDescription}
                            </p>

                            <div className="space-y-4">
                                {t.features.map((feature, index) => {
                                    const FeatureIcon = featureIcons[index];
                                    return (
                                        <div key={index} className="flex items-start gap-3">
                                            <FeatureIcon className="h-5 w-5 text-purple-600 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                                <p className="text-gray-600 text-sm">{feature.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h4 className="text-lg font-bold text-gray-900 mb-4">
                                    {t.unifiedApproachTitle}
                                </h4>

                                <div className="space-y-4">
                                    {t.approachSteps.map((step, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                                                {index + 1}
                                            </div>
                                            <span className="font-medium text-gray-900">{step}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <p className="text-sm text-gray-600">
                                        {t.unifiedApproachDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferingsSection;
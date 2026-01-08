'use client';

import { defaultLanguage } from '@/utils';
import { useState } from 'react';
import {
    FaBrain,
    FaBolt,
    FaShieldAlt,
    FaClock,
    FaUsers,
    FaRocket,
    FaChevronDown,
} from 'react-icons/fa';

const translations = {
    en: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about our AI-powered talent matching platform",
        faqs: [
            {
                question: "How does your AI matching algorithm work?",
                answer:
                    "Our AI algorithm analyzes multiple data points including skills, experience, project requirements, availability, timezone compatibility, and past project success rates. It uses machine learning models trained on thousands of successful project matches to identify the perfect talent for your specific needs.",
                tip: "Pro tip: The more detailed your project requirements, the better our AI can match you with ideal candidates.",
                icon: FaBrain
            },
            {
                question: "How do you verify the skills of professionals on your platform?",
                answer:
                    "We use a multi-layered verification process including technical assessments, portfolio reviews, reference checks, and past project evaluations. All professionals undergo rigorous screening before they can receive project invitations.",
                tip: "All verified professionals receive a badge showing their expertise level and verification status.",
                icon: FaShieldAlt
            },
            {
                question: "What's the typical time to find the right talent for a project?",
                answer:
                    "Most projects are matched with suitable talent within 48 hours. For specialized roles or complex requirements, it may take up to 5 business days. Our AI continuously learns from your preferences to speed up future matches.",
                tip: "Urgent projects can be flagged for priority matching with our premium support team.",
                icon: FaClock
            },
            {
                question: "Can I manage the entire project through your platform?",
                answer:
                    "Yes, our platform provides end-to-end project management tools including milestone tracking, time tracking, communication tools, file sharing, and payment processing. Everything you need to successfully complete your project in one place.",
                tip: "We integrate with popular project management tools if you prefer to use your existing workflow.",
                icon: FaUsers
            },
            {
                question: "How do you handle different time zones for global projects?",
                answer:
                    "Our AI specifically optimizes for time zone compatibility and overlapping working hours. We show you availability windows and suggest optimal collaboration times. All professionals indicate their preferred working hours and flexibility.",
                tip: "Look for professionals with 'Flexible Hours' badges for better time zone alignment.",
                icon: FaBolt
            },
            {
                question: "What if the matched professional isn't the right fit?",
                answer:
                    "We offer a satisfaction guarantee. If within the first week the match isn't working, we'll find a replacement at no additional cost. Our success team will work with you to understand what went wrong and improve future matches.",
                tip: "Provide detailed feedback to help our AI learn and make better matches in the future.",
                icon: FaRocket
            },
        ],
        ctaTitle: "Still have questions?",
        ctaSubtitle: "Our AI specialists are ready to help you find the perfect talent for your project",
        ctaPrimary: "Talk to an Expert",
        ctaSecondary: "View Platform Demo",
        proTip: "Pro tip:",
    },
    es: {
        title: "Preguntas Frecuentes",
        subtitle: "Todo lo que necesitas saber sobre nuestra plataforma de matching de talento con IA",
        faqs: [
            {
                question: "¿Cómo funciona su algoritmo de matching con IA?",
                answer:
                    "Nuestro algoritmo de IA analiza múltiples puntos de datos incluyendo habilidades, experiencia, requisitos del proyecto, disponibilidad, compatibilidad de zona horaria y tasas de éxito de proyectos anteriores. Utiliza modelos de machine learning entrenados con miles de matches exitosos para identificar el talento perfecto para tus necesidades específicas.",
                tip: "Tip profesional: Cuanto más detallados sean tus requisitos de proyecto, mejor podrá nuestra IA matcharte con candidatos ideales.",
                icon: FaBrain
            },
            {
                question: "¿Cómo verifican las habilidades de los profesionales en su plataforma?",
                answer:
                    "Utilizamos un proceso de verificación de múltiples capas que incluye evaluaciones técnicas, revisiones de portafolio, verificaciones de referencias y evaluaciones de proyectos anteriores. Todos los profesionales pasan por un riguroso screening antes de poder recibir invitaciones a proyectos.",
                tip: "Todos los profesionales verificados reciben una insignia que muestra su nivel de expertise y estado de verificación.",
                icon: FaShieldAlt
            },
            {
                question: "¿Cuál es el tiempo típico para encontrar el talento adecuado para un proyecto?",
                answer:
                    "La mayoría de los proyectos son matchados con talento adecuado en 48 horas. Para roles especializados o requisitos complejos, puede tomar hasta 5 días hábiles. Nuestra IA aprende continuamente de tus preferencias para acelerar matches futuros.",
                tip: "Los proyectos urgentes pueden ser marcados para matching prioritario con nuestro equipo de soporte premium.",
                icon: FaClock
            },
            {
                question: "¿Puedo gestionar todo el proyecto a través de su plataforma?",
                answer:
                    "Sí, nuestra plataforma proporciona herramientas de gestión de proyectos integrales que incluyen seguimiento de hitos, control de tiempo, herramientas de comunicación, compartición de archivos y procesamiento de pagos. Todo lo que necesitas para completar exitosamente tu proyecto en un solo lugar.",
                tip: "Nos integramos con herramientas populares de gestión de proyectos si prefieres usar tu flujo de trabajo existente.",
                icon: FaUsers
            },
            {
                question: "¿Cómo manejan diferentes zonas horarias para proyectos globales?",
                answer:
                    "Nuestra IA específicamente optimiza para compatibilidad de zona horaria y horarios de trabajo superpuestos. Te mostramos ventanas de disponibilidad y sugerimos tiempos óptimos de colaboración. Todos los profesionales indican sus horarios preferidos y flexibilidad.",
                tip: "Busca profesionales con insignias de 'Horarios Flexibles' para mejor alineación de zona horaria.",
                icon: FaBolt
            },
            {
                question: "¿Qué pasa si el profesional matchado no es el adecuado?",
                answer:
                    "Ofrecemos una garantía de satisfacción. Si dentro de la primera semana el match no está funcionando, encontraremos un reemplazo sin costo adicional. Nuestro equipo de éxito trabajará contigo para entender qué salió mal y mejorar matches futuros.",
                tip: "Proporciona feedback detallado para ayudar a nuestra IA a aprender y hacer mejores matches en el futuro.",
                icon: FaRocket
            },
        ],
        ctaTitle: "¿Aún tienes preguntas?",
        ctaSubtitle: "Nuestros especialistas en IA están listos para ayudarte a encontrar el talento perfecto para tu proyecto",
        ctaPrimary: "Hablar con un Experto",
        ctaSecondary: "Ver Demo de la Plataforma",
        proTip: "Tip profesional:",
    },
    fr: {
        title: "Questions Fréquentes",
        subtitle: "Tout ce que vous devez savoir sur notre plateforme de matching de talent avec IA",
        faqs: [
            {
                question: "Comment fonctionne votre algorithme de matching IA ?",
                answer:
                    "Notre algorithme IA analyse de multiples points de données incluant compétences, expérience, exigences projet, disponibilité, compatibilité fuseau horaire et taux de réussite projets passés. Il utilise des modèles de machine learning entraînés sur des milliers de matches réussis pour identifier le talent parfait pour vos besoins spécifiques.",
                tip: "Conseil pro : Plus vos exigences projet sont détaillées, mieux notre IA peut vous matcher avec des candidats idéaux.",
                icon: FaBrain
            },
            {
                question: "Comment vérifiez-vous les compétences des professionnels sur votre plateforme ?",
                answer:
                    "Nous utilisons un processus de vérification multicouche incluant évaluations techniques, revues portfolio, vérifications références et évaluations projets passés. Tous les professionnels subissent un screening rigoureux avant de pouvoir recevoir des invitations projet.",
                tip: "Tous les professionnels vérifiés reçoivent un badge montrant leur niveau d'expertise et statut de vérification.",
                icon: FaShieldAlt
            },
            {
                question: "Quel est le délai typique pour trouver le talent adapté à un projet ?",
                answer:
                    "La plupart des projets sont matchés avec talent adapté sous 48 heures. Pour rôles spécialisés ou exigences complexes, cela peut prendre jusqu'à 5 jours ouvrables. Notre IA apprend continuellement de vos préférences pour accélérer les matches futurs.",
                tip: "Les projets urgents peuvent être signalés pour matching prioritaire avec notre équipe support premium.",
                icon: FaClock
            },
            {
                question: "Puis-je gérer l'ensemble du projet via votre plateforme ?",
                answer:
                    "Oui, notre plateforme fournit des outils de gestion de projet de bout en bout incluant suivi jalons, contrôle temps, outils communication, partage fichiers et traitement paiements. Tout ce dont vous avez besoin pour réussir votre projet au même endroit.",
                tip: "Nous intégrons les outils de gestion de projet populaires si vous préférez utiliser votre workflow existant.",
                icon: FaUsers
            },
            {
                question: "Comment gérez-vous les différents fuseaux horaires pour les projets globaux ?",
                answer:
                    "Notre IA optimise spécifiquement pour compatibilité fuseau horaire et chevauchement horaires travail. Nous vous montrons des fenêtres disponibilité et suggérons des temps collaboration optimaux. Tous les professionnels indiquent leurs horaires préférés et flexibilité.",
                tip: "Recherchez des professionnels avec badges 'Horaires Flexibles' pour meilleur alignement fuseau horaire.",
                icon: FaBolt
            },
            {
                question: "Que se passe-t-il si le professionnel matché ne convient pas ?",
                answer:
                    "Nous offrons une garantie satisfaction. Si durant la première semaine le match ne fonctionne pas, nous trouverons un remplacement sans coût additionnel. Notre équipe succès travaillera avec vous pour comprendre ce qui n'a pas marché et améliorer les matches futurs.",
                tip: "Fournissez des retours détaillés pour aider notre IA à apprendre et faire de meilleurs matches à l'avenir.",
                icon: FaRocket
            },
        ],
        ctaTitle: "Encore des questions ?",
        ctaSubtitle: "Nos spécialistes IA sont prêts à vous aider à trouver le talent parfait pour votre projet",
        ctaPrimary: "Parler à un Expert",
        ctaSecondary: "Voir Démo Plateforme",
        proTip: "Conseil pro :",
    },
    jp: {
        title: "よくある質問",
        subtitle: "AIを活用した人材マッチングプラットフォームについて知っておくべきすべて",
        faqs: [
            {
                question: "AIマッチングアルゴリズムはどのように機能しますか？",
                answer:
                    "当社のAIアルゴリズムは、スキル、経験、プロジェクト要件、可用性、タイムゾーン互換性、過去のプロジェクト成功率など、複数のデータポイントを分析します。何千もの成功したプロジェクトマッチで訓練された機械学習モデルを使用し、特定のニーズに完璧な人材を特定します。",
                tip: "プロのヒント：プロジェクト要件が詳細であるほど、AIは理想的な候補者とのマッチングがより正確になります。",
                icon: FaBrain
            },
            {
                question: "プラットフォーム上のプロフェッショナルのスキルをどのように検証しますか？",
                answer:
                    "技術的評価、ポートフォリオレビュー、参照チェック、過去のプロジェクト評価を含む多層的な検証プロセスを使用します。すべてのプロフェッショナルは、プロジェクト招待を受け取る前に厳格なスクリーニングを受けます。",
                tip: "すべての検証済みプロフェッショナルは、専門知識レベルと検証ステータスを示すバッジを受け取ります。",
                icon: FaShieldAlt
            },
            {
                question: "プロジェクトに適した人材を見つけるまでの典型的な時間はどれくらいですか？",
                answer:
                    "ほとんどのプロジェクトは48時間以内に適切な人材とマッチングされます。専門的な役職や複雑な要件の場合、最大5営業日かかる場合があります。当社のAIは、将来のマッチングを高速化するために、お客様の好みから継続的に学習します。",
                tip: "緊急のプロジェクトは、プレミアムサポートチームによる優先マッチングのフラグを立てることができます。",
                icon: FaClock
            },
            {
                question: "プラットフォームを通じてプロジェクト全体を管理できますか？",
                answer:
                    "はい、当社のプラットフォームは、マイルストーントラッキング、時間追跡、コミュニケーションツール、ファイル共有、支払い処理を含むエンドツーエンドのプロジェクト管理ツールを提供します。プロジェクトを成功裏に完了するために必要なすべてが1か所に揃っています。",
                tip: "既存のワークフローを使用したい場合は、人気のあるプロジェクト管理ツールと統合します。",
                icon: FaUsers
            },
            {
                question: "グローバルプロジェクトの異なるタイムゾーンをどのように処理しますか？",
                answer:
                    "当社のAIは、タイムゾーンの互換性と重複する作業時間 specifically 最適化します。利用可能な時間帯を表示し、最適なコラボレーション時間を提案します。すべてのプロフェッショナルは、希望する勤務時間と柔軟性を示します。",
                tip: "タイムゾーンの調整を改善するには、「柔軟な時間」のバッジを持つプロフェッショナルを探してください。",
                icon: FaBolt
            },
            {
                question: "マッチングされたプロフェッショナルが適切でない場合はどうなりますか？",
                answer:
                    "満足保証を提供しています。最初の1週間以内にマッチングが機能しない場合、追加費用なしで代替えを見つけます。サクセスチームが、問題を理解し将来のマッチングを改善するために協力します。",
                tip: "AIが学習し将来より良いマッチングを行うために、詳細なフィードバックを提供してください。",
                icon: FaRocket
            },
        ],
        ctaTitle: "まだ質問がありますか？",
        ctaSubtitle: "当社のAIスペシャリストが、プロジェクトに最適な人材を見つけるお手伝いをします",
        ctaPrimary: "エキスパートと話す",
        ctaSecondary: "プラットフォームデモを見る",
        proTip: "プロのヒント：",
    },
    zh: {
        title: "常见问题",
        subtitle: "关于我们AI驱动人才匹配平台您需要了解的一切",
        faqs: [
            {
                question: "您的AI匹配算法如何工作？",
                answer:
                    "我们的AI算法分析多个数据点，包括技能、经验、项目需求、可用性、时区兼容性和过去项目成功率。它使用基于数千个成功项目匹配训练的机器学习模型，为您的特定需求找到完美人才。",
                tip: "专业提示：您的项目需求越详细，我们的AI越能为您匹配理想的候选人。",
                icon: FaBrain
            },
            {
                question: "如何验证平台上专业人士的技能？",
                answer:
                    "我们使用多层验证流程，包括技术评估、作品集审查、参考检查和过去项目评估。所有专业人士在接收项目邀请前都经过严格筛选。",
                tip: "所有经过验证的专业人士都会获得显示其专业水平和验证状态的徽章。",
                icon: FaShieldAlt
            },
            {
                question: "为项目找到合适人才的典型时间是多久？",
                answer:
                    "大多数项目在48小时内与合适人才匹配。对于专业角色或复杂需求，可能需要最多5个工作日。我们的AI不断从您的偏好中学习，以加速未来的匹配。",
                tip: "紧急项目可以标记为优先匹配，由我们的高级支持团队处理。",
                icon: FaClock
            },
            {
                question: "我可以通过您的平台管理整个项目吗？",
                answer:
                    "是的，我们的平台提供端到端的项目管理工具，包括里程碑跟踪、时间跟踪、沟通工具、文件共享和支付处理。成功完成项目所需的一切都在一个地方。",
                tip: "如果您更喜欢使用现有工作流程，我们与流行的项目管理工具集成。",
                icon: FaUsers
            },
            {
                question: "如何处理全球项目的不同时区？",
                answer:
                    "我们的AI专门优化时区兼容性和重叠工作时间。我们显示可用时间窗口并建议最佳协作时间。所有专业人士都标明其首选工作时间和灵活性。",
                tip: "寻找带有「灵活时间」徽章的专业人士以获得更好的时区对齐。",
                icon: FaBolt
            },
            {
                question: "如果匹配的专业人士不合适怎么办？",
                answer:
                    "我们提供满意度保证。如果在第一周内匹配不成功，我们将免费寻找替代人选。我们的成功团队将与您合作了解问题所在并改进未来的匹配。",
                tip: "提供详细反馈以帮助我们的AI学习并在未来进行更好的匹配。",
                icon: FaRocket
            },
        ],
        ctaTitle: "还有问题吗？",
        ctaSubtitle: "我们的AI专家随时准备帮助您为项目找到完美人才",
        ctaPrimary: "与专家交流",
        ctaSecondary: "查看平台演示",
        proTip: "专业提示：",
    },
};

interface FrequentAskedQuestionsProps {
    readonly language?: keyof typeof translations;
}

export function FrequentAskedQuestions({
    language = defaultLanguage
}: FrequentAskedQuestionsProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const t = translations[language] || translations[defaultLanguage];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="frequent-asked-questions" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
                        {t.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animation-delay-100">
                        {t.subtitle}
                    </p>
                </div>

                {/* FAQ Items */}
                <div className=" mx-auto">
                    {t.faqs.map((faq, index) => {
                        const IconComponent = faq.icon;
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`mb-4 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-stagger-fade-up`}
                                style={{ animationDelay: `${100 + (index * 100)}ms` }}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-200 transition-colors duration-300">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 text-left">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                                        <FaChevronDown className="w-5 h-5 text-gray-500" />
                                    </div>
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-6 pb-6">
                                        <div className="pt-4 border-t border-gray-100">
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {faq.answer}
                                            </p>
                                            {faq.tip && (
                                                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100 animate-fade-in animation-delay-200">
                                                    <p className="text-sm text-blue-700">
                                                        <strong>{t.proTip}</strong> {faq.tip}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
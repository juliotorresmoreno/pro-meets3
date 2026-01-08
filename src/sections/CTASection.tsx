import Link from 'next/link';
import { defaultLanguage, Language } from '@/utils';

const translations = {
    en: {
        title: "Start using ProMeets today",
        subtitle: "Join the companies that optimize their recruitment process",
        buttonText: "Create Account",
        footnote: "No credit card required • Cancel anytime"
    },
    es: {
        title: "Comienza a usar ProMeets hoy",
        subtitle: "Únete a las empresas que optimizan su proceso de reclutamiento",
        buttonText: "Crear Cuenta",
        footnote: "Sin tarjeta de crédito • Cancelación en cualquier momento"
    },
    fr: {
        title: "Commencez à utiliser ProMeets aujourd'hui",
        subtitle: "Rejoignez les entreprises qui optimisent leur processus de recrutement",
        buttonText: "Créer un Compte",
        footnote: "Pas de carte de crédit requise • Annulez à tout moment"
    },
    jp: {
        title: "今日からProMeetsを使い始める",
        subtitle: "採用プロセスを最適化する企業に参加する",
        buttonText: "アカウント作成",
        footnote: "クレジットカード不要 • いつでもキャンセル可能"
    },
    zh: {
        title: "立即开始使用ProMeets",
        subtitle: "加入优化招聘流程的公司行列",
        buttonText: "创建账户",
        footnote: "无需信用卡 • 随时取消"
    }
};

interface CTASectionProps {
    language?: Language;
}

const CTASection = ({ language = defaultLanguage }: CTASectionProps) => {
    const t = translations[language] || translations[defaultLanguage];
    
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-700">
            <div className="container mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    {t.title}
                </h2>
                
                <p className="text-lg text-purple-100 mb-8">
                    {t.subtitle}
                </p>
                
                <Link 
                    href="/signup" 
                    className="inline-block bg-white text-purple-700 px-10 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-md hover:shadow-lg active:scale-95"
                >
                    {t.buttonText}
                </Link>
                
                <p className="mt-4 text-purple-200 text-sm">
                    {t.footnote}
                </p>
            </div>
        </section>
    );
};

export default CTASection;
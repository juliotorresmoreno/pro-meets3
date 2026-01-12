// app/resend-verification/[email]/simple/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getLanguage } from '@/utils/language';

const translations = {
  en: {
    title: "Email Already Verified",
    message: "Your email address has already been verified successfully.",
    additionalText: "You can now access all features of ProMeets with your verified account.",
    cta: "Go to Dashboard",
    backToHome: "Back to Home",
    needHelp: "Need help?",
    contactSupport: "Contact Support",
  },
  es: {
    title: "Email Ya Verificado",
    message: "Tu dirección de correo ya ha sido verificada exitosamente.",
    additionalText: "Ahora puedes acceder a todas las funciones de ProMeets con tu cuenta verificada.",
    cta: "Ir al Panel",
    backToHome: "Volver al Inicio",
    needHelp: "¿Necesitas ayuda?",
    contactSupport: "Contactar Soporte",
  },
  fr: {
    title: "Email Déjà Vérifié",
    message: "Votre adresse email a déjà été vérifiée avec succès.",
    additionalText: "Vous pouvez maintenant accéder à toutes les fonctionnalités de ProMeets avec votre compte vérifié.",
    cta: "Aller au Tableau de Bord",
    backToHome: "Retour à l'Accueil",
    needHelp: "Besoin d'aide?",
    contactSupport: "Contacter le Support",
  },
  jp: {
    title: "メールは既に確認済み",
    message: "メールアドレスは既に正常に確認されています。",
    additionalText: "確認済みアカウントでProMeetsの全機能にアクセスできます。",
    cta: "ダッシュボードへ",
    backToHome: "ホームに戻る",
    needHelp: "お困りですか？",
    contactSupport: "サポートに連絡",
  },
  zh: {
    title: "邮箱已验证",
    message: "您的电子邮件地址已经成功验证。",
    additionalText: "您现在可以使用已验证的账户访问ProMeets的所有功能。",
    cta: "前往仪表板",
    backToHome: "返回首页",
    needHelp: "需要帮助吗？",
    contactSupport: "联系支持",
  },
};

export default function SimpleResendVerificationPage() {
  const params = useParams();
  const [language, setLanguage] = useState<'en' | 'es' | 'fr' | 'jp' | 'zh'>('en');
  const [isLoadingLanguage, setIsLoadingLanguage] = useState(true);
  
  const email = params.email as string;
  const decodedEmail = decodeURIComponent(email);
  
  const t = translations[language];

  useEffect(() => {
    async function loadLanguage() {
      try {
        const lang = await getLanguage();
        setLanguage(lang);
      } catch (error) {
        console.error('Error loading language:', error);
        setLanguage('en');
      } finally {
        setIsLoadingLanguage(false);
      }
    }
    
    loadLanguage();
  }, []);

  if (isLoadingLanguage) {
    return (
      <div className="min-h-screen bg-linear-to-b from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-emerald-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6 text-center">
        {/* Icono de verificación */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-emerald-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        
        {/* Título y mensaje */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
          <p className="text-gray-600">{t.message}</p>
          <p className="text-gray-600 font-medium">{t.additionalText}</p>
        </div>
        
        {/* Información del email */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Email verificado:</p>
          <p className="font-medium text-gray-800 break-all">{decodedEmail}</p>
        </div>
        
        {/* Ilustración decorativa */}
        <div className="py-4">
          <svg 
            className="w-32 h-32 mx-auto text-emerald-400" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        {/* Botón de acción */}
        <Link
          href="/dashboard"
          className="inline-block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
        >
          {t.cta}
        </Link>

        {/* Enlace de soporte */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            {t.needHelp}{' '}
            <a href="mailto:support@pro-meets.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
              {t.contactSupport}
            </a>
          </p>
          <p className="mt-2">
            <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-medium">
              {t.backToHome}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
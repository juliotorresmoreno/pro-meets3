// app/resend-verification-email/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getLanguage } from '@/utils/language';
import Link from 'next/link';

const translations = {
  en: {
    title: "Resend verification email",
    description: "Enter your email to resend the verification link",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    submitButton: "Resend email",
    processing: "Processing...",
    invalidEmail: "Please enter a valid email address",
    noEmailReceived: "Didn't receive the email?",
    contactSupport: "Contact support",
    backToLogin: "Back to login",
  },
  es: {
    title: "Reenviar correo de verificación",
    description: "Ingresa tu email para reenviar el enlace de verificación",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    submitButton: "Reenviar correo",
    processing: "Procesando...",
    invalidEmail: "Por favor ingresa un email válido",
    noEmailReceived: "¿No recibiste el correo?",
    contactSupport: "Contactar soporte",
    backToLogin: "Volver al login",
  },
  fr: {
    title: "Renvoyer l'email de vérification",
    description: "Entrez votre email pour renvoyer le lien de vérification",
    emailLabel: "Email",
    emailPlaceholder: "votre@email.com",
    submitButton: "Renvoyer l'email",
    processing: "Traitement en cours...",
    invalidEmail: "Veuillez entrer une adresse email valide",
    noEmailReceived: "Vous n'avez pas reçu l'email?",
    contactSupport: "Contacter le support",
    backToLogin: "Retour à la connexion",
  },
  jp: {
    title: "確認メールを再送信",
    description: "確認リンクを再送信するにはメールアドレスを入力してください",
    emailLabel: "メールアドレス",
    emailPlaceholder: "your@email.com",
    submitButton: "メールを再送信",
    processing: "処理中...",
    invalidEmail: "有効なメールアドレスを入力してください",
    noEmailReceived: "メールが届かない場合",
    contactSupport: "サポートに連絡",
    backToLogin: "ログインに戻る",
  },
  zh: {
    title: "重新发送验证邮件",
    description: "输入您的电子邮件以重新发送验证链接",
    emailLabel: "电子邮件",
    emailPlaceholder: "your@email.com",
    submitButton: "重新发送邮件",
    processing: "处理中...",
    invalidEmail: "请输入有效的电子邮件地址",
    noEmailReceived: "没有收到邮件？",
    contactSupport: "联系支持",
    backToLogin: "返回登录",
  },
};

export default function ResendVerificationEmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es' | 'fr' | 'jp' | 'zh'>('en');
  const [isLoadingLanguage, setIsLoadingLanguage] = useState(true);

  const t = translations[language];

  // Cargar idioma asíncronamente
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validación del cliente
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t.invalidEmail);
      return;
    }

    setIsSubmitting(true);
    // Navegar a la página con el email en la URL
    router.push(`/resend-verification/${encodeURIComponent(email)}`);
  };

  // Estado de carga del idioma
  if (isLoadingLanguage) {
    return (
      <div className="min-h-screen bg-linear-to-b from-purple-50 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Encabezado */}
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
          <p className="text-gray-600 mt-2">{t.description}</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              placeholder={t.emailPlaceholder}
              required
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-2 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {t.processing}
              </>
            ) : (
              t.submitButton
            )}
          </button>
        </form>

        {/* Enlaces */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p>
            {t.noEmailReceived}{" "}
            <Link
              href="/support"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              {t.contactSupport}
            </Link>
          </p>
          <p>
            <Link
              href="/login"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              {t.backToLogin}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
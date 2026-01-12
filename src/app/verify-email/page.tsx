// app/verify-email/page.tsx
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getLanguage } from "@/utils/language";
import Link from "next/link";
import { verifyEmail } from "@/services";

const translations = {
  en: {
    title: "Email Verified!",
    message: "Your email address has been successfully verified.",
    additionalText: "You can now access all features of ProMeets.",
    cta: "Go to Dashboard",
    errorTitle: "Verification Failed",
    errorMessage: "We couldn't verify your email address.",
    errorReason: "The verification link may be invalid or expired.",
    errorCta: "Request New Verification",
    supportText: "Need help? Contact our support team",
    loading: "Verifying your email...",
  },
  es: {
    title: "¡Email Verificado!",
    message: "Tu dirección de correo ha sido verificada exitosamente.",
    additionalText: "Ahora puedes acceder a todas las funciones de ProMeets.",
    cta: "Ir al Panel",
    errorTitle: "Verificación Fallida",
    errorMessage: "No pudimos verificar tu dirección de correo electrónico.",
    errorReason: "El enlace de verificación puede ser inválido o haber expirado.",
    errorCta: "Solicitar Nueva Verificación",
    supportText: "¿Necesitas ayuda? Contacta a nuestro equipo de soporte",
    loading: "Verificando tu email...",
  },
  fr: {
    title: "Email Vérifié !",
    message: "Votre adresse email a été vérifiée avec succès.",
    additionalText: "Vous pouvez maintenant accéder à toutes les fonctionnalités de ProMeets.",
    cta: "Aller au Tableau de Bord",
    errorTitle: "Échec de la Vérification",
    errorMessage: "Nous n'avons pas pu vérifier votre adresse email.",
    errorReason: "Le lien de vérification est peut-être invalide ou expiré.",
    errorCta: "Demander une Nouvelle Vérification",
    supportText: "Besoin d'aide? Contactez notre équipe de support",
    loading: "Vérification de votre email...",
  },
  jp: {
    title: "メール認証完了！",
    message: "メールアドレスの確認が完了しました。",
    additionalText: "ProMeetsの全機能をご利用いただけます。",
    cta: "ダッシュボードへ",
    errorTitle: "認証失敗",
    errorMessage: "メールアドレスの確認ができませんでした。",
    errorReason: "確認リンクが無効か、期限切れの可能性があります。",
    errorCta: "新しい確認メールをリクエスト",
    supportText: "お困りですか？サポートチームまでお問い合わせください",
    loading: "メールを確認しています...",
  },
  zh: {
    title: "邮箱已验证！",
    message: "您的电子邮件地址已成功验证。",
    additionalText: "您现在可以访问ProMeets的所有功能。",
    cta: "前往仪表板",
    errorTitle: "验证失败",
    errorMessage: "我们无法验证您的电子邮件地址。",
    errorReason: "验证链接可能无效或已过期。",
    errorCta: "请求新的验证",
    supportText: "需要帮助？联系我们的支持团队",
    loading: "正在验证您的邮箱...",
  },
};

interface VerificationResult {
  success: boolean;
  language: string;
}

async function verifyToken(token: string): Promise<VerificationResult> {
  try {
    const language = await getLanguage();
    const isValid = await verifyEmail(token).then(() => true).catch(() => false);
    return { success: !!isValid, language };
  } catch (error) {
    console.error("Email verification error:", error);
    const language = await getLanguage();
    return { success: false, language };
  }
}

function VerificationLoader() {
  const t = translations.en; // Default language for loader
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6 text-center">
        {/* Animated loader */}
        <div className="mx-auto flex items-center justify-center h-20 w-20">
          <div className="relative">
            <div className="h-20 w-20 rounded-full border-4 border-blue-200"></div>
            <div className="absolute top-0 left-0 h-20 w-20 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-blue-600"
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
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-gray-800">{t.loading}</h1>
          <p className="text-gray-600">Please wait while we verify your email address...</p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full animate-pulse w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

export default async function EmailVerifiedPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>
}) {
  const { token } = await searchParams;

  if (!token) {
    redirect('/login');
  }

  return (
    <Suspense fallback={<VerificationLoader />}>
      <VerificationContent token={token} />
    </Suspense>
  );
}

async function VerificationContent({ token }: { token: string }) {
  const { success, language } = await verifyToken(token);
  const t = translations[language as keyof typeof translations] || translations.en;

  if (!success) {
    return (
      <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-orange-50 flex flex-col items-center justify-center p-4 md:p-6">
        <div className="max-w-lg w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 space-y-8 text-center border border-red-100">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

          {/* Error icon with animation */}
          <div className="relative mx-auto">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-20"></div>
            <div className="relative flex items-center justify-center h-24 w-24 rounded-full bg-linear-to-br from-red-100 to-red-50 border-4 border-red-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Error title and message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold bg-linear-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              {t.errorTitle}
            </h1>
            <p className="text-lg text-gray-700">{t.errorMessage}</p>
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-lg border border-red-200">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-red-700 font-medium">{t.errorReason}</span>
            </div>
          </div>

          {/* Animated illustration */}
          <div className="relative h-48">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Broken chain animation */}
                <svg className="w-48 h-48 text-red-300" viewBox="0 0 100 100">
                  <path
                    d="M30,40 L50,20 L70,40"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <circle cx="50" cy="50" r="8" fill="#fca5a5" className="animate-bounce">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 0 -3; 0 0"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-4">
            <Link
              href="/resend-verification"
              className="block w-full bg-linear-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl active:scale-95"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.errorCta}
              </div>
            </Link>
            
            <Link
              href="/login"
              className="block w-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-300"
            >
              {t.cta}
            </Link>
          </div>

          {/* Support section */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{t.supportText}</span>
            </div>
            <a
              href="mailto:support@promeets.com"
              className="text-red-600 hover:text-red-700 font-semibold hover:underline"
            >
              support@promeets.com
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Success screen
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-blue-50 flex flex-col items-center justify-center p-4 md:p-6">
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-green-100">
        {/* Success header with gradient */}
        <div className="bg-linear-to-r from-green-600 to-emerald-600 p-8 md:p-12 text-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10">
            {/* Animated checkmark */}
            <div className="relative mx-auto w-32 h-32 mb-8">
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
              <div className="relative flex items-center justify-center w-full h-full rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/30">
                <svg
                  className="w-20 h-20 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t.message}
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="p-8 md:p-12">
          <div className="space-y-8">
            {/* Success message */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-3 bg-linear-to-r from-green-50 to-emerald-50 px-6 py-4 rounded-2xl border border-green-200">
                <div className="w-12 h-12 bg-linear-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-800">{t.additionalText}</p>
                  <p className="text-sm text-gray-600">Your account is now fully activated</p>
                </div>
              </div>
            </div>

            {/* Celebration animation */}
            <div className="relative h-48">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Confetti animation container */}
                    <div className="relative w-64 h-64">
                      {/* Confetti elements */}
                      {[...Array(20)].map((_, i) => {
                        const positions = Array.from({ length: 20 }, () => ({
                          top: Math.random() * 100,
                          left: Math.random() * 100,
                        }));
                        return (
                          <div
                            key={i}
                            className={`absolute w-3 h-3 rounded-full ${
                              ['bg-yellow-400', 'bg-red-400', 'bg-blue-400', 'bg-purple-400', 'bg-pink-400'][i % 5]
                            }`}
                            style={{
                              top: `${positions[i].top}%`,
                              left: `${positions[i].left}%`,
                              animation: `confetti 1s ease-out ${i * 0.05}s forwards`,
                            }}
                          />
                        );
                      })}
                  
                  {/* Central icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-linear-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center border-4 border-green-200 shadow-lg">
                      <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
                <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
                <div className="text-sm font-medium text-green-800">Account Verified</div>
              </div>
              <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
                <div className="text-3xl font-bold text-blue-700 mb-2">24/7</div>
                <div className="text-sm font-medium text-blue-800">Support Available</div>
              </div>
              <div className="bg-linear-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 text-center border border-emerald-200">
                <div className="text-3xl font-bold text-emerald-700 mb-2">∞</div>
                <div className="text-sm font-medium text-emerald-800">Unlimited Access</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-3 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl active:scale-95"
              >
                <span>{t.cta}</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Additional info */}
            <div className="text-center space-y-4">
              <p className="text-gray-600">
                Need help getting started? Check out our{' '}
                <Link href="/getting-started" className="text-green-600 hover:text-green-700 font-semibold">
                  Getting Started Guide
                </Link>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Verification completed in under 5 seconds</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure SSL/TLS encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-linear-to-r from-gray-50 to-gray-100 border-t border-gray-200 p-6 text-center">
          <p className="text-gray-500 text-sm">
            ProMeets © {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
      </div>

    </div>
  );
}
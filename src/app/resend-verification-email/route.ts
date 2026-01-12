// app/api/resend-verification-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getLanguage } from '@/utils/language';
import { resendVerification } from '@/services';

const translations = {
  en: {
    invalidEmail: "Please enter a valid email address",
    emailSent: "Verification email sent successfully",
  },
  es: {
    invalidEmail: "Por favor ingresa un email válido",
    emailSent: "Correo de verificación enviado exitosamente",
  },
  fr: {
    invalidEmail: "Veuillez entrer une adresse email valide",
    emailSent: "Email de vérification envoyé avec succès",
  },
  jp: {
    invalidEmail: "有効なメールアドレスを入力してください",
    emailSent: "確認メールが正常に送信されました",
  },
  zh: {
    invalidEmail: "请输入有效的电子邮件地址",
    emailSent: "验证邮件发送成功",
  },
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get("email") as string;

    // Obtener idioma
    const language = await getLanguage();
    const t = translations[language] || translations.en;

    // Validación básica del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: t.invalidEmail },
        { status: 400 }
      );
    }

    // Aquí iría la lógica para enviar el email de verificación
    // Por ejemplo, usando Resend, SendGrid, etc.
    await resendVerification(email);
    
    // Simulación de envío exitoso
    return NextResponse.json(
      { 
        success: true, 
        message: t.emailSent,
        redirectTo: `/resend-verification/${encodeURIComponent(email)}`
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in resend verification email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
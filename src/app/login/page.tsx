import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import { defaultLanguage, isLanguage, Language } from "@/utils";
import { cookies } from "next/headers";

export default async function Login() {
    const cookieStore = await cookies();
    const languageCookie = cookieStore.get('language')?.value ?? "";
    const language = isLanguage(languageCookie) ? languageCookie as Language : defaultLanguage;

    return (
        <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
            {/* Navbar */}
            <Header language={language} />

            <LoginForm language={language} />

            <Footer language={language} />
        </div>
    );
}
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { defaultLanguage, isLanguage, Language } from "@/utils";
import { cookies } from "next/headers";

export default async function signup() {
    const cookieStore = await cookies();
    const languageCookie = cookieStore.get('language')?.value ?? "";
    const language = isLanguage(languageCookie) ? languageCookie as Language : defaultLanguage;

    return (
        <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
            {/* Navbar */}
            <Header language={language} />

            <section className="relative overflow-hidden bg-purple-50 min-h-[90vh] flex items-center lg:pt-0">
                adassd
            </section>

            <Footer language={language} />
        </div>
    );
}
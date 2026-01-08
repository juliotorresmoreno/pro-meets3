
// app/page.js
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CTASection from '@/sections/CTASection';
import FeaturesSection from '@/sections/FeaturesSection';
import { FrequentAskedQuestions } from '@/sections/FrequentAskedQuestions';
import HeroSection from '@/sections/HeroSection';
import OfferingsSection from '@/sections/OfferingsSection';
import { defaultLanguage, isLanguage, Language } from '@/utils';
import { cookies } from "next/headers"

export default async function Home() {
    const cookieStore = await cookies();
    const languageCookie = cookieStore.get('language')?.value ?? "";
    const language = isLanguage(languageCookie) ? languageCookie as Language : defaultLanguage;

    return (
        <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
            {/* Navbar */}
            <Header language={language} />

            {/* Hero Section */}
            <HeroSection language={language} />
            <FeaturesSection language={language} />
            <OfferingsSection language={language} />
            <FrequentAskedQuestions language={language} />
            <CTASection />

            <Footer language={language} />
        </div>
    );
}
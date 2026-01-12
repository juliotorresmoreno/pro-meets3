"use server";

// app/page.js
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CTASection from '@/sections/CTASection';
import FeaturesSection from '@/sections/FeaturesSection';
import { FrequentAskedQuestions } from '@/sections/FrequentAskedQuestions';
import HeroSection from '@/sections/HeroSection';
import OfferingsSection from '@/sections/OfferingsSection';
import { getLanguage } from '@/utils';

export default async function Home() {
    const language = await getLanguage();

    return (
        <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
            {/* Navbar */}
            <Header language={language} />

            {/* Hero Section */}
            <HeroSection language={language} />
            <FeaturesSection language={language} />
            <OfferingsSection language={language} />
            <FrequentAskedQuestions language={language} />
            <CTASection language={language} />

            <Footer language={language} />
        </div>
    );
}
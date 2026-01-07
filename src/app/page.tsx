"use client";

// app/page.js
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CTASection from '@/sections/CTASection';
import FeaturesSection from '@/sections/FeaturesSection';
import { FrequentAskedQuestions } from '@/sections/FrequentAskedQuestions';
import HeroSection from '@/sections/HeroSection';
import OfferingsSection from '@/sections/OfferingsSection';
import useLanguageStore from '@/store/language';

export default function Home() {
    const language = useLanguageStore((state) => state.language);
    return (
        <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
            {/* Navbar */}
            <Header />

            {/* Hero Section */}
            <HeroSection />
            <FeaturesSection />
            <OfferingsSection />
            <FrequentAskedQuestions />
            <CTASection />

            <Footer language={language} />
        </div>
    );
}
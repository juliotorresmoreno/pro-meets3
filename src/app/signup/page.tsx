import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RegistrationForm from "@/components/RegistrationForm";
import { getLanguage } from "@/utils";
import { getGeoLocation } from "@/utils/ifconfig";

export default async function SignUp() {
    const language = await getLanguage();
    const geo = await getGeoLocation();

    return (
        <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
            {/* Navbar */}
            <Header language={language} />

            <RegistrationForm language={language} geo={geo} />

            <Footer language={language} />
        </div>
    );
}
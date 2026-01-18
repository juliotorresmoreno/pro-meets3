import BasicInfo from "./BasicInfo";
import Education from "./Education";
import Interests from "./Interests";
import ProfileSidebar, { ProfileMenuItem } from "./ProfileSidebar";
import Projects from "./Projects";
import SkillsPreferences from "./SkillsPreferences";
import WorkExperience from "./WorkExperience";

interface DashboardPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const sections: { [key in ProfileMenuItem]?: React.ComponentType } = {
    'basic-info': BasicInfo,
    'skills-preferences': SkillsPreferences,
    'experience': WorkExperience,
    'education': Education,
    'projects': Projects,
    'interests': Interests
}

export default async function DashboardPage(props: DashboardPageProps) {
    const searchParams = await props.searchParams;
    const section = (searchParams['section'] as ProfileMenuItem) ?? 'basic-info';
    const SectionComponent = sections[section] || BasicInfo;
    return (
        <div className="flex">
            <ProfileSidebar selectedMenuItem={section} />

            {/* Main Content */}
            <main className="flex-1 p-6">
                <SectionComponent />
            </main>
        </div>
    );
}
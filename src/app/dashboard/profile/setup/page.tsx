import ProfileSidebar, { ProfileMenuItem } from "./ProfileSidebar";

interface DashboardPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function DashboardPage(props: DashboardPageProps) {
    const searchParams = await props.searchParams;
    const section = (searchParams['section'] as ProfileMenuItem) ?? 'basic-info';
    return (
        <div className="flex">
            <ProfileSidebar selectedMenuItem={section} />

            {/* Main Content */}
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold text-gray-900">Profile Setup</h1>
            </main>
        </div>
    );
}
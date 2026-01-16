"use server";

import Sidebar from "@/components/candidate/Sidebar";
import { ProfileStatus } from "@/models/Profile";
import { getProfile } from "@/services/profile";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const profile = await getProfile("me");
    if (profile.status !== ProfileStatus.COMPLETE) {
        redirect("/dashboard/profile/setup");
    }

    return (
        <div className="flex">
            <Sidebar selectedMenuItem="dashboard" />

            {/* Main Content */}
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Dashboard Overview
                </h1>
            </main>
        </div>
    );
}

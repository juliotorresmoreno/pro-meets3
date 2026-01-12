"use server";

import { protect } from "@/utils/guard";

export default async function DashboardPage() {
    await protect();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-green-50 to-white">
            <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
            <p className="text-lg max-w-2xl text-center">
                Welcome to your dashboard! Here you can manage your account, view analytics, and access all the features ProMeets has to offer.
            </p>
        </div>
    );
}

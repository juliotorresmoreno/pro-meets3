import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getLanguage } from "@/utils";
import { protect } from "@/utils/guard";
import { session } from "@/services";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ProMeets - Meet your perfect hire",
    description: "Revolutionize your hiring process with ProMeets, the AI-powered platform that connects you with top talent effortlessly.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    await protect();
    const language = await getLanguage();
    const user = await session();

    const DashboardLayout = (await import(`@/components/${user.userType}/DashboardLayout`)).default;

    return (
        <html lang={language}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <DashboardLayout>
                    {children}
                </DashboardLayout>
            </body>
        </html>
    );
}

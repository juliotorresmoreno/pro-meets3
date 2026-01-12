
type Config = {
  baseUrl: string;
  apiUrl: string;
  linkedinUrl: string;
  googleClientId: string;
  stripePublishableKey: string;
  juliorTorresLinkedIn: string;
  juliorTorresGithub: string;
  juliorTorresEmail: string;
  leonardoTorresLinkedIn: string;
  leonardoTorresEmail: string;
};

const config: Config = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "/api",
  linkedinUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/company/pro-meets",
  googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "YOUR_CLIENT_ID",
  stripePublishableKey:
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "YOUR_STRIPE_PUBLISHABLE_KEY",
  juliorTorresLinkedIn:
    process.env.NEXT_PUBLIC_JULIO_TORRES_LINKEDIN ||
    "https://www.linkedin.com/in/julio-cesar-torres-moreno/",
  juliorTorresGithub:
    process.env.NEXT_PUBLIC_JULIO_TORRES_GITHUB ||
    "https://github.com/juliotorresmoreno",
  juliorTorresEmail:
    process.env.NEXT_PUBLIC_JULIO_TORRES_EMAIL || "juliotorres@onnasoft.us",
  leonardoTorresLinkedIn:
    process.env.NEXT_PUBLIC_LEONARDO_TORRES_LINKEDIN ||
    "https://www.linkedin.com/in/leonardo-torres-moreno-682b29161/",
  leonardoTorresEmail:
    process.env.NEXT_PUBLIC_LEONARDO_TORRES_EMAIL || "leonardotorres@onnasoft.us",
};

export default config;

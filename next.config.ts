import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://localhost:3000", "dev.pro-meets.com", "pro-meets.com"],
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname, '..'),
  },
};

export default nextConfig;

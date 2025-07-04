import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Do not include the 'appDir' property, as it is not part of the type.
  // To force the use of the page router, simply do not create an 'app' directory in your project.
  // No additional config is needed.
};

export default nextConfig;

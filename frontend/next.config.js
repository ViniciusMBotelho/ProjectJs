/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.awsli.com.br",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        /*         
        port: "",
        pathname: "/account123/**",
        */
      },
      {
        protocol: "https",
        hostname: "d2r55xnwy6nx47.cloudfront.net",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

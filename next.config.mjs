/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dstudiosphotography.com", port: "" },
    ],
  },
};

export default nextConfig;

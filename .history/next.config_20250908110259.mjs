/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                // hostname: 'images.pexels.com',
                domains: ["images.pexels.com"],
            },
        ],
    },
  output: 'export', 
};

export default nextConfig;

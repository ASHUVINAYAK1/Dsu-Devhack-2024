/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 't4.ftcdn.net',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
        ],
    },
};

module.exports = nextConfig;

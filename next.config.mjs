/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shahirwardak.blob.core.windows.net',
                pathname: '/sw-react-app-blob-storage/**',
            },
        ],
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [{
            protocol: 'https',
            hostname: 'invidget.switchblade.xyz',
            port: '',
            pathname: '/Rfq8CMZH4b'
        }]
    },
    experimental: {
        optimizePackageImports: [
            '@mantine/carousel',
            '@mantine/core',
            '@mantine/form',
            '@mantine/hooks',
            '@mantine/modals',
            '@mantine/notifications',
            '@mantine/nprogress',
            '@mantine/code-highlight',
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', // Optional, allows specific ports
        pathname: '/**', // Matches all paths
      },
    ],
  },
};

export default withNextIntl(nextConfig);

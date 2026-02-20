/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Essential for Azure Web Apps
  reactStrictMode: true,
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {

  basePath: '/fxqv0',

  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 基本SEO配置
  compress: true,
  poweredByHeader: false,

}

export default nextConfig

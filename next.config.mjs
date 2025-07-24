/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {

  // basePath: '/fxqv0',
  basePath: '/fxqv0',              // 一定要加
  assetPrefix: isProd ? '/fxqv0/' : '',   // 非必须，但保险 – 给 <link><script> 再加前缀

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

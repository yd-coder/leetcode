/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * 使用next export命令导出Next.js应用程序时，存在与默认图片优化加载器不兼容的问题。
   * Next.js 默认的图片优化方案需要通过 Image Optimization API 在服务器端运行，而导出的静态站点无法访问该 API。
   * 为了解决这个问题，你可以将 images.unoptimized 配置为 true，这样 Next.js 将不会对图片进行优化。
   */
  images: {
    unoptimized: true 
  },
  assetPrefix: '/leetcode/',
  basePath: ''
}

module.exports = nextConfig

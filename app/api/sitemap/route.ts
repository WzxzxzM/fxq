export async function GET() {
  const baseUrl = 'https://cpfly.top'
  const currentDate = new Date().toISOString()

  // 主要页面配置
  const pages = [
    {
      url: '/',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      languages: ['zh', 'en', 'ja']
    },
    {
      url: '/how-to-play',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      languages: ['zh', 'en', 'ja']
    },
    {
      url: '/game-modes',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      languages: ['zh', 'en', 'ja']
    },
    {
      url: '/faq',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
      languages: ['zh', 'en', 'ja']
    },
    {
      url: '/reviews',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
      languages: ['zh', 'en', 'ja']
    },
    {
      url: '/download',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      languages: ['zh', 'en', 'ja']
    }
  ]

  // 生成XML内容
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => {
  const mainUrl = page.url === '/' ? '' : page.url
  
  return `  <url>
    <loc>${baseUrl}${mainUrl}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
}).join('\n')}
</urlset>`
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600' // 缓存1小时
    }
  })
} 

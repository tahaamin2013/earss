module.exports = {
  siteUrl: 'pakindiawar.com',
  generateIndexSitemap: false,
  exclude: ['/server-news-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `pakindiawar.com/server-news-sitemap.xml`,
    ],
  },
}
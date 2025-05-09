module.exports = {
  siteUrl: 'pakindiawar.com',
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `pakindiawar.com/server-sitemap.xml`,
    ],
  },
}
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vivid344.vercel.app/",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://vivid344.vercel.app/server-sitemap.xml",
    ],
  },
};

module.exports = {
  siteUrl: "https://jcconstruction.us",
  // generateRobotsTxt: true, // (optional)
  exclude: [
    "/server-sitemap.xml",
    "/thank-you",
    "/products/*",
    "/portfolio/*",
    "/portfolio",
  ], // <= exclude here
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/thank-you" },
    ],
    additionalSitemaps: [
      "https://jcconstruction.us/sitemap.xml", // <==== Add here
      "https://jcconstruction.us/server-sitemap.xml", // <==== Add here
    ],
  },
};

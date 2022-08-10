/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = {
  productionBrowserSourceMaps: true,
};

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV === "development",
        dest: "public",
        runtimeCaching,
        buildExcludes: [/middleware-manifest\.json$/],
      },
    },
  ],
  {
    images: {
      domains: ["cdn.sanity.io"],
      loader: "akamai",
      path: "",
    },
  },
  {
    reactStrictMode: true,
  },
  {
    redirects: [
      {
        source: "/easy-financing-available ",
        destination: "https://jcconstruction.us",
        statusCode: 301,
      },
      {
        source: "/request-a-quote ",
        destination: "https://jcconstruction.us/contact",
        statusCode: 301,
      },
      {
        source: "/galleries",
        destination: "https://jcconstruction.us/gallery",
        statusCode: 301,
      },
      {
        source: "/view-source",
        destination: "https://jcconstruction.us",
        statusCode: 301,
      },
      {
        source: "/testimonials",
        destination: "https://jcconstruction.us",
        statusCode: 301,
      },
      {
        source: "/our-team",
        destination: "https://jcconstruction.us",
        statusCode: 301,
      },
    ],
  },
]);

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
    buildExcludes: [
      /middleware-manifest\.json$/,
      /_middleware.js$/,
      /_middleware.js.map$/,
    ],
  },
  images: {
    domains: [
      'assets.vercel.com',
      'storage.googleapis.com',
      'source.unsplash.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
});

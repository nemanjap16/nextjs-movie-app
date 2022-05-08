/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['recoil'])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'rb.gy'],
  },
})

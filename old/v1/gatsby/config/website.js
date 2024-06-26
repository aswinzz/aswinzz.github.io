const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Aswin VB', // Navigation and Site Title
  siteTitleAlt: 'Aswin', // Alternative Site title for SEO
  siteTitleShort: 'Aswin', // short_name for manifest
  siteUrl: 'http://aswinzz.me', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Full Stack Developer',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@aswinvb1', // Twitter Username
  ogSiteName: 'aswinvb', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}

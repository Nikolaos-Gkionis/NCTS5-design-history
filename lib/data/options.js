const deepmerge = require('deepmerge')

/**
 * Default option values
 *
 * @see {@link https://x-govuk.github.io/govuk-eleventy-plugin/options/}
 */
const defaultOptions = {
  brandColour: false,
  themeColour: '#00938c', // $govuk-text-colour
  fontFamily: false,
  icons: {
    mask: '/assets/images/govuk-mask-icon.svg',
    shortcut: '/assets/images/favicon.ico',
    touch: '/assets/images/govuk-apple-touch-icon.png'
  },
  footer: {
    copyright: 'crown', // Crown copyright
    licence: 'ogl' // Open Government Licence v3.0
  },
  header: {
    homepageUrl: '/',
    organisationLogo: 'crown',
    organisationName: 'GOV.UK',
    productName: false
  },
  homeKey: 'Home',
  parentSite: false,
  pathPrefix: '/',
  search: false,
  stylesheets: [],
  url: false
}

module.exports = function (options) {
  return deepmerge(defaultOptions, options)
}

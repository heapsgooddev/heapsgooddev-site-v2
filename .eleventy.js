const CleanCSS = require('clean-css')
const { getMetadata } = require('page-metadata-parser')
const domino = require('domino')
const fetch = require('node-fetch')

module.exports = function(eleventyConfig) {
  // css minifier
  eleventyConfig.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles
  })

  // date prettier
  eleventyConfig.addFilter('date', function(date) {
    const parsedDate = new Date(date)
    return parsedDate.toDateString()
  })

  // dump dump
  eleventyConfig.addFilter('logDump', function(data) {
    console.log(data)
  })

  // markdown parser
  const markdownIt = require('markdown-it')
  const markdownItPrism = require('markdown-it-prism')
  const customBlock = require('markdown-it-custom-block')
  const options = {
    html: true,
    linkify: true,
  }
  let markdownLib = markdownIt(options).use(markdownItPrism)
  eleventyConfig.setLibrary('md', markdownLib)

  // async metadata parser
  eleventyConfig.addNunjucksAsyncShortcode('metablock', async function(url) {
    const response = await fetch(url)
    const html = await response.text()
    const doc = domino.createWindow(html).document
    const metadata = getMetadata(doc, url)
    return `<div class="metadata-block"><a href="${url}" alt="${metadata.title}" class="metadata-block__card" target="_blank" rel="noreferrer"><img src="${metadata.image}" alt="${metadata.title}"><div class="metadata-block__card__info"><h4>${metadata.title}</h4><p>${metadata.description}</p></div></a></div>`
  })

  // config object
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: './src',
      output: './dist',
      data: './_data',
      includes: './_includes',
      layouts: './_layouts',
    },
  }
}

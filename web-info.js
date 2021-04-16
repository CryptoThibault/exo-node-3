const axios = require('axios')
const { JSDOM } = require('jsdom')
const fsPromises = require('fs/promises')

if (process.argv.length !== 3) {
  console.log('Usage: node web-info.js link')
}
const main = async () => {
  const url = process.argv[2]
  const info = await axios.get(url)
  const dom = new JSDOM(info.data)
  const jsobj = {
    url: url,
    contentLenght: dom.window.document.querySelector("html").textContent.length,
    title: dom.window.document.querySelector("title").textContent,
    nbURls: dom.window.document.querySelectorAll("link").length,
    nbImgs: dom.window.document.querySelectorAll("img").length
  }
  await fsPromises.writeFile('info.json', JSON.stringify(jsobj))
}
main()
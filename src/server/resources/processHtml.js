import fs from 'fs'

export default function htmlFilePath(htmlFile) {

  fs.readFile(htmlFile, (err, data) => {

    if (err) {

      throw new Error('Failed to fetch HTML file.')
    }

    processFile(data, htmlFile);
  })
}

function processFile(data, htmlFile) {

  // const clientScript = enrichHtml();
  const injectScript0 = `<script>var exports = {};</script>`;
  const injectScript1 = `<script type="text/javascript" src="script/enrichHtml.js"></script>`;
  const injectScript2 = `<script type="text/javascript" src="script/arrayAlgorithm.js"></script>`;
  const injectScript3 = `<script type="text/javascript" src="script/numberAlgorithm.js"></script>`;

  data = data.toString().replace(/<\/body>/m, (text) => `${injectScript0}${injectScript2}${injectScript3}${injectScript1}\n\n${text}`)

  fs.writeFileSync(htmlFile, data, {flag: 'w'})
}

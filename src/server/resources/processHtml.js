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

  // TODO import this from a file config
  const clientScripts = [
    `<script>var exports = {};</script>`,
    `<script type="text/javascript" src="script/algorithms/arrayAlgorithm.js"></script>`,
    `<script type="text/javascript" src="script/algorithms/numberAlgorithm.js"></script>`,
    `<script type="text/javascript" src="script/enrichHtml.js"></script>`
  ];

  data = (
    data
      .toString()
      .replace(/<\/body>/m, (text) => (
        `${clientScripts.join('\n')}\n\n${text}`
      ))
  );

  fs.writeFileSync(htmlFile, data, {flag: 'w'})
}

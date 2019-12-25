import fs from 'fs'

export default function htmlFilePath(htmlFile) {

  fs.readFile(htmlFile, (err, data) => {

    if (err) {

      throw new Error('Failed to fetch HTML file.')
    }

    processFile(data, htmlFile);
  })
}

async function processFile(data, htmlFile) {

  const algorithmsPath = 'src/public/script/algorithms';

  await fs.readdir(algorithmsPath, (err, algorithmsFiles) => {

    if (err) {
      // TODO add logging
      console.log('processFile: ' + err);
      throw new Error(err);
    }

    const clientScripts = [
      `<script>var exports = {};</script>`
    ];

    algorithmsFiles.forEach(file => (
      clientScripts.push(`
          <script
            type="text/javascript"
            src="script/algorithms/${file}">
          </script>
        `)
    ));

    clientScripts.push(`<script type="text/javascript" src="script/enrichHtml.js"></script>`);

    data = (
      data
        .toString()
        .replace(/<\/body>/m, (text) => (
          `${clientScripts.join('\n')}\n\n${text}`
        ))
    );

    fs.writeFileSync(htmlFile, data, {flag: 'w'})

  });
}

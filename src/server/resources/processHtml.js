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

    // TODO: move this out
    const customStyling = `
      <style>
        textarea {
          display: block;
          width: 94%;
          margin: auto;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #1184ce;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
        }

        button {
          border: 1px solid #1184ce;
          display: block;
          width: 20%;
          margin: 15px 0 0 0;
          color: #495057;
          border-radius: 0.25rem;
          margin-left: 5px;
          font-size: 14px;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
        }
        button:hover {
          color: #1184ce;
        }
      </style>
    `;

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
          `${customStyling}\n\n${clientScripts.join('\n')}\n\n${text}`
        ))
    );

    fs.writeFileSync(htmlFile, data, {flag: 'w'})

  });
}

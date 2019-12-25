const arrAlgorithm = window.arrayAlgorithms();
const numAlgorithm = window.numberAlgorithms();

enrichTextArea();
populateTextAreaAlgorithms();
addGlobalTextAreaEventHandler();

function enrichTextArea() {

  try {

    // adding textArea:
    const preTags = document.getElementsByTagName('pre');
    const textareaTemplate = (`
      <textarea name="name" rows="8" cols="80"></textarea>
      <button type="button" name="button">click</button>
    `);

    [].forEach.call(preTags, (el) => {

      const div = document.createElement('div');

      div.innerHTML = textareaTemplate;
      el.parentElement.append(div);
    });

  } catch(error) {
    // TODO logging
    console.log('enrichTextArea: ' + error);
    throw new Error(error);
  }
}

function populateTextAreaAlgorithms() {

  try {

    const algorithms = Object.assign(arrAlgorithm, numAlgorithm);
    const algorithmsMethodsNames = Object.keys(algorithms);
    const sections = document.querySelectorAll('h3[id]');

    [].forEach.call(sections, (el) => {

      const name = el.innerText.replace(/^\w/, (w) => w.toLowerCase());
      const method = algorithmsMethodsNames[algorithmsMethodsNames.indexOf(name)];

      if (method) {

        const section = el.parentElement.parentElement;
        const textarea = section.getElementsByTagName('textarea');

        if (textarea.length) {

          const preTag = section.getElementsByTagName('pre')[0];

          textarea[0].innerHTML = preTag.innerText + "\n\n" + algorithms[method];
        }
      }
    });

  } catch(error) {
    // TODO logging
    console.log('populateTextAreaAlgorithms: ' + error);
    throw new Error(error);
  }
}

function addGlobalTextAreaEventHandler() {

  try {

    const playgroundEventHandler = document.getElementsByTagName('button');

    [].forEach.call(playgroundEventHandler, (el) => {

      el.addEventListener('click', (event) => {

        const section = event.target.parentElement.parentElement;
        const name = section.getElementsByTagName('h3')[0].innerText;
        const fncName = name.replace(/^\w/, (w) => w.toLowerCase());
        const textarea = section.getElementsByTagName('textarea');
        const preTag = section.getElementsByTagName('pre')[0];
        const fnc = textarea[0].value;
        // const fnc = preTag.innerText + textarea[0].value;

        alert(eval(eval('fnc')));
      });
    });

  } catch(error) {
    // TODO logging
    console.log('addGlobalTextAreaEventHandler: ' + error);
    throw new Error(error);
  }
}

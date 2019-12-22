if (typeof window !== 'undefined') {

  debugger;
  const arrAlgorithm = window.arrayAlgorithms();
  const numAlgorithm = window.numberAlgorithms()

  // adding textArea:
  const textareaTemplate = (`
    <textarea name="name" rows="8" cols="80"></textarea>
    <button type="button" name="button">click</button>
  `);

  const preTags = document.getElementsByTagName('pre');

  [].forEach.call(preTags, (el) => {

    const div = document.createElement('div');

    div.innerHTML = textareaTemplate;
    el.parentElement.append(div);
  });




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

}

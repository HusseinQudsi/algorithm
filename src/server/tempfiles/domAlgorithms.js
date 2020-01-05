export default function domAlgorithms() {

  return {
    getLinksObjByHostname
  }

  function getLinksObjByHostNames() {

    const linkObjeByHostNames = {};
    const $links = document.getElementsByTagName('a');

    [].forEach.call($links, (link) => {

      const hrefOrigin = link.origin;
      const href = link.href;

      if (hrefOrigin && href) {

        const hrefValue =
          linkObjeByHostNames[hrefOrigin] =
          linkObjeByHostNames[hrefOrigin] || [];

        hrefValue.push(href);
      }
    });

    return linkObjeByHostNames;
  }
}

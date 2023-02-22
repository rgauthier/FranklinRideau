export default function decorate(block) {
    /* create anchor overlay with images */
    const anchor = document.createElement('a');
    [...block.children].forEach((row, index) => {
        var image = row.querySelector('img');
        anchor.href=row.querySelector('a').href;
        anchor.appendChild(image);
    });
    //block.append(anchor);
    block.replaceChild(anchor, block.children[0]);
  }
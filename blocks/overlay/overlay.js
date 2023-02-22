export default function decorate(block) {
    /* create anchors overlay with images */
    
    [...block.children].forEach((row, index) => {
        const anchor = document.createElement('a');
        var image = row.querySelector('img');
        anchor.href=row.querySelector('a').href;
        anchor.appendChild(image);
        block.replaceChild(anchor, block.children[index]);
    });
    //block.append(anchor);
  }
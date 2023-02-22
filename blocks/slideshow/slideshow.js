import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
    /* change to ul, li */
    const ul = document.createElement('ul');
    [...block.children].forEach((row, index) => {
      const li = document.createElement('li');
      if(index === 0) {
        li.className = 'slide showing';
      } else {
        li.className = 'slide';
      }
      li.innerHTML = row.innerHTML;
      [...li.children].forEach((div) => {
        if (div.children.length === 1 && div.querySelector('picture')) div.className = 'slideshow-image';
        else div.className = 'slideshow-body';
      });
      ul.append(li);
    });
    //ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
    ul.id = 'slides'
    block.textContent = '';
    block.append(ul);
  }
  
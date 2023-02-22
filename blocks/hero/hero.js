export default function decorate(block) {
    /* create slideshow */
    [...block.children].forEach((row, index) => {
      const li = document.createElement('li');
    });
    //ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  }
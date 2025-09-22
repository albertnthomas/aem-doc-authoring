//import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Remove the container, append maui-card directly to block
  [...block.children].forEach((row) => {
    const mauiCard = document.createElement('maui-card');
    mauiCard.setAttribute('assistiveClose', 'close');
    mauiCard.setAttribute('width', 'auto');
    mauiCard.setAttribute('height', 'auto');
    mauiCard.setAttribute('theme', 'lh');
    mauiCard.setAttribute('dismissable', 'true');

    // Move all children from the row into the maui-card
    while (row.firstElementChild) {
      mauiCard.appendChild(row.firstElementChild);
    }

    // Replace images with optimized versions inside the card
    mauiCard.querySelectorAll('picture > img').forEach((img) => {
      img.closest('picture').replaceWith(
        createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])
      );
    });

    block.appendChild(mauiCard);
    row.remove();
  });
}

import { fetchPlaceholders } from '../../scripts/aem.js';

export default function decorate(block) {
  // Create maui-section and maui-carousel
  const mauiSection = document.createElement('maui-section');
  const mauiCarousel = document.createElement('maui-carousel');
  mauiCarousel.setAttribute('slides-per-move', '1');
  mauiCarousel.setAttribute('slides-per-page', '1');
  mauiCarousel.setAttribute('theme', 'lh');

  // For each row in the block, create a maui-card as a slide
  [...block.children].forEach((row) => {
    const mauiCard = document.createElement('maui-card');
    mauiCard.classList.add('maui-carousel-slide');
    mauiCard.setAttribute('theme', 'lh');

    // Move all children from the row into the maui-card
    while (row.firstChild) {
      mauiCard.appendChild(row.firstChild);
    }

    mauiCarousel.appendChild(mauiCard);
    row.remove();
  });

  mauiSection.appendChild(mauiCarousel);

  // Replace block content with the maui-section
  block.innerHTML = '';
  block.appendChild(mauiSection);
}

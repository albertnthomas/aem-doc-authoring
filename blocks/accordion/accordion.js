/*
 * Accordion Block
 * Adapted to use Maui Design System's maui-collapsible-item
 */

export default function decorate(block) {
  [...block.children].forEach((row, idx) => {
    // Get label and body
    const label = row.children[0];
    const body = row.children[1];

    // Create maui-collapsible-item
    const mauiAccordion = document.createElement('maui-collapsible-item');
    mauiAccordion.setAttribute('id', `accordion-item-section-${idx}`);
    mauiAccordion.setAttribute('headline', label.textContent.trim());
    //mauiAccordion.setAttribute('expanded', 'false'); // Set to true if you want it open by default

    // If subheadline exists, add it as a richtext div
    if (label.querySelector('.subheadline')) {
      const subheadlineDiv = document.createElement('div');
      subheadlineDiv.className = 'richtext';
      subheadlineDiv.innerHTML = `<p>${label.querySelector('.subheadline').textContent}</p>`;
      mauiAccordion.appendChild(subheadlineDiv);
    }

    // Add body/content
    mauiAccordion.appendChild(body);

    row.replaceWith(mauiAccordion);
  });
}

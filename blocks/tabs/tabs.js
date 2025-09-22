// eslint-disable-next-line import/no-unresolved
//import { toClassName } from '../../scripts/maui-design-system.js';

export default async function decorate(block) {
  // Add custom class to body
  

  // Create the custom tab control
  const tabControl = document.createElement('maui-tab-control');
  tabControl.setAttribute('theme', 'lh'); 
  tabControl.setAttribute('spreadtabs', ''); 


  [...block.children].forEach((child) => {
    const tab = child.firstElementChild;
    const panel = document.createElement('maui-tab-control-panel');
    panel.setAttribute('name', tab.textContent.trim());
    // Move all content except the tab label into the panel
    while (tab.nextSibling) {
      panel.appendChild(tab.nextSibling);
    }
    tabControl.appendChild(panel);
    child.remove(); // Remove the old child
  });

  // Replace the block's content with the custom tab control
  block.innerHTML = '';
  block.appendChild(tabControl);
}

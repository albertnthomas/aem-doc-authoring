export default function decorate(block) {
    
  const items = [...block.children].map((el) => ({
    text: el.textContent.trim(),
    href: el.querySelector('a') ? el.querySelector('a').getAttribute('href') : null,
  }));

  const mauiBreadcrumb = document.createElement('maui-breadcrumb');
  mauiBreadcrumb.setAttribute('aria-label', 'Breadcrumb');

  items.forEach((item) => {
    const mauiBreadcrumbItem = document.createElement('maui-breadcrumb-item');
    if (item.href) {
      mauiBreadcrumbItem.setAttribute('href', item.href);
    }
    mauiBreadcrumbItem.textContent = item.text;
    mauiBreadcrumb.appendChild(mauiBreadcrumbItem);
  });

  block.innerHTML = '';
  block.appendChild(mauiBreadcrumb);
}
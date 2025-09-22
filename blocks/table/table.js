/*
 * Table Block
 * Recreate a table using Maui Design System custom elements
 */

export default async function decorate(block) {
  // Create Maui table elements
  const mauiTable = document.createElement('maui-table');
  mauiTable.setAttribute('firstColHeader', '');
  mauiTable.setAttribute('id', 'dynamic-table');

  const mauiTableCaption = document.createElement('maui-table-caption');
  mauiTable.appendChild(mauiTableCaption);

  // Header
  const header = !block.classList.contains('no-header');
  if (header) {
    const mauiTableHead = document.createElement('maui-table-head');
    const mauiTableRow = document.createElement('maui-table-row');
    [...block.children[0].children].forEach((col) => {
      const mauiTableCell = document.createElement('maui-table-cell');
      mauiTableCell.innerHTML = col.innerHTML;
      mauiTableRow.appendChild(mauiTableCell);
    });
    mauiTableHead.appendChild(mauiTableRow);
    mauiTable.appendChild(mauiTableHead);
  }

  // Body
  const mauiTableBody = document.createElement('maui-table-body');
  [...block.children].forEach((child, i) => {
    // Skip header row if present
    if (header && i === 0) return;
    const mauiTableRow = document.createElement('maui-table-row');
    [...child.children].forEach((col) => {
      const mauiTableCell = document.createElement('maui-table-cell');
      mauiTableCell.innerHTML = col.innerHTML;
      mauiTableRow.appendChild(mauiTableCell);
    });
    mauiTableBody.appendChild(mauiTableRow);
  });
  mauiTable.appendChild(mauiTableBody);

  block.innerHTML = '';
  block.append(mauiTable);
}

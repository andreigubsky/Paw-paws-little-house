export function getPagination(current, total, delta = 1) {
  if (total <= 1) return [1];

  const pages = [1];
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  if (left > 2) pages.push('...');

  for (let i = left; i <= right; i++) pages.push(i);

  if (right < total - 1) pages.push('...');

  pages.push(total);
  return pages;
}

export function renderPagination({ container, current, total }) {
  if (total <= 1) {
    container.innerHTML = '';
    return;
  }

  if (total === 2) {
    container.innerHTML = `
      <button type="button" data-page="1" class="${
        current === 1 ? 'is-active' : ''
      }">1</button>
      <button type="button" data-page="2" class="${
        current === 2 ? 'is-active' : ''
      }">2</button>
    `;
    return;
  }

  const items = getPagination(current, total, 1);

  container.innerHTML = `
    <button type="button" data-nav="prev" ${
      current === 1 ? 'disabled' : ''
    }>←</button>

    ${items
      .map(p =>
        p === '...'
          ? `<span class="dots">…</span>`
          : `<button type="button" data-page="${p}" class="${
              p === current ? 'is-active' : ''
            }">${p}</button>`
      )
      .join('')}

    <button type="button" data-nav="next" ${
      current === total ? 'disabled' : ''
    }>→</button>
  `;
}

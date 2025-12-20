function getHeaderOffset() {
  return window.innerWidth >= 1440 ? 82 : 74;
}

export function scrollToCategories(element) {
  if (!element) return;

  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    getHeaderOffset();

  window.scrollTo({
    top: y,
    behavior: 'smooth',
  });
}

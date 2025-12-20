// Lazy-load iziToast and its CSS to avoid increasing the initial bundle
function showIziToast(opts) {
  Promise.all([
    import('izitoast').then(m => m.default),
    import('izitoast/dist/css/iziToast.min.css'),
  ])
    .then(([iziToast]) => {
      iziToast.show(opts);
    })
    .catch(err => {
      // Fallback: log error, don't break the site if toast lib fails to load
      // eslint-disable-next-line no-console
      console.error('Failed to load iziToast', err);
    });
}

export function notificationError(message) {
  showIziToast({
    message: message,
    position: 'topRight',
    backgroundColor: 'rgb(255, 215, 163)',
  });
}

export function notificationSuccess(message) {
  showIziToast({
    message: message,
    position: 'topRight',
    backgroundColor: 'rgba(164, 255, 163, 1)',
  });
}

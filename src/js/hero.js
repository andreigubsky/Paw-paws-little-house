const button = document.querySelector('.hero-button')


button.addEventListener('click', () => {
  window.location.href = './footer.html#success-history'
})

window.addEventListener('load', () => {
  if (window.location.hash === '#success-history') {
    const targer = document.getElementById('#success-history')

    if(!targer) return;

    const offSetTop = targer.getBoundingClientRect().top;

    window.scrollBy ({
        top: offSetTop,
        behavior: 'smooth'
    })
    
  }
})
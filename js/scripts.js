const agreeBtn = document.querySelector('.agree-btn');
const main = document.querySelector('main');
const footerHeight = parseInt(
  window.getComputedStyle(document.getElementById('footer')).height
);

main.addEventListener('scroll', () => {
  if (
    main.scrollTop + main.clientHeight + footerHeight >=
    main.scrollHeight
  ) {
    agreeBtn.removeAttribute('disabled');
  } else {
    agreeBtn.setAttribute('disabled', 'true');
  }
});

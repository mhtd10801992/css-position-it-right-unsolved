const agreeBtn = document.querySelector('.agree-btn');
const footerHeight = window.getComputedStyle(
  document.getElementById('footer')
).height;

document.addEventListener('scroll', () => {
  window.innerHeight + window.scrollY + parseInt(footerHeight) >=
  document.body.scrollHeight
    ? agreeBtn.removeAttribute('disabled')
    : agreeBtn.setAttribute('disabled', `true`);
});

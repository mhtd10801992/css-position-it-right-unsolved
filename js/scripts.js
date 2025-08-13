
document.addEventListener('DOMContentLoaded', () => {
  const agreeBtn = document.querySelector('.agree-btn');
  const boxScroll = document.querySelector('.box-scroll');

  boxScroll.addEventListener('scroll', () => {
    const scrollTop = boxScroll.scrollTop;
    const scrollHeight = boxScroll.scrollHeight;
    const clientHeight = boxScroll.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      agreeBtn.removeAttribute('disabled');
    } else {
      agreeBtn.setAttribute('disabled', 'true');
    }
  });

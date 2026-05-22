document.querySelectorAll('ul li').forEach(li => {
  let timer = null;
  li.addEventListener('mouseleave', () => {
    li.classList.add('keep-clear');
    clearTimeout(timer);
    timer = setTimeout(() => li.classList.remove('keep-clear'), 1000);
  });
  li.addEventListener('mouseenter', () => {
    clearTimeout(timer);
    li.classList.remove('keep-clear');
  });
});

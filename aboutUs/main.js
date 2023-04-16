const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction:false,
  },
});


if(document.querySelector('.footer-copyright')){
  let year = new Date();
  year = year.getFullYear();
  document.querySelector('.footer-copyright').innerHTML = 'Copyright &#169; ' + year + ' <a href="/">Aiskcon</a>, All Right Reserved';
}
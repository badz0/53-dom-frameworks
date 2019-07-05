

// document.querySelectorAll('.text').forEach(element => {
//   element.style.color = 'red';
// });


$('.text').css('color', 'red');

TweenMax.staggerTo('.text', 2, {x: 500, scale: 1.5}, 1);
TweenMax.to('.text', 0, {clearProps:"all", delay: 10});

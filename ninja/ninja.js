const ninja = document.querySelector('.ninja__img');
const methodSelect = document.querySelector('.fire__method');
const speedInput = document.querySelector('.fire__speed-input');


const methods = {
  default: (speed) => {
    TweenMax.to(ninja, .4 * speed, {x: 300, y: 200, rotation: 480, onComplete: () => {
      TweenMax.from(ninja, 0, {clearProps: 'all', delay: 1});
    }});
  },
  superHit: (speed) => {
    TweenMax.to(ninja, .4 * speed, {x: -300, y: 500, scale: 5, rotation: 480});
  },
}

document.querySelector('.fire__btn')
  .addEventListener('click', function() {
    methods[methodSelect.value](speedInput.value);
    // TweenMax.from(ninja, 0, {clearProps: 'all', delay: 5});
  });

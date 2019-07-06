const ninja = document.querySelector('.ninja__img');
const selectMethod = document.querySelector('.fire__method');
const speedInput = document.querySelector('.fire__speed-input');

document.querySelector('.fire__btn')
  .addEventListener('click', fire);



const methods = {
  default: (speed) => TweenMax.to(ninja, .1*speed, {
    rotation: 180, scale: 1.5,
    onComplete: reset
  }),
  superHit: (speed) => {
    TweenMax.to(ninja, .3*speed, {
      rotation: 1060, scale: .1,
      onComplete: reset
    })
  },
  jump: (speed) => {
    TweenMax.to(ninja, .5*speed, {y: -50, ease: Elastic.easeOut.config(1, 0.3), onComplete: reset})
  }
}

function reset() {
  TweenMax.from(ninja, 0, {clearProps: 'all', delay: 2});
}

function fire() {
  methods[selectMethod.value](speedInput.value);
}


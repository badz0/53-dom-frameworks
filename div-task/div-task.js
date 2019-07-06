function randomColor() {
  return '#' + Math.random().toString(16).substring(2, 8);
}

function generateDivs(n) {
  const container = document.querySelector('.container');
  for (let i = 0; i < n; i++) {
    const div = document.createElement('div');
    div.style.background = randomColor();
    div.className = 'color-div';
    onDivClick(div)

    container.append(div);
  }
}

function onDivClick(el) {
  let counter = 0;
  el.addEventListener('click', event => {
    counter++;
    if (counter > 1) el.remove();
    event.target.style.background = randomColor();
  });
}

function generateDivsJQuery(n) {
  const container = $('.container');

  for (let i = 0; i < n; i++) {
    const div = $('<div>').addClass('color-div')
                          .css('background', randomColor());
    container.append(div);
  }
  container.on('click', event => {
    event.target.style.background = randomColor();
  });
}

generateDivs(100);

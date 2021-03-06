var p = document.getElementById('text');
var textLists = [
  'arigatou',
  'ohayou',
  'konbanwa',
  'oyasuminasai'
];
var checkTexts = [];

createText();

function createText() {
  var rnd = Math.floor(Math.random() * textLists.length);

  p.textContent = '';
  checkTexts = textLists[rnd].split('').map(function(value) {
    var span = document.createElement('span');

    span.textContent = value;
    p.appendChild(span);

    return span;
  });
};

document.addEventListener('keydown', keyDown);

function keyDown(e) {
  if(e.key === checkTexts[0].textContent) {
    checkTexts[0].className = 'add-blue';

    checkTexts.shift();

    if(!checkTexts.length) createText();
  }
}

var stringCount = checkTexts.length;

alert(stringCount);
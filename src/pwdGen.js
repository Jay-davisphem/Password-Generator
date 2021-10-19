const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = lowerLetters.toUpperCase();
const numbers = '0123456789';
const specialChr = "!\"#$%&\'()+,-./:;<=?>@[]\\^_\`{|}";
var tot = '';
var count = 0;
var chr = '';
var n, num, min;

function rand(a, b){
  return Math.floor((b - a + 1) * Math.random()) + a;
}

function choice(str=lowerLetters){
  return str[rand(0, str.length - 1)];
}
function shuffle(str){
  let n1, n2, temp;
  const len = str.length
  str = [...str];

  let n = parseInt(len**(3/2));
  for(let i=0; i < n; i++){
    n1 = rand(0, len - 1);
    n2 = rand(0, len - 1);
    temp = str[n1];
    str[n1] = str[n2];
    str[n2] = temp;
  }
  return str.join('')
}

function addChrs(is_true, lett){
  if(is_true){
    chr += lett;
    count += 1
  }
}
function appendChrs(is_true, lett){
  num = rand(parseInt(min/2), min);
  if(is_true){
    for(let i=0; i<num; i++)
      tot += choice(lett);
  }
}
function generate(lower=true, upper, number, spChr, len=6){
  /*var tot = '';
  var count = 0;
  var chr = '';
  var n, num;
  */
  addChrs(lower, lowerLetters);
  addChrs(upper, upperLetters);
  addChrs(number, numbers);
  addChrs(spChr, specialChr);

  if(!count)
    return ''
  min = len / count;

  appendChrs(lower, lowerLetters);
  appendChrs(upper, upperLetters);
  appendChrs(number, numbers);
  appendChrs(spChr, specialChr);
  n = tot.length;
  for(let i=0; i<(len - n); i++)
    tot += choice(chr);
  return shuffle(tot)
}

console.log(generate(true, true, true, false, 64))

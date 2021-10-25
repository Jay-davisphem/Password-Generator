const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = lowerLetters.toUpperCase();
const numbers = '0123456789';
const specialChr = "!\"#$%&\'()+,-./:;<=?>@[]\\^_\`{|}";

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
function generate(lower=true, upper, number, spChr, len=6){
  let tot = '';
  let count = 0;
  let chr = '';
  let n, num;
  if(lower){
    chr += lowerLetters;
    count += 1
  }
  if(upper){
    chr += upperLetters;
    count += 1
  }
  if(number){
    chr += numbers;
    count += 1
  }
  if(spChr){
    chr += specialChr;
    count += 1
  }
  if(!count)
    return ''
  const min = len / count;

  num = rand(parseInt(min/2), min);
  if(lower){
    for(let i=0; i<num; i++)
      tot += choice(lowerLetters);
  }
  num = rand(parseInt(min/2), min);
  if(upper){
    for(let i=0; i<num; i++)
      tot += choice(upperLetters);
  }
  num = rand(parseInt(min/2), min);
  if(number){
    for(let i=0; i<num; i++)
      tot += choice(numbers);
  }
  num = rand(parseInt(min/2), min);
  if(spChr){
    for(let i=0; i<num; i++)
      tot += choice(specialChr);
  }
  n = tot.length;
  for(let i=0; i<(len - n); i++)
    tot += choice(chr);
  return shuffle(tot)
}

//export default generate;

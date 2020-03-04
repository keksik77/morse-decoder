const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
const ABC = Object.entries(MORSE_TABLE);

function decode(expr) {

   for (let i = 0; i < ABC.length; i++) {
    while(ABC[i][0].indexOf(".") != -1)
    {
      ABC[i][0] = ABC[i][0].replace(".", 10);
    }
    while(ABC[i][0].indexOf("-") != -1){
      ABC[i][0] = ABC[i][0].replace("-", 11);
    }
      temp = ABC[i][0].length;
      for (let j = 0; j < 10 - temp; j++) 
      {
          ABC[i][0] = '0' + ABC[i][0];
      }
  }

    ABC.push(['**********',' ']);
    let exprArr = expr.match(/.{10}/g);

    for(let i=0;i<exprArr.length;i++){
      for(let j=0; j<ABC.length;j++){
        if(exprArr[i] == ABC[j][0]){
          exprArr[i]=ABC[j][1];
        }
      }
    }
    return exprArr.join('');
}

module.exports = {
    decode
}
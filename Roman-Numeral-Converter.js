function convertToRoman(num) {

  // return error if number entered is too high to be supported by standard roman numerals
  if (num >= 4000){
    console.log("numbers 4000 and up not supported by this function");
    return;
  }

  let romanArr = [];      // array to store converted roman numerals
  let decimalArr = num.toString().split('');    // split num into an array

  // functions for converting ones, tens, hundreds, and thousands places to roman numerals
  // convert ones place
  function onesRoman(num){
    let ones = {
      '1': 'I',
      '4': 'IV',
      '5': 'V',
      '9': 'IX'
    };

    conversionIfs(num, ones);
  }

  // convert tens place
  function tensRoman(num){
    let tens = {
      '1': 'X',
      '4': 'XL',
      '5': 'L',
      '9': 'XC'
    };

    conversionIfs(num, tens);
  }

  // convert hundreds place
  function hundredsRoman(num){
    let hundreds = {
      '1': 'C',
      '4': 'CD',
      '5': 'D',
      '9': 'CM'
    };

    conversionIfs(num, hundreds);
  }

  // convert thousands place
  function thousandsRoman(num){
    let thousands = {
      '1': 'M'
    };

    for (let i = 1; i <= num; i++){
      romanArr.push(thousands['1']);
    }
  }

  // function for if statements to push roman numerals to array for above functions
  function conversionIfs(num, obj){
    if (obj.hasOwnProperty(num) && num != '1'){
      romanArr.push(obj[num]);
    }
    else if (num > 5){
      romanArr.push(obj['5']);
      num -= 5;
    }

    if (num < 4) {
      for (let i = 1; i <= num; i++){
        romanArr.push(obj['1']);
      }
    }
  }

  // call above conversion functions based on magnitude of entered number
  if (decimalArr.length === 4){
    thousandsRoman(decimalArr[0]);
    hundredsRoman(decimalArr[1]);
    tensRoman(decimalArr[2]);
    onesRoman(decimalArr[3]);
  }
  else if (decimalArr.length === 3){
    hundredsRoman(decimalArr[0]);
    tensRoman(decimalArr[1]);
    onesRoman(decimalArr[2]);
  }
  else if (decimalArr.length === 2){
    tensRoman(decimalArr[0]);
    onesRoman(decimalArr[1]);
  }
  else if (decimalArr.length === 1){
    onesRoman(decimalArr[0]);
  }

  // join roman numeral array together and return
  let roman = romanArr.join("");
  return roman;
}

convertToRoman(1);

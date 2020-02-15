console.log('tempConverter script has loaded');

// write this function!
function tempConverter(degrees, temperature){
  if (temperature === 'celcius'){
    result = parseFloat(((degrees-32)/9*5).toFixed(2));
  }else if (temperature === 'farenheit'){
    result = ((degrees*9/5)+32);
  }else if (temperature!=='celcius' && temperature!=='farenheit'){
    result= temperature + ' is not supported';
  }
return result; 
}

// if the user wants to convert to farenheit
console.assert(tempConverter(53, 'farenheit') === 127.4, 'first');
console.assert(tempConverter(0, 'farenheit') === 32, 'second');
console.assert(tempConverter(-40, 'farenheit') === -40, 'third');

// if the user wants to convert to celcius
console.assert(tempConverter(0, 'celcius') === -17.78, 'fourth');
console.assert(tempConverter(212, 'celcius') === 100.00, 'fifth');
console.assert(tempConverter(124, 'celcius') === 51.11, 'sixth');

// if the user inputs an invalid degree
console.assert(tempConverter(34, 'toad') === 'toad is not supported', 'seventh');
console.assert(tempConverter(2.5, '') === ' is not supported', 'eighth');
console.assert(tempConverter(500, 'Farenheit') === 'Farenheit is not supported', 'ninth');


function tempConverterHandler() {
  // prompt the user for a noun, verb and adjective
  const userTempStr = prompt('would you like to convert to farenheit or celcius?');
  // cast userDegreesStr to a Number, and assign the value to userDecrees
  const userDegrees = prompt('enter a temperature to convert');
  let userDecrees = Number (userDegrees);
  let userTemp = String (userTempStr); 
  console.assert(typeof userDegrees !== 'number', "don't forget to cast userDegrees to a string!");

  // perform core logic
  // write this line!
  const text = tempConverter (userDecrees, userTemp);
  // alert result for the user
  // write this line!
  alert(text);
  // log action for the developer
  console.log('\n--- tempConverter ---');
  console.log('userTemp:', '(' + typeof userTemp + '),', userTemp);
  console.log('userDegrees:', '(' + typeof userDegrees + '),', userDegrees);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('temp-converter-button').addEventListener('click', tempConverterHandler);

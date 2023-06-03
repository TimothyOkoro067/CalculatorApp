import React, { useState } from 'react';
import Calculator from './Calculator';
import { View } from 'react-native';

/*const ExtendedCalculator = () => {
  const KeyClick = () => {
    alert('yeah it works');
  };
};

export default ExtendedCalculator;

export default ExtendedCalculator;


const [input, setInput] = useState('');
const [output, setOutput] = useState('');
  


  const handleKeyClick = (value) => {
    let newInput = '';

    if (value === 'clear') {
      newInput = '';
    } else if (value === 'backspace') {
      newInput = input.slice(0, -1);
    } else if (value === '=') {
      let result = eval(PrepareInput(input));
      // Handle the result
    } else if (value === 'brackets') {
      if (
        input.indexOf('(') === -1 ||
        (input.indexOf('(') !== -1 &&
          input.indexOf(')') !== -1 &&
          input.lastIndexOf('(') < input.lastIndexOf(')'))
      ) {
        newInput = input + '(';
      } else if (
        (input.indexOf('(') !== -1 && input.indexOf(')') === -1) ||
        (input.indexOf('(') !== -1 &&
          input.indexOf(')') !== -1 &&
          input.lastIndexOf('(') > input.lastIndexOf(')'))
      ) {
        newInput = input + ')';
      }
    } else {
      if (ValidateInput(value)) {
        newInput = input + value;
      }
    }

    setInput(newInput);
  };

  const PrepareInput = (input) => {
    let inputArray = input.split('');

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === '%') {
        inputArray[i] = '/100';
      }
    }

    return inputArray.join('');
  };

  const ValidateInput = (value) => {
    const lastInput = input.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (value === '.' && lastInput === '.') {
      return false;
    }

    if (operators.includes(value)) {
      if (operators.includes(lastInput)) {
        return false;
      } else {
        return true;
      }
    }

    return true;
  };

  const CleanInput = (input) => {
    let inputArray = input.split('');

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === '*') {
        inputArray[i] = ' x ';
      } else if (inputArray[i] === '/') {
        inputArray[i] = ' ÷ ';
      } else if (inputArray[i] === '+') {
        inputArray[i] = ' + ';
      } else if (inputArray[i] === '-') {
        inputArray[i] = ' - ';
      } else if (inputArray[i] === '(') {
        inputArray[i] = '(';
      } else if (inputArray[i] === ')') {
        inputArray[i] = ')';
      } else if (inputArray[i] === '%') {
        inputArray[i] = '%';
      }
    }

    return inputArray.join('');
  };

  const CleanOutput = (output) => {
    let outputString = output.toString();
    let decimal = outputString.split('.')[1];
    outputString = outputString.split('.')[0];

    let outputArray = outputString.split('');

    if (outputArray.length > 3) {
      for (let i = outputArray.length - 3; i > 0; i -= 3) {
        outputArray.splice(i, 0, ',');
      }
    }

    if (decimal) {
      outputArray.push('.');
      outputArray.push(decimal);
    }

    return outputArray.join('');
    };
  }; */

import React, { useState } from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import Main from './Main';


const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  
  const KeyClick = (value) => {
    let newInput = '';

   if (value === 'clear') {
      setInput('');
      setOutput('');
    } else if (value === 'backspace') {
      newInput = input.slice(0, -1);
    } else if (value === '=') {
      try {
        const result = eval(input);
        setOutput(result.toString());
      } catch (error) {
        console.error('Error evaluating expression:', error);
        setOutput('Error');
      }
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
          input.lastIndexOf('(') > input.lastIndexOf(')')
        )
      ) {
        newInput = input + ')';
      }
    } else {
      newInput = input + value;
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

const ValidateInput = (value, lastInput) => {
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

  return (
    <View style={styles.app}>
      <View style={styles.calculator}>
        <View style={styles.display}>
          <View style={styles.content}>
            <View style={styles.input}><Text style={styles.input}>{input}</Text></View>
            <View style={styles.output}><Text style={styles.output}>{output}</Text></View>
          </View>
        </View>
      <View style={styles.keys}>
          <TouchableOpacity onPress={()=> KeyClick('clear')} style={styles.actionKey}>
            <Text style={styles.actKeyText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('brackets')} style={styles.actionKey}>
            <Text style={styles.actKeyText}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('%')}  style={styles.actionKey}>
            <Text style={styles.actKeyText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('/')} style={styles.operatorKey}>
            <Text style={styles.oppKeyText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('7')} style={styles.key}>
            <Text style={styles.keyText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('8')} style={styles.key}>
            <Text style={styles.keyText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('9')} style={styles.key}>
            <Text style={styles.keyText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('*')} style={styles.operatorKey}>
            <Text style={styles.oppKeyText}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('4')} style={styles.key}>
            <Text style={styles.keyText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('5')} style={styles.key}>
            <Text style={styles.keyText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('6')} style={styles.key}>
            <Text style={styles.keyText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('-')} style={styles.operatorKey}>
            <Text style={styles.oppKeyText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('1')} style={styles.key}>
            <Text style={styles.keyText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('2')} style={styles.key}>
            <Text style={styles.keyText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('3')} style={styles.key}>
            <Text style={styles.keyText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('+')} style={styles.operatorKey}>
            <Text style={styles.oppKeyText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('backspace')} style={styles.actionKey}>
            <Text style={styles.actKeyText}>&lt;</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('0')} style={styles.key}>
            <Text style={styles.keyText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('.')} style={styles.key}>
            <Text style={styles.keyText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> KeyClick('=')} style={styles.operatorKey}>
            <Text style={styles.oppKeyText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};



export default Calculator;
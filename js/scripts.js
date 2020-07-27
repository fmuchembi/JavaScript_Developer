/*
Author: Faith Muchembi
Date: 27/07/2020
Purpose: Assignment for Data Intergrated Software Engineer(JS) role

*/ 

//Task 1 solution

function profit_checker(array){
    // to get max and min
    let min = array[0], max = array[0]

    for (let i = 1; i < array.length; i++) {
      let value = array[i]
      if(value < min){
        min = value;
      }
      if (value > max){
        max =value;
      }
    }
    console.log("Min_value is "+ min);
    console.log("Max_value is "+ max);

    //Checking if we can make profit
    if(array.indexOf(max)>array.indexOf(min)){
          console.log("Profit is " + parseInt(max-min));
          return  max;
    }else{
        console.log("No profit can be made");
        return -1;
    }
}

let stock = [1, 5, 6, 7, 34, 10];
profit_checker(stock);

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//

// Task 2 solution
function isArrayFlattened(array) {
    if (!array) {
      return true;
    }
    for (const item of array) {
      if (item instanceof Array) {
        return false;
      }
    }
    return true;
}

function flatten(array) {
    while (!isArrayFlattened(array)) {
      array = array.reduce((previous, item) => {
        return previous.concat(item);
      }, []);
    }
    return array;
  };

let numbers= [1,2,[3,4,[5,6],7,[8,9]]];
console.log("The flattened array is " + flatten(numbers));

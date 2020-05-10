/*
Author:vivek.t.v
Topic:Javascript Assignment
*/

let AnswerArray=[];

//1. Write a JavaScript function to get an array and to read the first element of an array.Check whether it is prime or not. 
function isFirstElementPrime(array){
let firstNumber=array[0];
if(firstNumber<=1){
    return false;
}
for(let i=2;i<firstNumber;i++)
{
  if(!(firstNumber%i)){
     return false;
  }
}
return true;

}
AnswerArray.push(isFirstElementPrime);
//2. Write a JavaScript program to find the most frequent item of an array.
function mostFrequentItem(array){
  let mostFreq=1;
  let newMostFreq=1;
  let mostFreqItem=array[0];
  for (let i=0;i<array.length;i++){
      newMostFreq=1;
      for(let j=i;j<array.length;j++){
          if(array[i]==array[j]){
              newMostFreq++;
              
          }
      }
      if(mostFreq<newMostFreq){
          mostFreq=newMostFreq;
          mostFreqItem=array[i];
      }
  }
  return mostFreqItem;
}
AnswerArray.push(mostFrequentItem);
/*
3. Write a JavaScript program which accept a string as input and swap the case of
each character. For example if you input 'The Quick Brown Fox' the output should
be 'tHE qUICK bROWN fOX'.
*/
function changeCase(input){
   let changedCaseletters=[];
   input.split('').forEach(
      (letter)=>{
         if(letter==letter.toUpperCase()){
             changedCaseletters.push(letter.toLowerCase());
         }
         else{
            changedCaseletters.push(letter.toUpperCase());
         }
      }
   )
   return changedCaseletters.join('');
}
AnswerArray.push(changeCase);
//4. Write a JavaScript program to find the sum of squares of the elements of an array.

function sumOfSquares(array){
    let squaresArray=array.map(i=>Math.pow(i,2));
    let sum=squaresArray.reduce((a,b)=>{
        return a+b;
    },0)
    return sum;
}
AnswerArray.push(sumOfSquares);
/*
5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check
if the current number is odd or even, and display the message to the screen as odd
or even.
*/
function oddOrEven(){
    for(let i=0;i<=15;i++){
        if(i%2){
            console.log("odd");
        }
        else{
            console.log("even");
        }
    }
}
AnswerArray.push(oddOrEven);
//6. Write a JavaScript function to truncate a string if it is longer than the specifiednumber of characters.
function truncateIfLongerThanthis(length,inputString){
    if(inputString.length>length){
        return inputString.substr(0,length);
    }
    return inputString;

}
AnswerArray.push(truncateIfLongerThanthis)
//7. Write a JavaScript program that accept two integers and display the larger usingfindLarge() function.

function findLarger(num1,num2){
  let larger=num1;
  if(num1<num2){
      larger=num2;
     
  }
  console.log(larger+" is larger");
}
AnswerArray.push(findLarger);
/*
8. Write a JavaScript program using for…in to read the objects from an array entered
by an user and to arrange it in alphabetical order.
*/
function sortArrayOfObjects(array,property){
    
        array.sort(function(a, b){
            var propertyA=a[property].toLowerCase(),propertyB=b[property].toLowerCase()
            if (propertyA < propertyB) //sort string ascending
                return -1 ;
            if (propertyA > propertyB)
                return 1;
            return 0 //default return value (no sorting)
        })
        return array;
   
    /* let's say  arrayOfobj=[{name:"micheal",age:23},{name:"mike",age:30},{name:"emily",age:25}];
       sortArrayOfObjects(arrayOfobj,"name");
       output:[{name: "emily", age: 25}
              ,{name: "micheal", age: 23}
              ,{name: "mike", age: 30}
               ]
       */
}
AnswerArray.push(sortArrayOfObjects);

/*
9. Write a JavaScript program to print the letters of the word “Javascript” as below in
each line using for…of.
J
Ja
Jav
.
.
Javascript
*/
function pyramidUsingJavascript(){
   let word='';
  for( letter of "Javascript"){
      word+=letter;
      console.log(word);
  }
}
AnswerArray.push(pyramidUsingJavascript);
/*
10.Write a JavaScript program to construct the following pattern, using a nested for
loop
*
**
***
****
*/
function printHalfPyramidPattern(char,n){
    
    for(i=0;i<n;i++){
        s='';
       for(j=0;j<i+1;j++){
           s+=char;
       }
       console.log(s);
    }
}
AnswerArray.push(printHalfPyramidPattern);
//printHalfPyramidPattern('*',4); will print the required pattern
for(let i=0;i<10;i++){
    document.querySelectorAll(".answer")[i].innerText=AnswerArray[i];
}

/*output feature is not yet fully working ,i'm working on it. :) */
let select=document.querySelector('select');
let input=document.querySelector('input');
let output=document.querySelector('.output');
input.addEventListener('change',()=>{
    output.innerText=AnswerArray[select.value](input.value);
})
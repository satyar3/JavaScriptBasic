const numberArray = [3, 4];

console.log(numberArray);
console.log(numberArray.length);
console.log(numberArray[0]);
console.log(numberArray[3]);


//Add an element at end of the Array
numberArray.push(5, 6);
console.log(numberArray[3]);

//Add an eleemnt at the beginning of the Array
numberArray.unshift(7, 8);
console.log(numberArray[1]);

//Add an elemnt in middle of the Array
numberArray.splice(2, 0, 'a', 'b'); //on 2nd position add a and b and 0 menas don't delete nything
console.log(numberArray);

//how to print all the values from an arry
for (const key in numberArray) {
    console.log(numberArray[key]);
}


//find an element in array (premintive type of data): -->string, boolean, symbol, nukk, undefined
//**********************************************************************************************************/
const s = [1, 2, 3, 4];
console.log(s.indexOf(2));
console.log(s.indexOf('a'));

const m = [1, 2, 4, 1, 5];
console.log(m.indexOf(1)); //-->1st occurance of 1
console.log(m.indexOf(1, 1)); //---> searhc for 1 from 1st position
console.log(m.indexOf(1, m.indexOf(1) + 1));

//check of a value present in an Array
console.log(m.includes(3));
console.log(m.includes(4));



//find an element in array (refernce type of data):
//**************************************************************** */

const cources = [
    {id:1, name: 'a'},
    {id:2, name: 'b'}
]

console.log(cources.includes( {id:1, name: 'a'})); //false

const c1 = cources.find(function(key){
    return key.name === 'a';
})

console.log(c1);
console.log(c1.name);


console.log(cources.includes( {id:1, name: 'a'})); //false

const c2 = cources.findIndex(function(key){
    return key.name === 'a';
})

console.log(c2);

const c3 = cources.find(key => key.name === 'a');
console.log(c3);


//remove the last element from an array and return the value
const num = [1,2,3,4];
let k1 = num.pop(); 
console.log(k1);

//remove the 1st elelement from an arrya and return the value
let k2 = num.shift(); 
console.log(k2);

//remove from the middle of the array
let num2 = [1,2,3,4,5,6];
num2.splice(2,3); //on 2nd position remove 3 elements
console.log(num2);
num2.splice(2);
console.log(num2);


/******************************************************************************** */

//To empty an array
//1. Blank array declaration ---> problem with the approach
// let num3 = num2;
// num2 = [];
// console.log(num2);
// console.log(num3);
//2. Using length -->Best way
// let num3 = num2;
// console.log(num3);
// num2.length = 0;
// console.log(num2);
// console.log(num3);
//3. using splice method
// let num3 = num2;
// console.log(num3);
// num2.splice(0,num2.length);
// console.log(num2);
// console.log(num3);
//4. POP method -----> more time consuming
// let num3 = num2;
// console.log(num3);
// while(num2.length > 0)
// {
//     num2.pop();
// }
// console.log(num2);
// console.log(num3);

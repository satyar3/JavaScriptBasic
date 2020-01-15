//Zero parameter function
function myFirstFunction(){
    console.log('Hello !!!')
}

//Call the function
myFirstFunction();


//Parametertized function
function greet(name){
    console.log('Saying helllo to '+name);
}

greet('Satya');

function greetAgeNum(name,age){
    console.log('Saying helllo to '+name+' with age '+age);
}

greetAgeNum('Satya',30);
greetAgeNum('test');


//return from a function
function addition(num1,num2){
    return num1+num2;
}

console.log(addition(10,23));

function sqRoot(num){
    let root = num*num;
    return root;
}

console.log(sqRoot(3));
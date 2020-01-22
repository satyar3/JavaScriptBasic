//For, while, do while, for...in, for...of
//infinite loop


//for loop
for(let i = 0; i<10; i++)
{
    if(i == 2)
        console.log('Hello --> '+i);
}
console.log('***************************************************');

//while loop
let i = 1;
while(i<5)
{
    console.log(i);
    i++;
}
console.log('***************************************************');

//do While loop  --> do while loop will get executed at least once
let j = 0;
do{
    console.log(j);
    j++
}while(j<5)
console.log('***************************************************');

//for in (just like for each loop in java) --> we can fetch values from objects
const person = {
    name: 'satya',
    age: 20
}
for (let key in person)
{
    console.log(key, person[key]); //--> Here key represts the set i.e. name:'satya' and age:20
}

console.log('***************************************************');
const colors = ['red', 'blue', 'green'];
for(let i in colors)
{
    //console.log(i);
    console.log(i, colors[i]);
}
console.log('***************************************************');

//for of --> this is specially used to get values from Array
for(let col of colors)
{
    console.log(col);
}
console.log('***************************************************');


//break and continue
console.log('***************************************************');
for(let k = 0; k<9; k++)
{
    //console.log('Before continue'+k);
    if(k === 7)
        break; //--> break will breakthe loop in case condition is satisfied
    else if (k == 4)
    {     
        continue; //--> continue will skip the remaining section of the loop if the condition is satisfied
    }
    console.log(k);
}
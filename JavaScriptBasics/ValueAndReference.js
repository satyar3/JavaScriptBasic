//value type :
//String, number, boolean, symbol, undefined, null

//Reference type :
//Object, Function, Array

let x = 10;
y = x; //value of x will be copied to x
x = 20;
console.log(x);
console.log(y);

let p = {
    value: 10
}

let q = p; //refernce of p will be copied
p.value = 20;
console.log(q.value);
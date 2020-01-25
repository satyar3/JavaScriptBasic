//This also produce objects
//Naming convention --> pascal case --> OneTwoThreeFour

function CircleFun(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('Draw '+radius);
    }
}

//How to call constructor function --> use new keyword
const a = new CircleFun(5);
console.log(a);
console.log(a.radius);
a.draw();
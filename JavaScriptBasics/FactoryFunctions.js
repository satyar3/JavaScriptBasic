//Factory functions : it produce objetcs
//we just need to define the template
//Naming convention --> camel case --> oneTwoThreeFour

function createCircle(radius) {
    //Object Template
    const circle = {
        radius,
        draw() {
            console.log('Draw ' + radius);
        }
    }

    return circle;
}

console.log('**************************************')
//object creation
let c1 = createCircle(1);
console.log(c1);
console.log(c1.radius);
c1.draw();
console.log('**************************************')
let c2 = createCircle(5);
console.log(c2);
console.log(c2.radius);
c2.draw();
console.log('**************************************')
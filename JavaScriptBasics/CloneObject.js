const circle = {
    radius : 1,
    draw(){
        console.log('Draw');
    }
};

//1 - for in loop
const newCircle = {};
for(let key in circle){
    newCircle[key] = circle[key];
}
console.log(newCircle);

//2 - using Object.assign()
const newCircle2 = Object.assign({}, circle);
console.log(newCircle2);


const newCircle4 = Object.assign({
    price : 1});

console.log(newCircle4);

const newCircle3 = Object.assign({
    price : 1}, circle
    );

console.log(newCircle3);
newCircle3.draw();

//3 - using spread... operator;
const newCircle5 = {...circle};
console.log(newCircle5);
newCircle5.draw();
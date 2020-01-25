//Dynamic nature of objects

const circle = {
    radius : 1,
    color : 'red',

    log : function(){
        console.log('log method');
    }
}

console.log(circle);

//Add some properties to object
circle.price = 100;
circle.draw = function(){
    console.log('draw method');
}
console.log(circle);

//Delete some properties from object
delete circle.price;
console.log(circle);
circle.log();
circle.draw();
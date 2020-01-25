//Variabe and functions should be defined
//variable and functions should be defined in key and value pair

const circle = {
    radius:1,
    isVisible:true,
    
    location : {
        x:1,
        y:1
    },

    draw : function (){
        console.log('draw') 
    }
}

console.log(circle.radius);
console.log(circle.location);
console.log(circle.draw);
console.log(circle);
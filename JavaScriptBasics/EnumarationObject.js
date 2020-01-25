//Enumating properties of a object
//i.e. get all the properties of the object

const circle = {
    radius : 1,
    draw :  function(){
        console.log('Draw');
    }
};

//1 - For In loop
for(key in circle){
    console.log(key+' '+circle[key]);
    console.log('***********************');
}


//2 - For of loop
for(let key of Object.keys(circle)){
    console.log(key+' '+circle[key]);
    console.log('***********************');
}

for(let entry of Object.entries(circle)){
    console.log(entry);
    console.log('***********************');
}

//3 - in operator
//check a proerty in an object
console.log('in operator');
console.log('radius' in circle);
console.log('price' in circle);
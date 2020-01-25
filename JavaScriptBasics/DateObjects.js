//Please follow the below URL:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const now = new Date();
console.log(now);
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.toDateString());
console.log(now.toTimeString());

const now1 = new Date('08-01-2016 00:10:22');
console.log(now1);

//JAN 0
//DEC 11
const now2 = new Date(2019, 4, 11, 9, 0);
console.log(now2);
console.log(now2.toDateString());
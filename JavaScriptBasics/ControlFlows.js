//If -- else

if(1>2)
    console.log('true');
else
    console.log('false');

if(1>2 && 1==2)
{
    console.log('true');
}
else if((1>2 && 1!=2))
{
    console.log('false');
}
else
    console.log('ffff');


//Switch Case

let role = 'guest1';
switch (role){
    case 'guest':
        console.log('guest');
        break;
    case 'admin':
        console.log('admin');
        break;
    default:
        console.log('default case');
}
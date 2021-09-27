var inch = 156;
var feet = inch/12;

console.log(feet, 'feet');



//...........use function............

function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var result = inchToFeet(156); //use multiple times
console.log(result);

//another way
var senior = [156, 288, 300];
var result2 = inchToFeet(senior[1]);
console.log(result2);
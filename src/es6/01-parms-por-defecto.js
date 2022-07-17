//Antes de es6
function person(name,age,country) {
    var name = name || ' Leonel';
    var age = age || 32;
    var country = country || 'MX'  
    console.log(name,age,country);  
}

person('',null,'');

//es6
function person2(name = 'Leonel',age = 32,country ='MX') {
    console.log(name,age,country);  
}
person2();
person2("Abel",9,"CO");


alert( "I'm JavaScript!" );

let admin, name;

name = "John";

admin = name;

alert( admin );

let name = prompt("What is your name?", "");
alert(name);

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b);
//if
'use strict';

let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}
let value = prompt('Type a number', 0);

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}
let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';
//logical operators
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}
//loops
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        alert( i );
    }
}
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}
//switch
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
        break;
}
//functions
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

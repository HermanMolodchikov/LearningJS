/*var age = 25;
var name =  "Owen";

if (age > 14) {
    alert("Sorry this page is for kids only!");
} else {
    alert("Welcome " + name + "!");
}

var winners = 2;
var name = "Duke";
var isElegible = false;

var joke = "JavaScript walked into a bar....";
var toldJoke = "false";
var $punchline = 
"Better watch out for those semi-colons."
var entage = 20;
var result
if (toldJoke == true) {
alert($punchline);
} else {
alert(joke);
}
*/
var scoops = 5;
while (scoops > 0) {
    document.write("another scoop!<br>");
    console.log("another scoop!" + scoops);
    scoops = scoops - 1;
}
document.write("life without ice creamisn't the saem <br>");

var numberOne = prompt("how a number", '');
document.write(numberOne + "<br>");
numberOne = confirm();
alert(numberOne);
document.write(numberOne + "<br>");

if (numberOne < 3) {
    document.write("NumberOne < 3");
} else if (numberOne > 0) {

}

var word = "bottles";
var count = prompt("How much of bottels", 3);

while (count > 0) {
    document.write(count + " " + word + "of beer on the wall<br>");
    document.write(count + " " + word + "of beer<br>");
    document.write("Take one down, pass it around,<br>");
    count = count - 1;

    if (count > 0) {
        document.write(count + " " + word + "of beer on the wall<br>");
    } else {
        document.write("No more " + word + "of beer on the wall<br>");
    }
}
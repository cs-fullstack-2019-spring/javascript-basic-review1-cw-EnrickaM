// Ask the user to input the temperature as a number (store in variable FTEMP), and convert it to celcius (store in variable CTEMP)

var FhTEMP = prompt("Enter FhTEMP ");
var CsTEMP = Math.round((FhTEMP - 32) * 5 / 9);
console.log("FhTEMP " == CsTEMP);

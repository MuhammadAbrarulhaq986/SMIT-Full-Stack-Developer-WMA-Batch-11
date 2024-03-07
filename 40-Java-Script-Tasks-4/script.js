//  ************************* Multiplication Table ******************************
var number = parseInt(prompt("Enter a number For Multiplication Tabl."));

// Printing logic
for (i = 1; i <= 10; i++) {
    document.getElementById("multiplication-table").innerHTML +=
        `${number} * ${i} = ${number * i} <br>`;
}
//  ************************* Multiplication Table ******************************

// *************************   Temperature Converter  Clesius to Fahrenheit *******************************************************
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

var celsius = parseInt(prompt("Enter Temperature For Celsius"));
var fahrenheit = celsiusToFahrenheit(celsius);
document.write(celsius, "degrees Celsius is equal to <br>", fahrenheit, "degrees Fahrenheit. <br>");


// *************************   Temperature Converter Fahrenhrit to Clesius  *******************************************************
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

var fahrenheit = parseInt(prompt("Enter Temperature For Fahrenheit"));
var celsius = fahrenheitToCelsius(fahrenheit);
document.write(fahrenheit, "degrees Fahrenheit is equal to <br>", celsius, "degrees Celsius. <br>");
// *************************   Temperature Converter  Completed *******************************************************


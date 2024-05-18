let displayScreen = document.getElementById("display-screen");
console.log(displayScreen);
let currentDisplay = "";

function btnClicker(str) {
    if (str === "/") {
        currentDisplay = currentDisplay + "/";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "%") {
        currentDisplay = currentDisplay + "%";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "+") {
        currentDisplay = currentDisplay + "+";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "-") {
        currentDisplay = currentDisplay + "-";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "*") {
        currentDisplay = currentDisplay + "*";
        displayScreen.innerHTML = currentDisplay;
    }
    //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    else if (str === "1") {
        currentDisplay = currentDisplay + "1";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "2") {
        currentDisplay = currentDisplay + "2";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "3") {
        currentDisplay = currentDisplay + "3";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "4") {
        currentDisplay = currentDisplay + "4";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "5") {
        currentDisplay = currentDisplay + "5";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "6") {
        currentDisplay = currentDisplay + "6";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "7") {
        currentDisplay = currentDisplay + "7";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "8") {
        currentDisplay = currentDisplay + "8";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "9") {
        currentDisplay = currentDisplay + "9";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "0") {
        currentDisplay = currentDisplay + "0";
        displayScreen.innerHTML = currentDisplay;
    }
    //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    else if (str === ".") {
        currentDisplay = currentDisplay + ".";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "AC") {
        currentDisplay = "";
        let noDisplay = "0";
        displayScreen.innerHTML = noDisplay
    } else {
        console.log("Button Function not Working");
    }
}
//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function result() {
    let finalResult = eval(currentDisplay);
    if (currentDisplay === "") {
        finalResult = 0;
        displayScreen.innerHTML = finalResult;
        return;
    }
    displayScreen.innerHTML = finalResult;
    currentDisplay = "";
}
document.write("<h1>Arrow function Nots/ Summary</h1>")
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// *********** GLOBAL OBJECT IS A WINDOW OBJECT *************************************************************

const user = {
    userName: "abrar",
    proce: 999,

    welcomeMessage: function () {
        console.log(`${this.userName} , Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "johan"
// user.welcomeMessage();

// console.log(this);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function chai() {
//     let userName = "abrar"
//     console.log(this.userName);
// }
// chai();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const chai = function () {
//             let userName = "abrar";
//         console.log(this.userName);
// }

// *********** BASIC ARROW FUNCTION *************************************************************

const chai = () => {
    let userName = "abrar";
    console.log(this);
}


// chai();

// ********** THIS METHOD IS CALLED   *************************************************************
// ***********    EXPLICIT RETURN  *************************************************************


// **** const addTwo = (num1, num2) => {      *************************************************************
// *********** return num1 + num2;            *************************************************************
// *********** }                              *************************************************************
// *********** PARATHESIS IS A MUST IF THERE IS A   *************************************************************
// ***********  RETURN   *************************************************************
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }



// ********** THIS METHOD IS CALLED   *************************************************************
// ***********     IMPLICIT RETURN  *************************************************************
// const addTwo = (num1, num2) =>  num1 + num2;

// *********** THIS METHOD IS MOSTLY USE IN REACT  ** ***********************************************************
// const addTwo = (num1, num2) => (num1 + num2);

//**** const addTwo = (num1, num2) => {userName: "abrar"}; ERROR  UNDIFINED *******************************************************************
const addTwo = (num1, num2) => ({ userName: "abrar" });

console.log(addTwo(3, 4));
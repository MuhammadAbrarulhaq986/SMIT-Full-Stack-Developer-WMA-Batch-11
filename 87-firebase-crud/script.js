// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, set, ref, get, remove, update } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWaEGuaZbXjEZXHSEWnucBLWOJ8IhFQJw",
    authDomain: "crudapp-2ae91.firebaseapp.com",
    projectId: "crudapp-2ae91",
    storageBucket: "crudapp-2ae91.appspot.com",
    messagingSenderId: "775317614518",
    appId: "1:775317614518:web:62d26b9ad5ef5b42415b17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const add_date = document.getElementById("add_date");
const notification = document.getElementById("notification");

function AddStudents() {
    // alert("GG"); To CHECK THE FUNCTION   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rollnumber = document.getElementById('rollnumber').value;
    // console.log(name, email, rollnumber); // * checking the functions and variables 
    set(ref(db, 'students/' + rollnumber), {
        name: name,
        email: email,
        rollnumber: rollnumber,
    })
    notification.innerText = "Added succesfully";
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('rollnumber').value = "";

    ReadData();

}
add_date.addEventListener('click', AddStudents)


//* READ DATA 
function ReadData() {
    const userRef = ref(db, "students/");

    get(userRef).then((snapshort => {
        // console.log(snapshort.val());//* TO CHECK IN CONSOLE

        const data = snapshort.val();
        const table = document.querySelector('table');
        let html = '';

        for (const key in data) {
            const { name, email, rollnumber } = data[key];
            // console.log(name); //* TO CHECK IN CONSOLE
            html += `<tr>       
            <td>${name}</td>
            <td>${email}</td>
            <td>${rollnumber}</td>
            <td><button class="del" onclick="deleteDate('${rollnumber}')">Delete</button></td>
            <td><button class="up" onclick="updateDate('${rollnumber}')">Update</button></td>
            </tr>`;
        }
        table.innerHTML = html;
    }))
}
ReadData();
//* deleteDate IS BECOME A GLOBAL SCOPE
window.deleteDate = function (rollnumber) {
    // alert(rollnumber); //* TO CHECK IN alert
    const userRef = ref(db, `students/${rollnumber}`);
    remove(userRef);
    notification.innerText = "Deleted succesfully";

    ReadData();
}
//* updateDate IS BECOME A GLOBAL SCOPE
window.updateDate = function (rollnumber) {
    // alert(rollnumber); //* TO CHECK IN alert
    const userRef = ref(db, `students/${rollnumber}`);

    get(userRef).then((item) => {
        // console.log(item.val()); //* TO CHECK IN CONSOLE
        document.getElementById('name').value = item.val().name;
        document.getElementById('email').value = item.val().email;
        document.getElementById('rollnumber').value = item.val().rollnumber;
    });

    document.querySelector('.update_Data').classList.add('show')

    const update_btn = document.querySelector('#update_data');

    update_btn.addEventListener('click', () => {
        // alert(''); //* TO CHECK IN alert
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const rollnumber = document.getElementById('rollnumber').value;

        update(ref(db), {
            [`students/${rollnumber}/name`]: name,
            [`students/${rollnumber}/email`]: email,
            [`students/${rollnumber}/rollnumber`]: rollnumber,
        }).then(() => {
            notification.innerText = "data Updated";
            document.querySelector('.update_Data').classList.remove('show');

            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('rollnumber').value = "";


            ReadData();
        })
    })
}
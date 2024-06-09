const products = {
    Apple: {
        Iphone6: {
            name: "Iphone 6",
            type: "Mobile",
            color: "Black",
            ram: "1gb",
            rom: "64gb",
            batteryTime: "1,810mAh",
            display: "4.7 inches",
            profilePicture: "./image/phoneNum-1.jpg",
            price: "43,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Iphone8: {
            name: "Iphone 8",
            type: "Mobile",
            color: "Gold",
            ram: "2gb",
            rom: "256gb",
            batteryTime: "1821mAh",
            display: "4.7 inches",
            profilePicture: "./image/phoneNum-2.jpg",
            price: "108,610",
            pta: true,
            avalaible: true,
            cart: false,
        },
        iphoneX: {
            name: "Iphone X",
            type: "Mobile",
            color: "White",
            ram: "3gb",
            rom: "256gb",
            batteryTime: "2716mAh",
            display: "5.8 inches",
            profilePicture: "./image/phoneNum-3.jpg",
            price: "144,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Iphone11: {
            name: "Iphone 11",
            type: "Mobile",
            color: "Gray",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "3110mAh",
            display: "5.8 inches",
            profilePicture: "./image/phoneNum-4.jpg",
            price: "178,000",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Iphone12: {
            name: "Iphone 12",
            type: "Mobile",
            color: "Gray",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "2815mAh",
            display: "6.1 inches",
            profilePicture: "./image/phoneNum-5.jpg",
            price: "179,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Iphone14: {
            name: "Iphone 14",
            type: "Mobile",
            color: "Gray",
            ram: "6gb",
            rom: "256gb",
            batteryTime: "3279mAh",
            display: "6.1 inches",
            profilePicture: "./image/phoneNum-6.jpg",
            price: "179,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
    },
    Samsung: {
        galaxy_S21: {
            name: "Galaxy S21",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "128gb",
            batteryTime: "4000mAh",
            display: "6.2 inches",
            profilePicture: "./image/phoneNum-7.jpg",
            price: "176,499",
            pta: true,
            avalaible: true,
            cart: false,
        },
        galaxy_A35: {
            name: "Galaxy A35",
            type: "Mobile",
            color: "Aqua",
            ram: "8gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.6 inches",
            profilePicture: "./image/phoneNum-8.jpg",
            price: "114,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        galaxy_A06: {
            name: "Galaxy A05",
            type: "Mobile",
            color: "Green",
            ram: "6gb",
            rom: "128gb",
            batteryTime: "5000mAh",
            display: "6.7 inches",
            profilePicture: "./image/phoneNum-9.jpg",
            price: "36,499",
            pta: true,
            avalaible: true,
            cart: false,
        },
    },
    Infinix: {
        hot_40_pro: {
            name: "Hot 40 Pro",
            type: "Mobile",
            color: "Black",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.78 inches",
            profilePicture: "./image/phoneNum-10.jpg",
            price: "45,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        note_40: {
            name: "Note 40",
            type: "Mobile",
            color: "Green",
            ram: "8gb",
            rom: "256gb",
            batteryTime: "2815mAh",
            display: "6.78 inches",
            profilePicture: "./image/phoneNum-11.jpg",
            price: "54,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        hot_30: {
            name: "Hot 30",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "128gb",
            batteryTime: "5000mAh",
            display: "6.78 inches",
            profilePicture: "./image/phoneNum-12.jpg",
            price: "34,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
    },
    Tecno: {
        pova_06_pro: {
            name: "Pova 06 Pro",
            type: "Mobile",
            color: "Silver",
            ram: "6gb",
            rom: "128gb",
            batteryTime: "6000mAh",
            display: "6.78 inches",
            profilePicture: "./image/phoneNum-13.jpg",
            price: "24,799",
            pta: true,
            avalaible: true,
            cart: false,
        },
        spark_20: {
            name: "Spark 20",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.6 inches",
            profilePicture: "./image/phoneNum-14.jpg",
            price: "31,799",
            pta: true,
            avalaible: true,
            cart: false,
        },
        camon_20: {
            name: "Camon 20",
            type: "Mobile",
            color: "Serenity Blue",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.67 inches",
            profilePicture: "./image/phoneNum-15.jpg",
            price: "41,499",
            pta: true,
            avalaible: true,
            cart: false,
        },
    },
};

const companySelect = document.getElementById("company");
const modelSelect = document.getElementById("model");
const list = document.getElementById("list");

for (let company in products) {
    let option = `
          <option value="${company}">${company}</option>
      `;
    companySelect.innerHTML += option;
}
const mobileImages = [
    "phoneNum-1.jpg",
    "phoneNum-2.jpg",
    "phoneNum-3.jpg",
    "phoneNum-4.jpg",
    "phoneNum-5.jpg",
    "phoneNum-6.jpg",
    "phoneNum-7.jpg",
    "phoneNum-8.jpg",
    "phoneNum-9.jpg",
    "phoneNum-10.jpg",
    "phoneNum-11.jpg",
    "phoneNum-12.jpg",
    "phoneNum-13.jpg",
    "phoneNum-14.jpg",
    "phoneNum-15.jpg"
];

let letModelIndex = 0;

for (let company in products) {
    for (let model in products[company]) {
        const mobile = products[company][model];
        let card = `<div class="card" style="width: 18rem";>
        <img src="./image/${mobileImages[letModelIndex % mobileImages.length]}" class="card-img-top" alt="phone";>
        <div class="card-body">
          <h5 class="card-title">${mobile.name}</h5>
          <p class="card-text">Price: ${mobile.price}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">storage: ${mobile.ram} / ${mobile.rom}</li>
          <li class="list-group-item">color: ${mobile.color}</li>
          <li class="list-group-item">display: ${mobile.display}</li>
        </ul>
      </div>`;
        list.innerHTML += card;
        letModelIndex++;
    }
}
function handleSelectCompany() {
    modelSelect.innerHTML = "";
    const company = companySelect.value;
    for (let model in products[company]) {
        let option = `
              <option value="${model}">${model}</option>
          `;
        modelSelect.innerHTML += option;
    }
}

// function search() {
//     const company = companySelect.value;
//     const model = modelSelect.value;

//     //TODO: add input validation

//     const mobile = products[company][model];
//     let card = `<div class="card" style="width: 18rem;">
//       <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${mobile.name}</h5>
//         <p class="card-text">Price: ${mobile.price}</p>
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">storage: ${mobile.ram} / ${mobile.rom}</li>
//         <li class="list-group-item">color: ${mobile.color}</li>
//         <li class="list-group-item">display: ${mobile.display}</li>
//       </ul>
//     </div>`;
//     list.innerHTML = card;
// }

function search() {
    //****** */ Get the selected company and model values from the dropdowns
    const company = companySelect.value;
    const model = modelSelect.value;

    //****** * Input validation: Check if company and model values are not empty or undefined
    if (!company || !model) {
        //****** * If either value is empty, alert the user to select a company and model
        alert("Please select a company and model.");
        return;
    }

    // ****** * Input validation: Check if the products object has a property with the selected company value
    // ****** * and if the company object has a property with the selected model value
    if (!products[company] || !products[company][model]) {
        // ****** If either property is missing, alert the user that the company or model is invalid
        alert("Invalid company or model. Please try again.");
        return;
    }

    // ****** * If input validation passes, get the mobile object from the products array
    const mobile = products[company][model];

    // ****** * Generate the card HTML using the mobile object properties
    let card = `<div id="card-color" class="card" style="width: 18rem;">
        <img src="./image/${mobileImages[letModelIndex % mobileImages.length]}" class="card-img-top" alt="phone">
      <div class="card-body">
        <h5 class="card-title">${mobile.name}</h5>
        <p class="card-text">Price: ${mobile.price}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">storage: ${mobile.ram} / ${mobile.rom}</li>
        <li class="list-group-item">color: ${mobile.color}</li>
        <li class="list-group-item">display: ${mobile.display}</li>
      </ul>
    </div>`;

    // Set the innerHTML of the list element to the generated card HTML
    list.innerHTML = card;
    letModelIndex++;

}
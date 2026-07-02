//Feature 1
//array with chef's spcial (name, description, price)

let dailySpecials = [
    { name: "Nyama Choma Platter", description: "Grilled beef served with kachumbari and ugali.", price: "Ksh 650" },
    { name: "Pilau Beef Special", description: "Fragrant spiced rice loaded with tender beef chunks.", price: "Ksh 350" },
    { name: "Grilled Tilapia", description: "Whole tilapia grilled and served with ugali and greens.", price: "Ksh 550" },
    { name: "Chef's Githeri Deluxe", description: "Githeri cooked with extra beef and avocado on the side.", price: "Ksh 200" },
    { name: "Ugali Sukuma Fish", description: "Ugali served with sukuma wiki and pan-fried omena.", price: "Ksh 300" }
];

// grab the container 
let specialsContainer = document.querySelector('#specials-container');

// loop through the array and add each special to the page
dailySpecials.forEach(function(special) {
    let specialCard = document.createElement('article');
    specialCard.classList.add('food-card');

    let specialName = document.createElement('h4');
    specialName.textContent = special.name;

    let specialDesc = document.createElement('p');
    specialDesc.textContent = special.description;

    let specialPrice = document.createElement('span');
    specialPrice.classList.add('price');
    specialPrice.textContent = special.price;

    specialCard.appendChild(specialName);
    specialCard.appendChild(specialDesc);
    specialCard.appendChild(specialPrice);

    specialsContainer.appendChild(specialCard);
});
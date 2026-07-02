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
//Feature 2- Adding and Removing elements
// grab the input, button, and list from the page
let favoriteInput = document.querySelector('#favorite-input');
let addFavoriteBtn = document.querySelector('#add-favorite-btn');
let favoritesList = document.querySelector('#favorites-list');

addFavoriteBtn.addEventListener('click', function(event) {
    // only add if the input is not empty
    if (favoriteInput.value != "") {
        console.log("You added: " + favoriteInput.value);

        // create a new list item with a delete button
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');

        li.textContent = favoriteInput.value;
        deleteButton.textContent = "Remove";
        deleteButton.classList.add('remove-btn');

        // event listener for the new delete button
        deleteButton.addEventListener('click', function(event) {
            li.remove();
        });

        // add the delete button inside the li
        li.appendChild(deleteButton);
        // add the li to the favorites list
        favoritesList.appendChild(li);

        // clear the input field
        favoriteInput.value = "";
    } else{
        alert("Please type a dish name first.");
    }
});

//3.Form Validation
let orderForm = document.querySelector('#order-form');
let formFeedback = document.querySelector('#form-feedback');

orderForm.addEventListener('submit', function(event) {
    // stop the form from submitting 
    event.preventDefault();

    // grab the form inputs
    let customerName = document.querySelector('#customer-name');
    let orderDate = document.querySelector('#order-date');
    let customerOrder = document.querySelector('#customer-order');

    // validation checks
    if (customerName.value == "") {
        formFeedback.textContent = "Please enter your name.";
        formFeedback.classList.add('error');
    } else if (orderDate.value == "") {
        formFeedback.textContent = "Please select a date.";
        formFeedback.classList.add('error');
    } else if (customerOrder.value == "") {
        formFeedback.textContent = "Please tell us what you would like to order.";
        formFeedback.classList.add('error');
    } else {
        // all fields filled in correctly
        formFeedback.textContent = "Thank you, " + customerName.value + "! Your order has been received.";
        formFeedback.classList.remove('error');
        formFeedback.classList.add('success');

        // clear the form
        customerName.value = "";
        orderDate.value = "";
        customerOrder.value = "";
    }
});
// Function to load shops from Firebase
function loadShops() {
    const shopList = document.getElementById('shopList');
    database.ref('shops').once('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            const shop = childSnapshot.val();
            const shopItem = document.createElement('div');
            shopItem.classList.add('shop-item');
            shopItem.innerHTML = `
                <h3>${shop.name}</h3>
                <p>${shop.description}</p>
                <p>Location: ${shop.location}</p>
            `;
            shopList.appendChild(shopItem);
        });
    });
}

// Function to load offers from Firebase
function loadOffers() {
    const offerList = document.getElementById('offerList');
    database.ref('offers').once('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            const offer = childSnapshot.val();
            const offerItem = document.createElement('div');
            offerItem.classList.add('offer-item');
            offerItem.innerHTML = `
                <h3>${offer.productName}</h3>
                <p>Price: $${offer.price}</p>
                <p>Category: ${offer.category}</p>
            `;
            offerList.appendChild(offerItem);
        });
    });
}

// Event listener for login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    // Implement login logic using Firebase authentication
    // Example: firebase.auth().signInWithEmailAndPassword(username, password)
    // Handle login success or failure
});

// Load initial data
document.addEventListener('DOMContentLoaded', () => {
    loadShops();
    loadOffers();
});

// Get all sections
const registerSection = document.getElementById("registerSection");
const loginSection = document.getElementById("loginSection");
const productsSection = document.getElementById("productsSection");
const waitingSection = document.getElementById("waitingSection");
const thankYouSection = document.getElementById("thankYouSection");
const qrPopup = document.getElementById("qrPopup");

// Check user state on page load
let loggedInUser = localStorage.getItem("loggedInUser");
const orderTimestamp = localStorage.getItem("orderTimestamp");
const waitingTime = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

// Initial state
if (!loggedInUser) {
    showRegister(); // Show register section by default
} else if (orderTimestamp) {
    checkOrderStatus();
} else {
    showProducts();
}

// Show register section
function showRegister() {
    registerSection.style.display = "block";
    loginSection.style.display = "none";
    productsSection.style.display = "none";
    waitingSection.style.display = "none";
    thankYouSection.style.display = "none";
}

// Show login section
function showLogin() {
    registerSection.style.display = "none";
    loginSection.style.display = "block";
    productsSection.style.display = "none";
    waitingSection.style.display = "none";
    thankYouSection.style.display = "none";
}

// Register function
function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const errorMessage = document.getElementById("registerErrorMessage");

    // Check if username or password is empty
    if (!username || !password) {
        errorMessage.innerText = "Please fill in all fields!";
        errorMessage.style.display = "block";
        return;
    }

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username already exists
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        errorMessage.innerText = "Username already exists!";
        errorMessage.style.display = "block";
        return;
    }

    // Add new user to the list
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    // Clear form and show login section
    document.getElementById("registerUsername").value = "";
    document.getElementById("registerPassword").value = "";
    errorMessage.style.display = "none";
    alert("Registration successful! Please login.");
    showLogin();
}

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if credentials match
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", username);
        loggedInUser = username;
        loginSection.style.display = "none";
        showProducts();
    } else {
        errorMessage.style.display = "block";
    }
}

// Show products section
function showProducts() {
    productsSection.style.display = "block";
    registerSection.style.display = "none";
    loginSection.style.display = "none";
    waitingSection.style.display = "none";
    thankYouSection.style.display = "none";
    document.getElementById("welcomeMessage").innerText = `Welcome, ${loggedInUser}!`;
}

// Logout function
function logout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("orderTimestamp");
    loggedInUser = null;
    productsSection.style.display = "none";
    waitingSection.style.display = "none";
    thankYouSection.style.display = "none";
    showLogin();
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("errorMessage").style.display = "none";
}

// Buy functionality
function buyCard(cardName, amount) {
    if (localStorage.getItem("orderTimestamp")) {
        alert("An order is already in progress. Please wait until it is processed.");
        return;
    }

    qrPopup.style.display = "block";
    document.getElementById("cardName").innerText = cardName;
    document.getElementById("amountToPay").innerText = amount;
}

// Close popup
function closePopup() {
    qrPopup.style.display = "none";
}

// Copy deposit address to clipboard
function copyAddress() {
    const depositAddress = document.getElementById("depositAddress").innerText;
    navigator.clipboard.writeText(depositAddress).then(() => {
        alert("Deposit address copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy address: " + err);
    });
}

// Confirm payment and start waiting time
function confirmPayment() {
    // Clear any existing orderTimestamp to ensure fresh start
    localStorage.removeItem("orderTimestamp");
    
    // Set new timestamp
    const currentTime = Date.now();
    localStorage.setItem("orderTimestamp", currentTime.toString());
    
    // Close popup and show waiting section
    closePopup();
    productsSection.style.display = "none";
    waitingSection.style.display = "block";
    thankYouSection.style.display = "none";
    
    // Start the timer
    startTimer();
}

// Check order status and handle timer
function checkOrderStatus() {
    const orderTime = parseInt(localStorage.getItem("orderTimestamp"));
    if (!orderTime) {
        // If no order timestamp, go back to products
        showProducts();
        return;
    }

    const currentTime = Date.now();
    const timeElapsed = currentTime - orderTime;

    if (timeElapsed >= waitingTime) {
        localStorage.removeItem("orderTimestamp");
        productsSection.style.display = "none";
        waitingSection.style.display = "none";
        thankYouSection.style.display = "block";
    } else {
        productsSection.style.display = "none";
        waitingSection.style.display = "block";
        thankYouSection.style.display = "none";
        startTimer();
    }
}

// Start the timer to show remaining time
function startTimer() {
    const timerElement = document.getElementById("timer");
    const orderTime = parseInt(localStorage.getItem("orderTimestamp"));

    if (!orderTime) {
        // If no order timestamp, go back to products
        showProducts();
        return;
    }

    const interval = setInterval(() => {
        const currentTime = Date.now();
        const timeElapsed = currentTime - orderTime;
        const timeRemaining = waitingTime - timeElapsed;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            localStorage.removeItem("orderTimestamp");
            productsSection.style.display = "none";
            waitingSection.style.display = "none";
            thankYouSection.style.display = "block";
        } else {
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            timerElement.innerText = `${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

// Go back to products after thank you
function goToProducts() {
    thankYouSection.style.display = "none";
    showProducts();
}

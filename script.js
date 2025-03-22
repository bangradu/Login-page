// Get all sections
const registerSection = document.getElementById("registerSection");
const loginSection = document.getElementById("loginSection");
const productsSection = document.getElementById("productsSection");
const waitingSection = document.getElementById("waitingSection");
const thankYouSection = document.getElementById("thankYouSection");
const qrPopup = document.getElementById("qrPopup");
const purchasedCardsList = document.getElementById("purchasedCardsList");
const messageContent = document.getElementById("messageContent");

// Check user state on page load
let loggedInUser = localStorage.getItem("loggedInUser");
let orders = JSON.parse(localStorage.getItem("orders")) || [];
const waitingTime = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
const failTime = 1 * 60 * 60 * 1000; // 1 hour in milliseconds

// Initial state
if (!loggedInUser) {
    showRegister(); // Show register section by default
} else {
    showProducts();
    displayPurchasedCards();
    checkAllOrders();
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

    try {
        // Get existing users from localStorage
        let users = [];
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            users = JSON.parse(storedUsers);
        }

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
    } catch (e) {
        console.error("Error saving user to localStorage:", e);
        errorMessage.innerText = "Failed to register. Please try again.";
        errorMessage.style.display = "block";
    }
}

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    try {
        // Get users from localStorage
        const storedUsers = localStorage.getItem("users");
        const users = storedUsers ? JSON.parse(storedUsers) : [];

        // Check if credentials match
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem("loggedInUser", username);
            loggedInUser = username;
            loginSection.style.display = "none";
            showProducts();
            displayPurchasedCards();
            checkAllOrders();
        } else {
            errorMessage.style.display = "block";
        }
    } catch (e) {
        console.error("Error retrieving users from localStorage:", e);
        errorMessage.innerText = "Failed to login. Please try again.";
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
    localStorage.removeItem("orders");
    loggedInUser = null;
    orders = [];
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
    const depositAddress = document.getElementById("depositAddress").innerText.trim(); // Trim to remove extra spaces
    navigator.clipboard.writeText(depositAddress).then(() => {
        alert("Deposit address copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy address: " + err);
    });
}

// Confirm payment and start waiting time
function confirmPayment() {
    const cardName = document.getElementById("cardName").innerText;
    const amount = document.getElementById("amountToPay").innerText;
    
    // Set new timestamp and initial payment status
    const currentTime = Date.now();
    const newOrder = {
        cardName: cardName,
        amount: amount,
        timestamp: currentTime,
        status: "Pending"
    };
    
    // Add to orders
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));
    
    // Close popup and show waiting section
    closePopup();
    productsSection.style.display = "none";
    waitingSection.style.display = "block";
    thankYouSection.style.display = "none";
    
    // Start the timer for this order
    startTimer(newOrder);
}

// Check all orders and handle timers
function checkAllOrders() {
    orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.forEach(order => {
        const currentTime = Date.now();
        const timeElapsed = currentTime - order.timestamp;

        // Check if payment should fail after 1 hour
        if (timeElapsed >= failTime && order.status === "Pending") {
            order.status = "Failed";
            localStorage.setItem("orders", JSON.stringify(orders));
        }

        // Check if order is complete after 6 hours
        if (timeElapsed >= waitingTime && order.status !== "Failed") {
            order.status = "Confirmed";
            localStorage.setItem("orders", JSON.stringify(orders));
        }

        // Update purchased cards list
        displayPurchasedCards();
    });
}

// Start the timer to show remaining time in waiting section
function startTimer(order) {
    const timerElement = document.getElementById("timer");
    const paymentStatusElement = document.getElementById("paymentStatus");

    const interval = setInterval(() => {
        const currentTime = Date.now();
        const timeElapsed = currentTime - order.timestamp;
        const timeRemaining = waitingTime - timeElapsed;

        // Update payment status
        if (timeElapsed >= failTime && order.status === "Pending") {
            order.status = "Failed";
            localStorage.setItem("orders", JSON.stringify(orders));
            displayPurchasedCards();
            clearInterval(interval);
            showProducts();
            return;
        }

        if (timeElapsed >= waitingTime) {
            order.status = "Confirmed";
            localStorage.setItem("orders", JSON.stringify(orders));
            displayPurchasedCards();
            clearInterval(interval);
            productsSection.style.display = "none";
            waitingSection.style.display = "none";
            thankYouSection.style.display = "block";
            return;
        }

        // Update timer and status display
        paymentStatusElement.innerText = order.status;
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        timerElement.innerText = `${hours}h ${minutes}m ${seconds}s`;

        // Keep checking all orders in background
        checkAllOrders();
    }, 1000);
}

// Start timer for a specific card in Purchased Cards section
function startCardTimer(order, timerElement) {
    const interval = setInterval(() => {
        const currentTime = Date.now();
        const timeElapsed = currentTime - order.timestamp;
        const timeRemaining = waitingTime - timeElapsed;

        if (timeElapsed >= failTime && order.status === "Pending") {
            order.status = "Failed";
            localStorage.setItem("orders", JSON.stringify(orders));
            displayPurchasedCards();
            clearInterval(interval);
            return;
        }

        if (timeElapsed >= waitingTime) {
            order.status = "Confirmed";
            localStorage.setItem("orders", JSON.stringify(orders));
            displayPurchasedCards();
            clearInterval(interval);
            return;
        }

        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        timerElement.innerText = `${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Display purchased cards
function displayPurchasedCards() {
    orders = JSON.parse(localStorage.getItem("orders")) || [];
    purchasedCardsList.innerHTML = "";
    orders.forEach(order => {
        // Create card item
        const cardItem = document.createElement("div");
        cardItem.classList.add("card-item");

        // Add card icon
        const cardIcon = document.createElement("img");
        cardIcon.classList.add("card-icon");
        cardIcon.src = "https://img.icons8.com/ios-filled/50/000000/credit-card.png"; // Placeholder card icon
        cardIcon.alt = "Card Icon";

        // Add card details
        const cardDetails = document.createElement("div");
        cardDetails.classList.add("card-details");
        cardDetails.innerText = `${order.cardName} - ${order.amount}`;

        // Add status label
        const statusLabel = document.createElement("span");
        statusLabel.classList.add("status-label");
        statusLabel.classList.add(`status-${order.status.toLowerCase()}`);
        statusLabel.innerText = order.status;

        // Create expandable content
        const expandContent = document.createElement("div");
        expandContent.classList.add("expand-content");
        expandContent.style.display = "block"; // By default open

        // Add payment pending message
        const paymentPending = document.createElement("p");
        paymentPending.classList.add("payment-pending");
        paymentPending.innerText = "Your payment is pending.";

        // Add payment status
        const paymentStatus = document.createElement("p");
        paymentStatus.innerHTML = `Payment Status: <span class="payment-status">${order.status}</span>`;

        // Add timer
        const timer = document.createElement("p");
        timer.innerHTML = `Time remaining: <span class="card-timer"></span>`;
        const timerElement = timer.querySelector(".card-timer");

        // Append expandable content
        expandContent.appendChild(paymentPending);
        expandContent.appendChild(paymentStatus);
        expandContent.appendChild(timer);

        // Append all elements to card item
        cardItem.appendChild(cardIcon);
        cardItem.appendChild(cardDetails);
        cardItem.appendChild(statusLabel);
        cardItem.appendChild(expandContent);

        // Start timer immediately since content is open by default
        if (order.status === "Pending") {
            startCardTimer(order, timerElement);
        }

        // Add click event to toggle expand content
        cardItem.addEventListener("click", () => {
            const isExpanded = expandContent.style.display === "block";
            expandContent.style.display = isExpanded ? "none" : "block";
        });

        purchasedCardsList.appendChild(cardItem);
    });
}

// Go back to products
function goToProducts() {
    thankYouSection.style.display = "none";
    waitingSection.style.display = "none";
    showProducts();
    displayPurchasedCards();
    checkAllOrders();
}

// Add click event for Message Box
messageContent.addEventListener("click", () => {
    messageContent.innerHTML = "<p>No messages</p>";
});

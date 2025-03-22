PK     �lvZ�]�"  "  
   index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order System</title>
    <script defer src="script.js"></script>
</head>
<body>
    <div id="registerSection">
        <h2>Register</h2>
        <input type="text" id="registerUsername" placeholder="Username">
        <input type="password" id="registerPassword" placeholder="Password">
        <button onclick="register()">Register</button>
        <p id="registerErrorMessage" style="display:none;color:red;"></p>
    </div>

    <div id="loginSection" style="display:none;">
        <h2>Login</h2>
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
        <button onclick="login()">Login</button>
        <p id="errorMessage" style="display:none;color:red;">Invalid credentials!</p>
    </div>

    <div id="productsSection" style="display:none;">
        <h2 id="welcomeMessage"></h2>
        <button onclick="logout()">Logout</button>
        <button onclick="buyCard('Premium Card', '$50')">Buy Premium Card</button>
    </div>

    <div id="waitingSection" style="display:none;">
        <h2>Order Processing</h2>
        <p>Time remaining: <span id="timer"></span></p>
    </div>

    <div id="thankYouSection" style="display:none;">
        <h2>Thank you for your order!</h2>
        <button onclick="goToProducts()">Go Back</button>
    </div>

    <div id="qrPopup" style="display:none;">
        <h2>Scan QR to Pay</h2>
        <p>Card: <span id="cardName"></span></p>
        <p>Amount: <span id="amountToPay"></span></p>
        <button onclick="confirmPayment()">Confirm Payment</button>
        <button onclick="closePopup()">Close</button>
    </div>
</body>
</html>
    PK     �lvZ's�`�  �  	   script.js
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
const waitingTime = 6 * 60 * 60 * 1000; // 6 hours

// Initial state
if (!loggedInUser) {
    showRegister();
} else if (orderTimestamp) {
    checkOrderStatus();
} else {
    showProducts();
}

function showRegister() {
    registerSection.style.display = "block";
    loginSection.style.display = "none";
    productsSection.style.display = "none";
    waitingSection.style.display = "none";
    thankYouSection.style.display = "none";
}

function showLogin() {
    registerSection.style.display = "none";
    loginSection.style.display = "block";
}

function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const errorMessage = document.getElementById("registerErrorMessage");

    if (!username || !password) {
        errorMessage.innerText = "Please fill in all fields!";
        errorMessage.style.display = "block";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.username === username)) {
        errorMessage.innerText = "Username already exists!";
        errorMessage.style.display = "block";
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    showLogin();
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(user => user.username === username && user.password === password)) {
        localStorage.setItem("loggedInUser", username);
        showProducts();
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}

function showProducts() {
    productsSection.style.display = "block";
    registerSection.style.display = "none";
    loginSection.style.display = "none";
    waitingSection.style.display = "none";
    thankYouSection.style.display = "none";
    document.getElementById("welcomeMessage").innerText = `Welcome, ${loggedInUser}!`;
}

function logout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("orderTimestamp");
    showLogin();
}

function buyCard(cardName, amount) {
    if (localStorage.getItem("orderTimestamp")) {
        alert("Order in progress. Please wait.");
        return;
    }

    qrPopup.style.display = "block";
    document.getElementById("cardName").innerText = cardName;
    document.getElementById("amountToPay").innerText = amount;
}

function closePopup() {
    qrPopup.style.display = "none";
}

function confirmPayment() {
    localStorage.setItem("orderTimestamp", Date.now().toString());
    closePopup();
    showWaitingSection();
}

function showWaitingSection() {
    productsSection.style.display = "none";
    waitingSection.style.display = "block";
    startTimer();
}

function checkOrderStatus() {
    const orderTime = parseInt(localStorage.getItem("orderTimestamp"));
    if (!orderTime) {
        showProducts();
        return;
    }

    const timeElapsed = Date.now() - orderTime;
    if (timeElapsed >= waitingTime) {
        localStorage.removeItem("orderTimestamp");
        showThankYouSection();
    } else {
        showWaitingSection();
    }
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    const orderTime = parseInt(localStorage.getItem("orderTimestamp"));
    if (!orderTime) {
        showProducts();
        return;
    }

    const interval = setInterval(() => {
        const timeRemaining = waitingTime - (Date.now() - orderTime);
        if (timeRemaining <= 0) {
            clearInterval(interval);
            localStorage.removeItem("orderTimestamp");
            showThankYouSection();
        } else {
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            timerElement.innerText = `${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

function showThankYouSection() {
    productsSection.style.display = "none";
    waitingSection.style.display = "none";
    thankYouSection.style.display = "block";
}

function goToProducts() {
    thankYouSection.style.display = "none";
    showProducts();
}
    PK     �lvZ�]�"  "  
           �    index.htmlPK     �lvZ's�`�  �  	           �J  script.jsPK      o   <    
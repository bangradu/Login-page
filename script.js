// List of 100+ cards with premium countries, Visa, MasterCard, and American Express
const cards = [
    { id: 1, flag: "🇺🇸", country: "USA", number: "522446", type: "CREDIT", brand: "MasterCard", level: "ELECTRONIC", expiry: "XX/23", valid: true, price: "$80", warranty: "100% Validated" },
    { id: 2, flag: "🇺🇸", country: "USA", number: "554900", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/26", valid: false, price: "$85", warranty: "100% Validated" },
    { id: 3, flag: "🇬🇧", country: "UK", number: "400570", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$60", risk: "Medium Risk" },
    { id: 4, flag: "🇬🇧", country: "UK", number: "400570", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$62", risk: "Medium Risk" },
    { id: 5, flag: "🇩🇪", country: "Germany", number: "506775", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/24", valid: false, price: "$90", warranty: "100% Validated" },
    { id: 6, flag: "🇩🇪", country: "Germany", number: "430675", type: "CREDIT", brand: "Visa", level: "PLATINUM", expiry: "XX/25", valid: false, price: "$92", warranty: "100% Validated" },
    { id: 7, flag: "🇫🇷", country: "France", number: "550209", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/28", valid: true, price: "$66", risk: "Low Risk" },
    { id: 8, flag: "🇫🇷", country: "France", number: "546325", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: true, price: "$68", risk: "Low Risk" },
    { id: 9, flag: "🇨🇦", country: "Canada", number: "491675", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/27", valid: false, price: "$88", warranty: "100% Validated" },
    { id: 10, flag: "🇨🇦", country: "Canada", number: "400881", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/25", valid: false, price: "$64", risk: "Medium Risk" },
    { id: 11, flag: "🇦🇺", country: "Australia", number: "833120", type: "UNKNOWN", brand: "Unknown", level: "N/A", expiry: "XX/24", valid: false, price: "$94", warranty: "100% Validated" },
    { id: 12, flag: "🇦🇺", country: "Australia", number: "483042", type: "CREDIT", brand: "Visa", level: "PLATINUM", expiry: "XX/24", valid: false, price: "$70", risk: "Low Risk" },
    { id: 13, flag: "🇺🇸", country: "USA", number: "374622", type: "CREDIT", brand: "American Express", level: "PLATINUM", expiry: "XX/25", valid: true, price: "$95", warranty: "100% Validated" },
    { id: 14, flag: "🇺🇸", country: "USA", number: "374623", type: "CREDIT", brand: "American Express", level: "GOLD", expiry: "XX/24", valid: false, price: "$90", warranty: "100% Validated" },
    { id: 15, flag: "🇯🇵", country: "Japan", number: "453201", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$65", risk: "Medium Risk" },
    { id: 16, flag: "🇯🇵", country: "Japan", number: "527890", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$70", risk: "Low Risk" },
    { id: 17, flag: "🇰🇷", country: "South Korea", number: "491672", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/25", valid: true, price: "$85", warranty: "100% Validated" },
    { id: 18, flag: "🇰🇷", country: "South Korea", number: "527891", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/24", valid: false, price: "$60", risk: "Medium Risk" },
    { id: 19, flag: "🇮🇹", country: "Italy", number: "453202", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/23", valid: true, price: "$62", risk: "Medium Risk" },
    { id: 20, flag: "🇮🇹", country: "Italy", number: "527892", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/26", valid: false, price: "$90", warranty: "100% Validated" },
    { id: 21, flag: "🇪🇸", country: "Spain", number: "453203", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$64", risk: "Medium Risk" },
    { id: 22, flag: "🇪🇸", country: "Spain", number: "527893", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$68", risk: "Low Risk" },
    { id: 23, flag: "🇨🇭", country: "Switzerland", number: "453204", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/26", valid: true, price: "$88", warranty: "100% Validated" },
    { id: 24, flag: "🇨🇭", country: "Switzerland", number: "527894", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$70", risk: "Low Risk" },
    { id: 25, flag: "🇳🇱", country: "Netherlands", number: "453205", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$60", risk: "Medium Risk" },
    { id: 26, flag: "🇳🇱", country: "Netherlands", number: "527895", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/25", valid: false, price: "$92", warranty: "100% Validated" },
    { id: 27, flag: "🇸🇪", country: "Sweden", number: "453206", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$62", risk: "Medium Risk" },
    { id: 28, flag: "🇸🇪", country: "Sweden", number: "527896", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$66", risk: "Low Risk" },
    { id: 29, flag: "🇳🇴", country: "Norway", number: "453207", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/24", valid: true, price: "$90", warranty: "100% Validated" },
    { id: 30, flag: "🇳🇴", country: "Norway", number: "527897", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$68", risk: "Low Risk" },
    { id: 31, flag: "🇩🇰", country: "Denmark", number: "453208", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$64", risk: "Medium Risk" },
    { id: 32, flag: "🇩🇰", country: "Denmark", number: "527898", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/27", valid: false, price: "$94", warranty: "100% Validated" },
    { id: 33, flag: "🇫🇮", country: "Finland", number: "453209", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$60", risk: "Medium Risk" },
    { id: 34, flag: "🇫🇮", country: "Finland", number: "527899", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$66", risk: "Low Risk" },
    { id: 35, flag: "🇮🇪", country: "Ireland", number: "453210", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/26", valid: true, price: "$88", warranty: "100% Validated" },
    { id: 36, flag: "🇮🇪", country: "Ireland", number: "527900", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$70", risk: "Low Risk" },
    { id: 37, flag: "🇧🇪", country: "Belgium", number: "453211", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$62", risk: "Medium Risk" },
    { id: 38, flag: "🇧🇪", country: "Belgium", number: "527901", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/25", valid: false, price: "$92", warranty: "100% Validated" },
    { id: 39, flag: "🇦🇹", country: "Austria", number: "453212", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$64", risk: "Medium Risk" },
    { id: 40, flag: "🇦🇹", country: "Austria", number: "527902", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$68", risk: "Low Risk" },
    { id: 41, flag: "🇸🇬", country: "Singapore", number: "453213", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/24", valid: true, price: "$90", warranty: "100% Validated" },
    { id: 42, flag: "🇸🇬", country: "Singapore", number: "527903", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$70", risk: "Low Risk" },
    { id: 43, flag: "🇳🇿", country: "New Zealand", number: "453214", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$60", risk: "Medium Risk" },
    { id: 44, flag: "🇳🇿", country: "New Zealand", number: "527904", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/27", valid: false, price: "$94", warranty: "100% Validated" },
    { id: 45, flag: "🇦🇪", country: "UAE", number: "453215", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$62", risk: "Medium Risk" },
    { id: 46, flag: "🇦🇪", country: "UAE", number: "527905", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$66", risk: "Low Risk" },
    { id: 47, flag: "🇸🇦", country: "Saudi Arabia", number: "453216", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/26", valid: true, price: "$88", warranty: "100% Validated" },
    { id: 48, flag: "🇸🇦", country: "Saudi Arabia", number: "527906", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$70", risk: "Low Risk" },
    { id: 49, flag: "🇶🇦", country: "Qatar", number: "453217", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$60", risk: "Medium Risk" },
    { id: 50, flag: "🇶🇦", country: "Qatar", number: "527907", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/25", valid: false, price: "$92", warranty: "100% Validated" },
    { id: 51, flag: "🇮🇱", country: "Israel", number: "453218", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$64", risk: "Medium Risk" },
    { id: 52, flag: "🇮🇱", country: "Israel", number: "527908", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$68", risk: "Low Risk" },
    { id: 53, flag: "🇺🇸", country: "USA", number: "374624", type: "CREDIT", brand: "American Express", level: "PLATINUM", expiry: "XX/25", valid: true, price: "$95", warranty: "100% Validated" },
    { id: 54, flag: "🇺🇸", country: "USA", number: "374625", type: "CREDIT", brand: "American Express", level: "GOLD", expiry: "XX/24", valid: false, price: "$90", warranty: "100% Validated" },
    { id: 55, flag: "🇬🇧", country: "UK", number: "453219", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$65", risk: "Medium Risk" },
    { id: 56, flag: "🇬🇧", country: "UK", number: "527909", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$70", risk: "Low Risk" },
    { id: 57, flag: "🇩🇪", country: "Germany", number: "453220", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/25", valid: true, price: "$85", warranty: "100% Validated" },
    { id: 58, flag: "🇩🇪", country: "Germany", number: "527910", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/24", valid: false, price: "$60", risk: "Medium Risk" },
    { id: 59, flag: "🇫🇷", country: "France", number: "453221", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/23", valid: true, price: "$62", risk: "Medium Risk" },
    { id: 60, flag: "🇫🇷", country: "France", number: "527911", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/26", valid: false, price: "$90", warranty: "100% Validated" },
    { id: 61, flag: "🇨🇦", country: "Canada", number: "453222", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$64", risk: "Medium Risk" },
    { id: 62, flag: "🇨🇦", country: "Canada", number: "527912", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$68", risk: "Low Risk" },
    { id: 63, flag: "🇦🇺", country: "Australia", number: "453223", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/26", valid: true, price: "$88", warranty: "100% Validated" },
    { id: 64, flag: "🇦🇺", country: "Australia", number: "527913", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$70", risk: "Low Risk" },
    { id: 65, flag: "🇯🇵", country: "Japan", number: "453224", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$60", risk: "Medium Risk" },
    { id: 66, flag: "🇯🇵", country: "Japan", number: "527914", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/25", valid: false, price: "$92", warranty: "100% Validated" },
    { id: 67, flag: "🇰🇷", country: "South Korea", number: "453225", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$62", risk: "Medium Risk" },
    { id: 68, flag: "🇰🇷", country: "South Korea", number: "527915", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$66", risk: "Low Risk" },
    { id: 69, flag: "🇮🇹", country: "Italy", number: "453226", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/24", valid: true, price: "$90", warranty: "100% Validated" },
    { id: 70, flag: "🇮🇹", country: "Italy", number: "527916", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$68", risk: "Low Risk" },
    { id: 71, flag: "🇪🇸", country: "Spain", number: "453227", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$64", risk: "Medium Risk" },
    { id: 72, flag: "🇪🇸", country: "Spain", number: "527917", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/27", valid: false, price: "$94", warranty: "100% Validated" },
    { id: 73, flag: "🇨🇭", country: "Switzerland", number: "453228", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$60", risk: "Medium Risk" },
    { id: 74, flag: "🇨🇭", country: "Switzerland", number: "527918", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$66", risk: "Low Risk" },
    { id: 75, flag: "🇳🇱", country: "Netherlands", number: "453229", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/26", valid: true, price: "$88", warranty: "100% Validated" },
    { id: 76, flag: "🇳🇱", country: "Netherlands", number: "527919", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$70", risk: "Low Risk" },
    { id: 77, flag: "🇸🇪", country: "Sweden", number: "453230", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$62", risk: "Medium Risk" },
    { id: 78, flag: "🇸🇪", country: "Sweden", number: "527920", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/25", valid: false, price: "$92", warranty: "100% Validated" },
    { id: 79, flag: "🇳🇴", country: "Norway", number: "453231", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$64", risk: "Medium Risk" },
    { id: 80, flag: "🇳🇴", country: "Norway", number: "527921", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$68", risk: "Low Risk" },
    { id: 81, flag: "🇩🇰", country: "Denmark", number: "453232", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/24", valid: true, price: "$90", warranty: "100% Validated" },
    { id: 82, flag: "🇩🇰", country: "Denmark", number: "527922", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$70", risk: "Low Risk" },
    { id: 83, flag: "🇫🇮", country: "Finland", number: "453233", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$60", risk: "Medium Risk" },
    { id: 84, flag: "🇫🇮", country: "Finland", number: "527923", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/27", valid: false, price: "$94", warranty: "100% Validated" },
    { id: 85, flag: "🇮🇪", country: "Ireland", number: "453234", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$62", risk: "Medium Risk" },
    { id: 86, flag: "🇮🇪", country: "Ireland", number: "527924", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$66", risk: "Low Risk" },
    { id: 87, flag: "🇧🇪", country: "Belgium", number: "453235", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/26", valid: true, price: "$88", warranty: "100% Validated" },
    { id: 88, flag: "🇧🇪", country: "Belgium", number: "527925", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$70", risk: "Low Risk" },
    { id: 89, flag: "🇦🇹", country: "Austria", number: "453236", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$60", risk: "Medium Risk" },
    { id: 90, flag: "🇦🇹", country: "Austria", number: "527926", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/25", valid: false, price: "$92", warranty: "100% Validated" },
    { id: 91, flag: "🇸🇬", country: "Singapore", number: "453237", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$64", risk: "Medium Risk" },
    { id: 92, flag: "🇸🇬", country: "Singapore", number: "527927", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$68", risk: "Low Risk" },
    { id: 93, flag: "🇳🇿", country: "New Zealand", number: "453238", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/24", valid: true, price: "$90", warranty: "100% Validated" },
    { id: 94, flag: "🇳🇿", country: "New Zealand", number: "527928", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$70", risk: "Low Risk" },
    { id: 95, flag: "🇦🇪", country: "UAE", number: "453239", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$60", risk: "Medium Risk" },
    { id: 96, flag: "🇦🇪", country: "UAE", number: "527929", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/27", valid: false, price: "$94", warranty: "100% Validated" },
    { id: 97, flag: "🇸🇦", country: "Saudi Arabia", number: "453240", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$62", risk: "Medium Risk" },
    { id: 98, flag: "🇸🇦", country: "Saudi Arabia", number: "527930", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/25", valid: false, price: "$66", risk: "Low Risk" },
    { id: 99, flag: "🇶🇦", country: "Qatar", number: "453241", type: "CREDIT", brand: "Visa", level: "PREMIER", expiry: "XX/26", valid: true, price: "$88", warranty: "100% Validated" },
    { id: 100, flag: "🇶🇦", country: "Qatar", number: "527931", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$70", risk: "Low Risk" },
    { id: 101, flag: "🇮🇱", country: "Israel", number: "453242", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/24", valid: true, price: "$60", risk: "Medium Risk" },
    { id: 102, flag: "🇮🇱", country: "Israel", number: "527932", type: "CREDIT", brand: "MasterCard", level: "PLATINUM", expiry: "XX/25", valid: false, price: "$92", warranty: "100% Validated" },
    { id: 103, flag: "🇺🇸", country: "USA", number: "374626", type: "CREDIT", brand: "American Express", level: "PLATINUM", expiry: "XX/25", valid: true, price: "$95", warranty: "100% Validated" },
    { id: 104, flag: "🇺🇸", country: "USA", number: "374627", type: "CREDIT", brand: "American Express", level: "GOLD", expiry: "XX/24", valid: false, price: "$90", warranty: "100% Validated" },
    { id: 105, flag: "🇬🇧", country: "UK", number: "453243", type: "CREDIT", brand: "Visa", level: "N/A", expiry: "XX/26", valid: true, price: "$65", risk: "Medium Risk" },
    { id: 106, flag: "🇬🇧", country: "UK", number: "527933", type: "CREDIT", brand: "MasterCard", level: "N/A", expiry: "XX/27", valid: false, price: "$70", risk: "Low Risk" }
];

// Load saved username and password from LocalStorage
window.onload = function() {
    setTimeout(function() {
        document.getElementById("loading").style.display = "none";
        document.getElementById("loginContainer").style.display = "block";
    }, 2000);

    // Check if username and password are saved in LocalStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
    }
    if (savedPassword) {
        document.getId("password").value = savedPassword;
    }

    // Load all cards
    const cardsTableBody = document.getElementById("cardsTableBody");
    cards.forEach(card => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${card.flag}</td>
            <td>${card.country}</td>
            <td>${card.number}</td>
            <td class="card-type">
                ${card.brand === "Visa" ? '<img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa">' : 
                card.brand === "MasterCard" ? '<img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard">' : 
                card.brand === "American Express" ? '<img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="American Express">' : 
                '<img src="https://via.placeholder.com/20" alt="Unknown">'} 
                ${card.type}
            </td>
            <td>${card.level}</td>
            <td>${card.expiry}</td>
            <td class="${card.valid ? 'valid' : 'invalid'}">${card.valid ? '✔️' : '❌'}</td>
            <td>${card.price} ${card.risk ? `(${card.risk})` : card.warranty ? `(${card.warranty})` : ''}</td>
            <td><button class="buy-now-btn" onclick="buyNow(${card.id})">Buy Now</button></td>
        `;
        cardsTableBody.appendChild(row);
    });
};

// Save username and password to LocalStorage on form submit
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Access Granted! Credentials saved.");
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("cardsTableSection").style.display = "block";
    document.getElementById("supportSection").style.display = "block";
});

// Toggle Password Visibility
function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Buy Now
function buyNow(cardId) {
    const paymentPopup = document.getElementById("paymentPopup");
    paymentPopup.style.display = "flex";
}

// Close payment popup
function closePaymentPopup() {
    const paymentPopup = document.getElementById("paymentPopup");
    paymentPopup.style.display = "none";
}

// Open Chat Login Popup
function openChatLogin() {
    const chatLoginPopup = document.getElementById("chatLoginPopup");
    chatLoginPopup.style.display = "flex";
    setTimeout(() => {
        chatLoginPopup.style.display = "none";
    }, 3000);
}

// Open Message Login Popup
function openMessageLogin() {
    const messageLoginPopup = document.getElementById("messageLoginPopup");
    messageLoginPopup.style.display = "flex";
}

// Message Login Form
document.getElementById("messageLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Messages Access Granted!");
    document.getElementById("messageLoginPopup").style.display = "none";
});

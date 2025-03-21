function generateCaptcha() {
    let captcha = Math.random().toString(36).substring(2, 8).toUpperCase();
    document.getElementById("captcha-text").innerText = captcha;
    document.getElementById("captcha-input").value = "";
    return captcha;
}

let generatedCaptcha = generateCaptcha();

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let userCaptcha = document.getElementById("captcha-input").value.toUpperCase();

    if (userCaptcha === generatedCaptcha) {
        alert("Login Successful!");
    } else {
        alert("Incorrect Captcha! Please try again.");
        generatedCaptcha = generateCaptcha();
    }
});

// thankyou 

// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param) || "Not provided";
}

// Populate fields with form data
document.getElementById("firstName").textContent = getQueryParam("first-name");
document.getElementById("lastName").textContent = getQueryParam("last-name");
document.getElementById("email").textContent = getQueryParam("email");
document.getElementById("mobile").textContent = getQueryParam("phone");
document.getElementById("business").textContent = getQueryParam("org-name");
document.getElementById("timestamp").textContent = getQueryParam("timestamp");

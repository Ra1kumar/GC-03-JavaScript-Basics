// Access all h2 elements
let details = document.getElementsByTagName("h2");

// Store student data
let name = prompt("Enter your name:");
let dob = prompt("Enter your date of birth:");
let email = prompt("Enter your email:");
let phone = prompt("Enter your phone number:");
let address = prompt("Enter your address:");

// Update HTML using JS only
details[0].innerText = "Name: " + name;
details[1].innerText = "DOB: " + dob;
details[2].innerText = "Email: " + email;
details[3].innerText = "Phone Number: " + phone;
details[4].innerText = "Address: " + address;

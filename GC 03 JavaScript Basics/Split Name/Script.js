// Take full name from user
let fullName = prompt("Enter your full name:");

// 1. Remove extra white spaces from beginning and end
fullName = fullName.trim();

// 2. Split into first and last name
let nameParts = fullName.split(" ");
let firstName = nameParts[0];
let lastName = nameParts[nameParts.length - 1];

// 3. Capitalize first letter of both names
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

// Display output on the page
document.body.innerHTML = `
  <h2>First Name: ${firstName}</h2>
  <h2>Last Name: ${lastName}</h2>
`;

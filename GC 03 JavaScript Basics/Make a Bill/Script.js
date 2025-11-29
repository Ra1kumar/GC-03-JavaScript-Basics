// your code goes here
// Get the solution span from HTML
const solution = document.getElementById("solution");

// Take number of items from user
let n = parseInt(prompt("Enter total number of items:"));

let total = 0;
let billHTML = "";

// h2 for BILL
billHTML += "<h2>BILL</h2>";

// Get item details
for (let i = 0; i < n; i++) {
  let itemName = prompt("Enter item name:");
  let itemPrice = parseInt(prompt("Enter item price:"));

  total += itemPrice;

  // h4 for each item
  billHTML += `<h4>${itemName}: ${itemPrice}</h4>`;
}

// Separator
billHTML += "<hr>";

// h3 for TOTAL
billHTML += `<h3>TOTAL: ${total}</h3>`;

// Insert under existing h1 (inside span)
solution.innerHTML = billHTML;

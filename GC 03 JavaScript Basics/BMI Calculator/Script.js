// Take input from user
let weight = parseFloat(prompt("Enter weight in kg:"));
let height = parseFloat(prompt("Enter height in meters:"));

// Calculate BMI
let bmi = weight / (height * height);

// Round BMI to 1 decimal
bmi = bmi.toFixed(1);

// Determine BMI category
let result = "";

if (bmi <= 18.4) {
  result = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  result = "Normal";
} else if (bmi >= 25 && bmi <= 29.9) {
  result = "Overweight";
} else {
  result = "Obese";
}

// Display result
console.log("BMI:", bmi);
console.log(result);

// Optional: Show on webpage if needed
document.body.innerHTML = `<h3>BMI: ${bmi}</h3><h2>${result}</h2>`;

// =======================
// 🎯 Part 1: Basics
// =======================

let username = "Flauzie";
let age = 19;

// Conditionals example
if (age >= 18) {
  document.getElementById("part1Output").textContent =
    `Hello ${username}, you're an adult!`;
} else {
  document.getElementById("part1Output").textContent =
    `Hi ${username}, you're still a minor.`;
}

// =======================
// ❤️ Part 2: Functions
// =======================

// Function 1: Greeting
function greetUser() {
  const message = `Welcome, ${username}! Have a great day!`;
  document.getElementById("greetOutput").textContent = message;
}

// Function 2: Total calculator
function calculateTotal(a, b) {
  const total = a + b;
  document.getElementById("totalOutput").textContent =
    `The total of ${a} + ${b} is ${total}`;
}

// =======================
// 🔁 Part 3: Loops
// =======================

// Loop 1: Countdown using for loop
function countdown() {
  const countdownList = document.getElementById("countdownList");
  countdownList.innerHTML = ""; // Clear previous

  for (let i = 5; i > 0; i--) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    countdownList.appendChild(li);
  }
}

// Loop 2: List items using forEach
function listFruits() {
  const fruits = ["Mango", "Banana", "Apple", "Pineapple"];
  const fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = ""; // Clear previous

  fruits.forEach((fruit) => {
    let li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });
}

// =======================
// 🌐 Part 4: DOM Manipulation
// =======================

// DOM 1: Toggle class (color)
function toggleColor() {
  const box = document.getElementById("colorBox");
  box.style.backgroundColor =
    box.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
}

// DOM 2: Add new element
function addElement() {
  const container = document.getElementById("newElementsContainer");
  let newP = document.createElement("p");
  newP.textContent = "🎉 New element added!";
  container.appendChild(newP);
}

// DOM 3 is already demonstrated in greeting, total, and loops
// where we use `document.getElementById(...).textContent`

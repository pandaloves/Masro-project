"use strict";

const restaurantName = "Danli";
var order = [];

window.addEventListener("DOMContentLoaded", function () {
  updateCart();

  // Add the Cancel link event
  const lnkCancel = document.querySelector("#lnkStartOver");
  lnkCancel.addEventListener("click", function () {
    const areYouSure = confirm("Är du säker på att avbryta beställningen?");
    if (areYouSure) {
      order = [];
      updateCart();
    }
  });

  // Add the meals click funciton
  const meals = document.querySelectorAll(".meal");
  for (let meal of meals) {
    meal.addEventListener("click", function () {
      let title = this.dataset.title;
      order.push(title);
      updateCart();
    });
  }
});

// Add the update cart function
function updateCart() {
  let html = "";
  for (let meal of order) {
    html += "<li>" + meal + "</li>";
  }
  const ul = document.querySelector("#cart ul");
  ul.innerHTML = html;

  const cart = document.querySelector("#cart");
  if (order.length == 0) {
    cart.style.backgroundColor = "#C8C8C8";
  } else {
    cart.style.backgroundColor = " rgb(40, 40, 172)";
  }
}

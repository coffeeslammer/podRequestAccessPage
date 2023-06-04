"use strict";

const form = document.getElementById("form");
const error = document.getElementById("error");
const email = document.getElementById("email");

let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

function submitting(e) {
  e.preventDefault();

  if (!regex.test(email.value)) {
    error.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
  }
}
form.addEventListener("submit", submitting);

"use strict";

const btn = document.querySelector(".btn");
const email = document.querySelector("#email");
const error = document.querySelector("#error");
const mailRegex = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;

btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (mailRegex.test(email.value)) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
});

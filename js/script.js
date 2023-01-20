// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: conor-otoole
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-02/sw.js", {
    scope: "/ICS2O-Unit5-02/",
  })
}

const randomNumberPos = Math.floor(Math.random() * 6) + 1
const randomNumberNeg = Math.floor(Math.random() * -6) + 1

/**
 * This function displays positive and negative number
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById("flash1").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "Your random number is: " + randomNumberPos + "."
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "Your random number is: " + randomNumberNeg + "."
  }
}
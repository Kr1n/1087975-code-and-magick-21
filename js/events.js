"use strict";

(function () {

  // ========================== Close\Open Events ========================
  var setupOpen = document.querySelector(".setup-open");
  var setup = document.querySelector(".setup");
  var setupClose = setup.querySelector(".setup-close");
  var userNameInput = document.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.target !== userNameInput && evt.key === "Escape") {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove("hidden");
    document.addEventListener("keydown", onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add("hidden");
    document.removeEventListener("keydown", onPopupEscPress);
  };

  setupOpen.addEventListener("click", function () {
    openPopup();
  });

  setupOpen.addEventListener("keydown", function (evt) {
    if (evt.key === "Enter") {
      openPopup();
    }
  });

  setupClose.addEventListener("click", function () {
    closePopup();
  });

  setupClose.addEventListener("keydown", function (evt) {
    if (evt.key === "Enter") {
      closePopup();
    }
  });

  // ========================== Click Events ========================

  var wizardCoat = document.querySelector(".setup-wizard .wizard-coat");
  function changeCoatColor() {
    var coatColor = window.randomData.getRandomCoatColor();
    console.log(coatColor);
    wizardCoat.style.fill = coatColor;

    var coatInput = document.getElementsByName("coat-color");
    coatInput[0].value = coatColor;
  }
  wizardCoat.addEventListener("click", changeCoatColor);


  var wizardEyes = document.querySelector(".setup-wizard .wizard-eyes");
  function changeEyesColor() {
    var eyesColor = window.randomData.getRandomEyesColor();
    wizardEyes.style.fill = eyesColor;

    var eyesInput = document.getElementsByName("eyes-color");
    eyesInput[0].value = eyesColor;
  }
  wizardEyes.addEventListener("click", changeEyesColor);


  var wizardFireball = document.querySelector(".setup-fireball-wrap");
  function changeFireballColor() {
    var fireballColor = window.randomData.getRandomFireballColor();
    wizardFireball.style.background = fireballColor;

    var fireballInput = document.getElementsByName("fireball-color");
    fireballInput[0].value = fireballColor;
  }
  wizardFireball.addEventListener("click", changeFireballColor);
})();

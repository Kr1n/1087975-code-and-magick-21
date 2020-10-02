"use strict";

var userDialog = document.querySelector(".setup");
userDialog.classList.remove("hidden");

var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var WIZARD_SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var WIZARD_COAT_COLORS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)" ,"rgb(0, 0, 0)"];
var WIZARD_EYES_COLORS = ["black", "red", "blue", "yellow", "green"];
var WIZARD_FIREBALL_COLORS = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var wizards = [
{
  name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)],
  surname: WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)],
  coatColor: WIZARD_COAT_COLORS[getRandomInt(WIZARD_COAT_COLORS.length)],
  eyesColor: WIZARD_EYES_COLORS[getRandomInt(WIZARD_EYES_COLORS.length)],
},
{
  name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)],
  surname: WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)],
  coatColor: WIZARD_COAT_COLORS[getRandomInt(WIZARD_COAT_COLORS.length)],
  eyesColor: WIZARD_EYES_COLORS[getRandomInt(WIZARD_EYES_COLORS.length)],
},
{
  name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)],
  surname: WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)],
  coatColor: WIZARD_COAT_COLORS[getRandomInt(WIZARD_COAT_COLORS.length)],
  eyesColor: WIZARD_EYES_COLORS[getRandomInt(WIZARD_EYES_COLORS.length)],
},
{
  name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)],
  surname: WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)],
  coatColor: WIZARD_COAT_COLORS[getRandomInt(WIZARD_COAT_COLORS.length)],
  eyesColor: WIZARD_EYES_COLORS[getRandomInt(WIZARD_EYES_COLORS.length)],
}];

var similarListElement = userDialog.querySelector(".setup-similar-list");
var similarWizardTemplate = document.querySelector("#similar-wizard-template");

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true).content;
  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name + " " + wizard.surname;
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector(".setup-similar").classList.remove("hidden");

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
    var eyesCoat = WIZARD_COAT_COLORS[getRandomInt(WIZARD_COAT_COLORS.length)];
  wizardCoat.style.fill = eyesCoat;

  var coatInput = document.getElementsByName("coat-color");
  coatInput[0].value = eyesCoat;
}
wizardCoat.addEventListener("click", changeCoatColor);


var wizardEyes = document.querySelector(".setup-wizard .wizard-eyes");
function changeEyesColor() {
  var eyesColor = WIZARD_EYES_COLORS[getRandomInt(WIZARD_EYES_COLORS.length)];
  wizardEyes.style.fill = eyesColor;

  var eyesInput = document.getElementsByName("eyes-color");
  eyesInput[0].value = eyesColor;
}
wizardEyes.addEventListener("click", changeEyesColor);


var wizardFireball = document.querySelector(".setup-fireball-wrap");
function changeFireballColor() {
  var fireballColor = WIZARD_FIREBALL_COLORS[getRandomInt(WIZARD_FIREBALL_COLORS.length)];
  wizardFireball.style.background = fireballColor;

  var fireballInput = document.getElementsByName("fireball-color");
  fireballInput[0].value = fireballColor;
}
wizardFireball.addEventListener("click", changeFireballColor);



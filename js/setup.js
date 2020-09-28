"use strict";

var userDialog = document.querySelector(".setup");
userDialog.classList.remove("hidden");

var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var WIZARD_SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var WIZARD_COAT_COLORS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)" ,"rgb(0, 0, 0)"];
var WIZARD_EYES_COLORS = ["black", "red", "blue", "yellow", "green"];

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

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template');

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true).content;

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + " " + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
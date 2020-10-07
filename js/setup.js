"use strict";

(function () {

  var userDialog = document.querySelector(".setup");
  userDialog.classList.remove("hidden");

  var similarListElement = userDialog.querySelector(".setup-similar-list");
  var similarWizardTemplate = document.querySelector("#similar-wizard-template");

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true).content;
    wizardElement.querySelector(".setup-similar-label").textContent = wizard.name + " " + wizard.surname;
    wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
    wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var wizards = window.randomData.wizards;
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  userDialog.querySelector(".setup-similar").classList.remove("hidden");

})();

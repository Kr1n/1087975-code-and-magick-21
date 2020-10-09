"use strict";

(function () {

  var userDialog = document.querySelector(".setup");
  var similarListElement = userDialog.querySelector(".setup-similar-list");
  var similarWizardTemplate = document.querySelector("#similar-wizard-template");

  var MAX_SIMILAR_WIZARD_COUNT = 4;

  userDialog.classList.remove("hidden");

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true).content;
    wizardElement.querySelector(".setup-similar-label").textContent = wizard.name + " " + wizard.surname;
    wizardElement.querySelector(".wizard-coat").style.fill = wizard.colorCoat;
    wizardElement.querySelector(".wizard-eyes").style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };


  var form = userDialog.querySelector('.setup-wizard-form');
  var submitHandler = function (evt) {
    evt.preventDefault();
    window.save(
      new FormData(form),
      function () {
        userDialog.classList.add('hidden');
      },
      errorHandler);

  };

  form.addEventListener('submit', submitHandler);
console.dir(form);
  window.load(successHandler, errorHandler);
})();

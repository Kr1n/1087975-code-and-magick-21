"use strict";

(function () {

  const WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
  const WIZARD_SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
  const WIZARD_COAT_COLORS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
  const WIZARD_EYES_COLORS = ["black", "red", "blue", "yellow", "green"];
  const WIZARD_FIREBALL_COLORS = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

  function getRandomValueFromArray(array) {
    return array[window.util.getRandomInt(array.length)];
  }

  window.randomData = {
    getRandomName: () => getRandomValueFromArray(WIZARD_NAMES),
    getRandomSurname: () => getRandomValueFromArray(WIZARD_SURNAMES),
    getRandomCoatColor: () => getRandomValueFromArray(WIZARD_COAT_COLORS),
    getRandomEyesColor: () => getRandomValueFromArray(WIZARD_EYES_COLORS),
    getRandomFireballColor: () => getRandomValueFromArray(WIZARD_FIREBALL_COLORS),

    wizards: [],
  }

  window.randomData.wizards = [
      {
        name: window.randomData.getRandomName(),
        surname: window.randomData.getRandomSurname(),
        coatColor: window.randomData.getRandomCoatColor(),
        eyesColor: window.randomData.getRandomEyesColor(),
      },
      {
        name: window.randomData.getRandomName(),
        surname: window.randomData.getRandomSurname(),
        coatColor: window.randomData.getRandomCoatColor(),
        eyesColor: window.randomData.getRandomEyesColor(),
      },
      {
        name: window.randomData.getRandomName(),
        surname: window.randomData.getRandomSurname(),
        coatColor: window.randomData.getRandomCoatColor(),
        eyesColor: window.randomData.getRandomEyesColor(),
      },
      {
        name: window.randomData.getRandomName(),
        surname: window.randomData.getRandomSurname(),
        coatColor: window.randomData.getRandomCoatColor(),
        eyesColor: window.randomData.getRandomEyesColor(),
      },
    ];

})();

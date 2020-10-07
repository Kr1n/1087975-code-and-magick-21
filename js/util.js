"use strict";

(function () {

  console.log("util init");
  window.util = {
    getRandomInt: max => Math.floor(Math.random() * Math.floor(max))
  }

})();

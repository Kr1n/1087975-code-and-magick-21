"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var FONT_GAP = 20;
var TEXT_HEIGHT = 20;
var GISTAGRAM_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_HEIGHT = GISTAGRAM_HEIGHT - TEXT_HEIGHT;
var BAR_GAPE = 50;

window.renderStatistics = function (ctx, names, times) {

  ctx.textBaseline = 'hanging';

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = "white";
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = "black";
  ctx.strokeRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText("Список результатов:", CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);

  var maxTime = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  for (i = 0; i < names.length; i++) {
    ctx.fillStyle = "black";
    ctx.fillText(
      names[i],
      CLOUD_X + BAR_GAPE + (BAR_WIDTH + BAR_GAPE) * i,
      CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT
      );

    ctx.fillText(
      Math.floor(Number(times[i])),
      CLOUD_X + BAR_GAPE + (BAR_WIDTH + BAR_GAPE) * i,
      CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - TEXT_HEIGHT - TEXT_HEIGHT - BAR_HEIGHT * times[i] / maxTime
      );

    if (names[i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle = "hsla(240 ," + Math.floor(Math.random() * 100) + ", 100)";
    }

    ctx.fillRect(
      CLOUD_X + BAR_GAPE + (BAR_WIDTH + BAR_GAPE) * i,
      CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - TEXT_HEIGHT,
      BAR_WIDTH,
      -BAR_HEIGHT * times[i] / maxTime);
  }
};

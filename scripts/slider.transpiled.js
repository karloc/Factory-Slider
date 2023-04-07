"use strict";

$(document).ready(function () {
  var topRow = $('.top-row');
  var bottomRow = $('.bottom-row');
  var prevBtn = $('.prev');
  var nextBtn = $('.next');
  function left() {
    var lastImgT = topRow.children().first();
    var lastImgB = bottomRow.children().first();
    var lastImgTW = lastImgT.outerWidth();
    var lastImgBW = lastImgB.outerWidth();
    var imgsT = $('.top-row img');
    lastImgT.hide();
    imgsT.animate({
      marginLeft: -lastImgTW,
      marginRight: lastImgTW + 10
    }, 400, 'linear', function () {
      lastImgT.appendTo(topRow).fadeIn(400);
      imgsT.css('margin-left', 0);
      imgsT.css('margin-right', 10);
    });
    var imgsB = $('.bottom-row img');
    lastImgB.hide();
    imgsB.animate({
      marginLeft: -lastImgBW,
      marginRight: lastImgBW + 10
    }, 400, 'linear', function () {
      lastImgB.appendTo(bottomRow).fadeIn(400);
      imgsB.css('margin-left', 0);
      imgsB.css('margin-right', 10);
    });
  }
  function right() {
    var firstImgT = topRow.children().last();
    var firstImgB = bottomRow.children().last();
    firstImgT.animate({
      width: "toggle"
    }, 500, function () {
      firstImgT.prependTo(topRow).show("fast");
    });
    firstImgB.animate({
      width: "toggle"
    }, 500, function () {
      firstImgB.prependTo(bottomRow).show("fast");
    });
  }
  var delay = 400;
  var timer = null;
  function btnHandler() {
    clearTimeout(timer);
    timer = setTimeout(left, delay);
  }
  prevBtn.on('click', function () {
    btnHandler();
  });
  nextBtn.on('click', function () {
    right();
  });
});

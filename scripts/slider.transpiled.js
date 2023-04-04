"use strict";

$(document).ready(function () {
  var topRow = $('.top-row');
  var bottomRow = $('.bottom-row');
  var prevBtn = $('.prev');
  var nextBtn = $('.next');
  function left() {
    var lastImgT = topRow.children().first();
    var lastImgB = bottomRow.children().first();
    lastImgT.hide(100, "linear", function () {
      lastImgT.appendTo(topRow).fadeIn(500);
    });
    lastImgB.hide(100, "linear", function () {
      lastImgB.appendTo(bottomRow).fadeIn(500);
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
  prevBtn.on('click', function () {
    left();
  });
  nextBtn.on('click', function () {
    right();
  });
});

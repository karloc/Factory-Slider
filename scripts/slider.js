$(document).ready(() => {
  const topRow = $('.top-row');
  const bottomRow = $('.bottom-row');
  const prevBtn = $('.prev');
  const nextBtn = $('.next');

  function left() {
    let lastImgT = topRow.children().first();
    let lastImgB = bottomRow.children().first();
    
    lastImgT.hide(100, "linear", () => {
      lastImgT.appendTo(topRow).fadeIn(500);
    });
    lastImgB.hide(100, "linear", () => {
      lastImgB.appendTo(bottomRow).fadeIn(500);
    });
  }
  function right() {
    let firstImgT = topRow.children().last();
    let firstImgB = bottomRow.children().last();

    firstImgT.animate({
      width: "toggle"
    }, 500, () => {
      firstImgT.prependTo(topRow).show("fast");
    });
    firstImgB.animate({
      width: "toggle"
    }, 500, () => {
      firstImgB.prependTo(bottomRow).show("fast");
    });
  }
  prevBtn.on('click', () => {
    left();
  });
  nextBtn.on('click', () => {
    right();
  });
});
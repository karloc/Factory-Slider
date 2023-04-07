$(document).ready(() => {
  const topRow = $('.top-row');
  const bottomRow = $('.bottom-row');
  const prevBtn = $('.prev');
  const nextBtn = $('.next');

  function left() {
    let lastImgT = topRow.children().first();
    let lastImgB = bottomRow.children().first();
    let lastImgTW = lastImgT.outerWidth();
    let lastImgBW = lastImgB.outerWidth();

    let imgsT = $('.top-row img');
    lastImgT.hide();
    
    imgsT.animate({marginLeft: -lastImgTW, marginRight: lastImgTW+10}, 400, 'linear', () => {
        lastImgT.appendTo(topRow).fadeIn(400);
        imgsT.css('margin-left', 0);
        imgsT.css('margin-right', 10);
    });

    let imgsB = $('.bottom-row img');
    lastImgB.hide();

    imgsB.animate({marginLeft: -lastImgBW, marginRight: lastImgBW+10}, 400, 'linear', () => {
        lastImgB.appendTo(bottomRow).fadeIn(400);
        imgsB.css('margin-left', 0);
        imgsB.css('margin-right', 10);  
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
  
  let delay = 400;
  let timer = null;
  function btnHandler(){
      clearTimeout(timer);
      timer = setTimeout(left, delay);
  }

  prevBtn.on('click', () => {
    btnHandler();
  });
  nextBtn.on('click', () => {
    right();
  });
});
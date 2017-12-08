function createDivs() {
  for (var minutes = 0; minutes < 5; minutes++) {
    for (var seconds = 0; seconds < 60; seconds++){
      if (((minutes*60)+seconds+1) == 1){
        $('.scene').append('<div class="page page-'+((minutes*60)+seconds+1)+' active"><div class="half left"><h2 class="heading">'+("0" + minutes).slice(-2)+'</h2></div><div class="half right"><h2 class="heading">'+("0" + seconds).slice(-2)+'</h2></div></div>');
      } else {
        $('.scene').append('<div class="page page-'+((minutes*60)+seconds+1)+'"><div class="half left"><h2 class="heading">'+("0" + minutes).slice(-2)+'</h2></div><div class="half right"><h2 class="heading">'+("0" + seconds).slice(-2)+'</h2></div></div>');
      }
    }
  }
}
//generate random link with variables
var linkURL = ["../level5/index.html", "../level9/index.html", "../level3/index.html", "../level6/index.html", "../level2/index.html", "index.html"];
$(document).ready(function() {
  createDivs();
  alert('Tap to proceed')
  var pages = $(".page").length,
      scrolling = false,
      curPage = 1;
  function pagination(page, movingUp) {
    scrolling = true;
    var diff = curPage - page,
        oldPage = curPage;
    curPage = page;
    $(".page").removeClass("active small previous");
    $(".page-" + page).addClass("active");
    $(".nav-btn").removeClass("active");
    $(".nav-page" + page).addClass("active");
    if (page > 1) {
      $(".page-" + (page - 1)).addClass("previous");
      if (movingUp) {
        $(".page-" + (page - 1)).remove();
        var hackPage = page;
        setTimeout(function() {
          $(".page-" + (hackPage - 1)).show();
        }, 1000);
      }
      while (--page) {
        $(".page-" + page).addClass("small");
      }
    }
    console.log(diff)
    if (diff > 1) {
      for (var j = page + 1; j < oldPage; j++) {
        $(".page-" + j + " .half").css("transition", "transform .7s ease-out");
      }
    }
    setTimeout(function() {
      scrolling = false;
      $(".page .half").attr("style", "");
      $(".page")
    }, 1000);
  }

  function navigateUp() {
    if (curPage > 1) {
      curPage--;
      pagination(curPage, true);
    }
  }

  function navigateDown() {
    if (curPage < pages) {
      curPage++;
      pagination(curPage);
    }
  }

  $('.scene').mousedown( function(e) {
    // alert("mousewheel event triggered");
    if (!scrolling) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    }
    if (curPage > 300) {
      $('.scene').remove();
      $('body').append('<a href="'+linkURL[Math.floor(Math.random()*6)]+'"><h2 class="heading">Continue</h2></a>');
    }
  });
});

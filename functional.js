



$(document).ready(function(){

  $(".menuBarWrap > .lowerBar > ul > li").hover(function(){
    $(this).css({
      color: "#669900",
    });
  }, function(){
    $(this).css({
      color: "#333333",
    });
  });

  $(".menuBarWrap > .lowerBar > ul > li > div:first-child").hover(function(){
    $(this).css({
      textDecoration: "underline",
    });
  }, function(){
    $(this).css({
      textDecoration: "",
    });
  });

  // ======== 스벅 프로모션바 클릭
  $(".noticeBarRightArrow").click(function(){
    $(this).css({
      transform: "scaleY(-1)",
    });
    $("#starbucksPromotion").toggle();
    // $(this).addClass("noticeBarRightArrrow_active");
    // $(this).removeClass("noticeBarRightArrow");
    // alert("activate");
  });

  // $(".noticeBarRightArrrow_active").click(function(){
  //   $(this).css({
  //     transform: "scaleY(-2)",
  //   });
  //   $(this).addClass("noticeBarRightArrow");
  //   $(this).removeClass("noticeBarRightArrrow_active");
  //   alert("remove all");
    // $("#starbucksPromotion").css({
    //   display: "block",
    // });
    // $(".starbucksPromotion_wrap").slideDown("500");
  // });

// ============ 스벅 프로모션 Bar bxSlider
  $('.starbucksPromotion_bxslider').bxSlider({
    auto: true,
    speed: 500,
    // maxSlides: 3,
    slideWidth: 891,
    // slideMargin: 3,
    autoControls: true,
    pager: true,
  });

});


// $(".noticeBarRight div").mouseover(function(){
//   $(this).css({ color: 'red', });
// });

// $(".noticeBarRightArrow").click(function(){
  $(this).css({
    rotate: "180",
  })
// });

// ============ 스벅 프로모션 Bar bxSlider
// $('.starbucksPromotion_bxslider').bxSlider();

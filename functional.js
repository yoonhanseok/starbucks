



$(document).ready(function(){

  $(".coffeeHover, .menuHover, .storeHover, .responsibilityHover, .starbucksHover, .whatsNewsHover").css({
    display: "none",
  });

  $(".lowerBar ul li .menuCoffee, .coffeeHover").hover(function(){
    $(".lowerBar ul li .menuCoffee").css({
      color: "#669900",
      background: "#2C2A29",
    });
    $(".coffeeHover").slideDown();
  }, function(){
    $(".lowerBar ul li .menuCoffee").css({
      color: "#333333",
      background: "#f6f5ef",
    });
    $(".coffeeHover").slideUp();
  });

  $(".lowerBar ul li .menuMenu, .menuHover").hover(function(){
    $(".lowerBar ul li .menuMenu").css({
      color: "#669900",
      background: "#2C2A29",
    });
    $(".menuHover").slideDown();
  }, function(){
    $(".lowerBar ul li .menuMenu").css({
      color: "#333333",
      background: "#f6f5ef",
    });
    $(".menuHover").slideUp();
  });

  $(".lowerBar ul li .menuStore, .storeHover").hover(function(){
    $(".lowerBar ul li .menuStore").css({
      color: "#669900",
      background: "#2C2A29",
    });
    $(".storeHover").slideDown();
  }, function(){
    $(".lowerBar ul li .menuStore").css({
      color: "#333333",
      background: "#f6f5ef",
    });
    $(".storeHover").slideUp();
  });

  $(".lowerBar ul li .menuResponsibility, .responsibilityHover").hover(function(){
    $(".lowerBar ul li .menuResponsibility").css({
      color: "#669900",
      background: "#2C2A29",
    });
    $(".responsibilityHover").slideDown();
  }, function(){
    $(".lowerBar ul li .menuResponsibility").css({
      color: "#333333",
      background: "#f6f5ef",
    });
    $(".responsibilityHover").slideUp();
  });

  $(".lowerBar ul li .menuStarbucks, .starbucksHover").hover(function(){
    $(".lowerBar ul li .menuStarbucks").css({
      color: "#669900",
      background: "#2C2A29",
    });
    $(".starbucksHover").slideDown();
  }, function(){
    $(".lowerBar ul li .menuStarbucks").css({
      color: "#333333",
      background: "#f6f5ef",
    });
    $(".starbucksHover").slideUp();
  });

  $(".lowerBar ul li .menuWhats, .whatsNewsHover").hover(function(){
    $(".lowerBar ul li .menuWhats").css({
      color: "#669900",
      background: "#2C2A29",
    });
    $(".whatsNewsHover").slideDown();
  }, function(){
    $(".lowerBar ul li .menuWhats").css({
      color: "#333333",
      background: "#f6f5ef",
    });
    $(".whatsNewsHover").slideUp();
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

// By: Steven C. Dang
// Copyright 2015
//

function resize_landing() {
  var navHeight = $(".navbar").height();
  // Set the height of the landing page top section
  var width = $("#landing-view").width();
  var height = width * 6/16 + navHeight;
  var caption_height = $("#landing-view .img-caption").outerHeight() 
  var min = caption_height * 1.4 + navHeight;
  if (height < min) {
    console.log("setting to min height");
    $("#landing-view").height(min);
    console.log(caption_height)
    $("#landing-view .img-caption").css(
        "top", "0%"
    );
    var margin = ((min - caption_height - navHeight) / 2) + navHeight;
    $("#landing-view .img-caption").css(
        "margin-top", margin + "px"
    );
  } else {
    console.log("setting to other height");
    $("#landing-view").height(height);
    $("#landing-view .img-caption").css(
        "top", "100%"
    );
    $("#landing-view .img-caption").css(
        "margin-top", "-" + 1.2 * caption_height + "px"
    );
  }

};

function style_nav() {
  $(".navbar li a").css("color", "#fff");
  $(".navbar li a").css("padding", "20px 30px");
  $(".navbar li a").css("background", "#666666");
  $(".navbar .active a").css("color", "#000");
  $(".navbar .active a").css("background", "#e7e7e7");
  $(".nav-humadata").css("padding", "5px 30px");
  var width = $(".nav-logo").width()
}

function resize() {
  console.log("Resizing window elements");
  style_nav();
  resize_landing();

  $("#proj-diagram.blur").height(
      $("#proj-diagram.blur").parent().height())

  $(".carousel").carousel({interval: false});

  var width = $("#diagram").width();
  var h = $("#diagram").height();
  console.log(width);
  console.log(h);
  $("#proj-diagram").height(1.2*width);
  //$(".nav-logo").css("margin-left", "-" + width/2 + "px")
  //
  //Get max height
  var height = 0;
  var w = $(".hex-section").width();
  $("#research-overview .hex-section").each(function() {
    var h = $(this).height();
    var w = $(this).width();
    if (h > height) {
      height = h;
    }
  });
  $("#research-overview .hex-section").each(function() {
    $(this).height(1.5*height);
  });
  height = 0;
  var w = $(".hex-section").width();
  $("#characterize .hex-section").each(function() {
    var h = $(this).height();
    var w = $(this).width();
    if (h > height) {
      height = h;
    }
  });
  $("#characterize .hex-section").each(function() {
    $(this).height(1.5*height);
  });

};

$(document).ready(function() {
  resize();
  window.onresize = resize;
});


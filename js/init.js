// By: Steven C. Dang
// Copyright 2015
//

function style_nav() {
  $(".navbar li a").css("color", "#fff");
  $(".navbar li a").css("padding", "20px 30px");
  $(".navbar li a").css("background", "#666666");
  $(".navbar .active a").css("color", "#000");
  $(".navbar .active a").css("background", "#e7e7e7");
  $(".nav-humadata").css("padding", "5px 30px");
  var width = $(".nav-logo").width()
}

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

function resize_research_hex() {
  //Get max height
  var height = 0;
  var w = $(".hex-section").width();
  $("#research-overview .hex-cap").each(function() {
    $(this).height(0.2*w);
  });
  $("#research-overview .hex-square").each(function() {
    var h = 0;
    $(this).children().each(function() {
      h += $(this).height();
    });
    var w = $(this).width();
    if (h > height) {
      height = h;
    }
  });
  $("#research-overview .hex-square").each(function() {
    $(this).height(height);
  });
};

function resize_domain() {
  // var h = $("#domain .header").height();
  // console.log(h)
  // h += $("#domain-carousel").height();
  // console.log(h)
  // $("#domain").height(2*h);
  // $("#domain").children().each( function() {
    // var h = 0;
    // $(this).children().each(function() {
      // h += $(this).height();
      // console.log(h);
    // });
  // });

};

function resize_characterize() {
  //Get max height
  var height = 0;
  var w = $(".hex-section").width();
  $("#characterize .hex-cap").each(function() {
    $(this).height(0.2*w);
  });
  $("#characterize .hex-square").each(function() {
    var h = 0;
    $(this).children().each(function() {
      h += $(this).height();
    });
    var w = $(this).width();
    if (h > height) {
      height = h;
    }
  });
  $("#characterize .hex-square").each(function() {
    $(this).height(height);
  });
};

function resize_diagram() {
  $("#proj-diagram.blur").height(
      $("#proj-diagram.blur").parent().height())


  var width = $("#diagram").width();
  var h = $("#diagram").height();
  console.log(width);
  console.log(h);
  $("#proj-diagram").height(1.2*width);

};

function resize() {
  console.log("Resizing window elements");
  style_nav();
  resize_landing();
  resize_diagram();
  resize_research_hex();
  resize_characterize();
  resize_domain();
};

$(document).ready(function() {
  $(".carousel").carousel({interval: false});
  resize();
  window.onresize = resize;
});

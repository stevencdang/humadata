$(document).ready(function() {
  // Set the height of the landing page top section
  var width = $("#landing-view").width();
  var height = width * 6/16;
  $("#landing-view").height(height + "px");

  $("#proj-diagram.blur").height(
      $("#proj-diagram.blur").parent().height())

  $(".carousel").carousel({interval: false});

  $(".navbar li a").css("color", "#fff");
  $(".navbar li a").css("padding", "20px 30px");
  $(".navbar .active a").css("color", "#000");
  $(".nav-humadata").css("padding", "5px 30px");
  var width = $(".nav-logo").width()
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
});

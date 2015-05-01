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
  //$(".nav-logo").css("margin-left", "-" + width/2 + "px")
});

$(document).ready(function() {
  // Set the height of the landing page top section
  var width = $("#landing-view").width();
  var height = width * 6/16;
  $("#landing-view").height(height + "px");

  $("#proj-diagram.blur").height(
      $("#proj-diagram.blur").parent().height())

  $(".carousel").carousel({interval: false});

  $(".navbar li a").css("color", "#fff");
  $(".navbar.active li a").css("color", "#ccc");
});

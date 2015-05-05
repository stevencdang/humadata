function style_nav() {
  $(".navbar li a").css("color", "#fff");
  $(".navbar li a").css("padding", "20px 30px");
  $(".navbar li a").css("background", "#666666");
  $(".navbar .active a").css("color", "#000");
  $(".navbar .active a").css("background", "#e7e7e7");
  $(".nav-humadata").css("padding", "5px 30px");
  var width = $(".nav-logo").width()
}

function vert_center_images() {
  console.log("Centering image");
  $(".side-img").each(function() {
    console.log("Centering side-image");
    var parent_height = $($(this).parent().parent()).height();
    console.log(parent_height);
    var h = $(this).height();
    console.log(h);
    if (h == 0) {
      var margin =  parent_height / 8;
    } else {
      var margin = (parent_height - h) / 2;
    }
    console.log(margin);
    console.log(this)
    $(this).css("margin-top", margin);
  });
}

function resize() {
  console.log("Resizing window elements");
  style_nav();
  vert_center_images();
};

$(document).ready(function() {
  resize();
  window.onresize = resize;
});


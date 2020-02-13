jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $(".header-logo").addClass("opaque");
    } else {
      $(".header-logo").removeClass("opaque");
    } //if-else
  }); //win func.

  $(".smoothscroll").on("click", function(e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        800,
        "swing",
        function() {
          window.location.hash = target;
        }
      );
  });
});

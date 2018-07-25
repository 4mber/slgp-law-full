$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  var $nav1 = $("#nav-logo");
	  $nav1.toggleClass('full-logo', $(this).scrollTop() > $nav1.height());
	});
});

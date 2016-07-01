const SCROLL_TOP_THRESHOLD = 30;

$(function () {
	var $menu = $(".ui.menu");

	$(document).scroll(function (event) {
		if ($(this).scrollTop() < SCROLL_TOP_THRESHOLD  && $menu.hasClass("scrolled")) {
			$menu.removeClass("scrolled");
		}
		else if ($(this).scrollTop() >= SCROLL_TOP_THRESHOLD && ! $menu.hasClass("scrolled")) {
			$menu.addClass("scrolled");
		}
	})
});

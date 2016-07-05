/*const SCROLL_TOP_THRESHOLD = 30;

 $(function () {
 var $menu               = $(".ui.menu");
 var $homeHeaders        = $(".home .header");
 var $homeHeaderIcons    = $(".home .icon");
 var $homeHeaderContents = $(".home .content");

 $(document).scroll(function (event) {
 if ($(this).scrollTop() < SCROLL_TOP_THRESHOLD && $menu.hasClass("scrolled")) {
 $menu.removeClass("scrolled");
 }
 else if ($(this).scrollTop() >= SCROLL_TOP_THRESHOLD && ! $menu.hasClass("scrolled")) {
 $menu.addClass("scrolled");
 }
 });

 $homeHeaders.on({
 mouseenter: function () {
 $homeHeaderIcons.css("opacity", .95);
 $homeHeaderContents.css("opacity", .95);
 },
 mouseleave: function () {
 $homeHeaderIcons.css("opacity", .5);
 $homeHeaderContents.css("opacity", 0);
 }
 });

 $('.right.menu.open').on("click", function (e) {
 e.preventDefault();
 $('.ui.vertical.menu').toggle();
 });

 $('.ui.dropdown').dropdown();
 });*/

function DOMLoaded(page) {
	if (typeof window[page] === "function") {
		window[page]();
	}
}

function home() {
	var $videoLeftArrow  = document.getElementsByClassName("video-company")[0];
	var $videoRightArrow = document.getElementsByClassName("video-sport")[0];

	loadMenu();

	$videoLeftArrow.addEventListener("mouseenter", toggleActiveClass);
	$videoLeftArrow.addEventListener("mouseleave", toggleActiveClass);
	$videoRightArrow.addEventListener("mouseenter", toggleActiveClass);
	$videoRightArrow.addEventListener("mouseleave", toggleActiveClass);

	function toggleActiveClass() {
		$videoLeftArrow.classList.toggle("visible");
		$videoRightArrow.classList.toggle("visible");
	}
}

function about() {
	loadMenu();
}

function loadMenu() {
	var $menuLinks = document.getElementsByClassName("menu-links")[0];

	document.getElementsByClassName("menu-burger")[0].addEventListener("click", function (event) {
		event.preventDefault();
		$menuLinks.classList.toggle("visible");
	});
}

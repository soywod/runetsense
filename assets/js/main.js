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
	loadMenu();

	if (typeof window[page] === "function") {
		window[page]();
	}
}

function home() {
	/*
	 var $videoLeftArrow  = document.getElementsByClassName("video-company")[0];
	 var $videoRightArrow = document.getElementsByClassName("video-sport")[0];

	 $videoLeftArrow.addEventListener("mouseenter", toggleActiveClass);
	 $videoLeftArrow.addEventListener("mouseleave", toggleActiveClass);
	 $videoRightArrow.addEventListener("mouseenter", toggleActiveClass);
	 $videoRightArrow.addEventListener("mouseleave", toggleActiveClass);

	 function toggleActiveClass() {
	 $videoLeftArrow.classList.toggle("visible");
	 $videoRightArrow.classList.toggle("visible");
	 }
	 */
}

function sport() {
	var video         = document.getElementsByClassName("sport-video-player")[0];
	var playlist      = document.getElementsByClassName("sport-video-playlist-item");
	var playlistLinks = document.getElementsByClassName("sport-video-playlist-link");
	var i             = 0;

	video.setAttribute("poster", playlist[0].getAttribute("src"));
	video.setAttribute("src", playlist[0].getAttribute("data-video"));

	while (i < playlistLinks.length) {
		var currPlaylistLink = playlistLinks[i];

		currPlaylistLink.addEventListener.call(currPlaylistLink, "click", function (event) {
			event.preventDefault();

			video.setAttribute("poster", this.childNodes[1].getAttribute("src"));
			video.setAttribute("src", this.childNodes[1].getAttribute("data-video"));
		});

		i ++;
	}
}

function contact() {
	//06 99 32 1234
	//nbourada@runetsense.fr
	var $showPhone = document.getElementById("show-phone");
	var $showEmail = document.getElementById("show-email");

	var phone = ["!0!6#", "$9!9$", "$3!2#", "!1#2!", "$3!4$"].join(" ").replace(/[!#\$]/g, "");
	var email = ["!n!!bo#ura#d!a$", "$run!ets#en!s!e.f!#r#"].join("@").replace(/[!#\$]/g, "");

	$showPhone.addEventListener("click", function (event) {
		event.preventDefault();
		$showPhone.outerHTML = phone;
	});

	$showEmail.addEventListener("click", function (event) {
		event.preventDefault();
		$showEmail.outerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
	});
}

function loadMenu() {
	var $menuLinks = document.getElementsByClassName("menu-links")[0];

	document.getElementsByClassName("menu-burger")[0].addEventListener("click", function (event) {
		event.preventDefault();
		$menuLinks.classList.toggle("visible");
	});
}

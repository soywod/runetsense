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
	var video         = document.getElementsByClassName("sport-player")[0];
	var playlist      = document.getElementsByClassName("sport-playlist-item");
	var playlistLinks = document.getElementsByClassName("sport-playlist-link");
	var i             = 0;

	var conference = document.getElementsByClassName("conference")[0];
	var coaching   = document.getElementsByClassName("coaching")[0];
	var diagnostic = document.getElementsByClassName("diagnostic")[0];
	var football   = document.getElementsByClassName("football")[0];

	var metaConferenceOrigin = document.getElementsByClassName("meta-conference-origin")[0];
	var metaCoachingOrigin   = document.getElementsByClassName("meta-coaching-origin")[0];
	var metaDiagnosticOrigin = document.getElementsByClassName("meta-diagnostic-origin")[0];
	var metaFootballOrigin   = document.getElementsByClassName("meta-football-origin")[0];

	var metaConference = document.getElementsByClassName("meta-conference")[0];
	var metaCoaching   = document.getElementsByClassName("meta-coaching")[0];
	var metaDiagnostic = document.getElementsByClassName("meta-diagnostic")[0];
	var metaFootball   = document.getElementsByClassName("meta-football")[0];

	var tmp;

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

	conference.addEventListener("mouseenter", activateModule.bind(conference, metaConference));
	conference.addEventListener("click", toggleModule.bind(conference, metaConferenceOrigin, metaConference));
	conference.addEventListener("mouseleave", desactivateModule.bind(conference, metaConferenceOrigin));

	coaching.addEventListener("mouseenter", activateModule.bind(coaching, metaCoaching));
	coaching.addEventListener("click", toggleModule.bind(coaching, metaCoachingOrigin, metaCoaching));
	coaching.addEventListener("mouseleave", desactivateModule.bind(coaching, metaCoachingOrigin));

	diagnostic.addEventListener("mouseenter", activateModule.bind(diagnostic, metaDiagnostic));
	diagnostic.addEventListener("click", toggleModule.bind(diagnostic, metaDiagnosticOrigin, metaDiagnostic));
	diagnostic.addEventListener("mouseleave", desactivateModule.bind(diagnostic, metaDiagnosticOrigin));

	football.addEventListener("mouseenter", activateModule.bind(football, metaFootball));
	football.addEventListener("click", toggleModule.bind(football, metaFootballOrigin, metaFootball));
	football.addEventListener("mouseleave", desactivateModule.bind(football, metaFootballOrigin));

	conference.innerHTML = metaConferenceOrigin.innerHTML;
	coaching.innerHTML = metaCoachingOrigin.innerHTML;
	diagnostic.innerHTML = metaDiagnosticOrigin.innerHTML;
	football.innerHTML = metaFootballOrigin.innerHTML;

	function activateModule(meta) {
		this.setAttribute("data-active", "");
		this.innerHTML = meta.innerHTML;
	}

	function toggleModule(metaOrigin, meta) {
		if (this.hasAttribute("data-active")) {
			desactivateModule.call(this, metaOrigin);
		}
		else {
			activateModule.call(this, meta);
		}
	}

	function desactivateModule(metaOrigin) {
		this.removeAttribute("data-active");
		this.innerHTML = metaOrigin.innerHTML;
	}
}

function about() {
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

function company() {
	loadModals();

	$(".company").click(function(event) {
		event.preventDefault();

		var slide = $(this).attr("data-slide");

		$(".slider").not(slide).slideUp(200);
		$(slide).slideToggle(200);
	});

}

function loadMenu() {
	var $menuLinks = document.getElementsByClassName("menu-links")[0];

	document.getElementsByClassName("menu-burger")[0].addEventListener("click", function (event) {
		event.preventDefault();
		$menuLinks.classList.toggle("visible");
	});
}

function loadModals() {
	$("[data-modal]").click(function(event) {
		event.preventDefault();

		var $this = $(this);

		$($this.attr("data-modal")).fadeIn(200);
	});

	$(".modal > span").click(function() {
		$(this).parent().fadeOut(200);
	})
}

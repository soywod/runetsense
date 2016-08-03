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
	var $video         = $(".sport-player");
	var $playlist      = $(".sport-playlist-item");
	var $playlistLinks = $(".sport-playlist-link");

	changeVideo($($playlist[0]));

	$playlistLinks.click(function (event) {
		event.preventDefault();

		changeVideo($(this).find("> .sport-playlist-item"));
	});

	function changeVideo($elem) {
		$video
			.attr("poster", $elem.attr("src"))
			.attr("src", $elem.attr("data-video"))
			.find("+div")
			.html($elem.attr("data-label"));
	}

	/*
	 var video         = document.getElementsByClassName("sport-player")[0];
	 var playlist      = document.getElementsByClassName("sport-playlist-item");
	 var playlistLinks = document.getElementsByClassName("sport-playlist-link");
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
	 */
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

	var $companies = $(".company");

	$companies
		.on("click", function (event) {
			event.preventDefault();

			var $this = $(this);
			var slide = $this.attr("data-slide");
			var $icon = $this.find(".company-icon");

			$(".slider").not(slide).slideUp(200);
			$(slide).slideToggle(200);
			$companies.removeClass("active");
			$this.toggleClass("active");
			$(".company-icon").not($icon).each(function(index, item) {
				var $item = $(item);

				$item.attr("src", $item.attr("data-src"));
			});
		})
		.on("mouseenter", function () {
			var $this = $(this);

			if (! $this.hasClass("active")) {
				var $picto = $this.find(".company-icon");
				$picto.attr("src", $picto.attr("data-src-active"));
			}
		})
		.on("mouseleave", function () {
			var $this = $(this);

			if (! $this.hasClass("active")) {
				var $picto = $this.find(".company-icon");
				$picto.attr("src", $picto.attr("data-src"));
			}
		});

	function swapSrc() {
		var $this = $(this);

		if (! $this.hasClass("active")) {
			var $picto = $this.find(".company-icon");
			var old    = $picto.attr("src");

			$picto.attr("src", $picto.attr("data-src-active"));
			$picto.attr("data-src-active", old);
		}
	}
}

function loadMenu() {
	var $menuLinks = document.getElementsByClassName("menu-links")[0];

	document.getElementsByClassName("menu-burger")[0].addEventListener("click", function (event) {
		event.preventDefault();
		$menuLinks.classList.toggle("visible");
	});
}

function loadModals() {
	$("[data-modal]").click(function (event) {
		event.preventDefault();

		var $this = $(this);

		$($this.attr("data-modal")).fadeIn(200);
	});

	$(".modal-content > span").click(function () {
		$(this).parent().parent().fadeOut(200);
	})
}

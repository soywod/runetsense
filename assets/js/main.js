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

var offsetSlider;

function DOMLoaded(page) {
	loadMenu();

	if (typeof window[page] === "function") {
		window[page]();
	}
}

function sport() {
	var $videoContainer = $(".sport-player-container");
	var $sports         = $(".sport");
	var $playlist       = $(".sport-playlist-item");
	var $playlistLinks  = $(".sport-playlist-link");

	offsetSlider = $("#slider").offset().top;

	changeVideo($($playlist[0]));

	$playlistLinks.click(function (event) {
		event.preventDefault();

		changeVideo($(this).find("> .sport-playlist-item"));
	});

	function changeVideo($elem) {
		var webm   = $elem.attr("data-video-webm");
		var mp4    = $elem.attr("data-video-mp4");
		var poster = $elem.attr("src");
		var $video = $('<video poster="' + poster + '" width="100%" autobuffer controls></video>');

		$video.html('<source src="' + webm + '" type="video/webm"><source src="' + mp4 + '" type="video/mp4">');

		$videoContainer.html($video);
		$videoContainer.find("+div")
			.html($elem.attr("data-label"));
	}

	$sports
		.on("click", function (event) {
			event.preventDefault();

			var $this  = $(this);
			var $slide = $($this.attr("data-slide"));
			var $icon  = $this.find(".sport-icon");

			$(".slider").not($slide).slideUp(200, function () {
				if (! $slide.is(":visible")) {
					$("html, body").animate({
						scrollTop: offsetSlider
					}, "slow");
				}
			});

			$slide.slideToggle(200);
			$sports.removeClass("active");
			$this.toggleClass("active");

			$(".sport-icon").not($icon).each(function (index, item) {
				var $item = $(item);

				$item.attr("src", $item.attr("data-src"));
			});
		})
		.on("mouseenter", function () {
			var $this = $(this);

			if (! $this.hasClass("active")) {
				var $picto = $this.find(".sport-icon");
				$picto.attr("src", $picto.attr("data-src-active"));
			}
		})
		.on("mouseleave", function () {
			var $this = $(this);

			if (! $this.hasClass("active")) {
				var $picto = $this.find(".sport-icon");
				$picto.attr("src", $picto.attr("data-src"));
			}
		});

	$(".scroll-playlist").click(function (event) {
		event.preventDefault();
        console.log("CLICK");

		$("html, body").animate({
			scrollTop: $("body").height()
		}, "slow");
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

	offsetSlider = $("#slider").offset().top;

	$companies
		.on("click", function (event) {
			event.preventDefault();

			var $this  = $(this);
			var $slide = $($this.attr("data-slide"));
			var $icon  = $this.find(".company-icon");

			$(".slider").not($slide).slideUp(200, function () {
				if (! $slide.is(":visible")) {
					$("html, body").animate({
						scrollTop: offsetSlider
					}, "slow");
				}
			});

			$slide.slideToggle(200);
			$companies.removeClass("active");
			$this.toggleClass("active");

			$(".company-icon").not($icon).each(function (index, item) {
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

function home() {
	$("#play").click(function () {
		document.getElementById("video").play();
		$(this).parent().remove();
	});
}

function contact() {
	var sent = getUrlParameter("sent");

	if (sent === "1") {
		alert("Votre message a bien été envoyé !")
	}
	else if (sent === "0" || sent.trim() === "") {
		alert("Une erreur est survenue lors de l'envoi du message");
	}

	function getUrlParameter(sParam) {
		var sPageURL      = decodeURIComponent(window.location.search.substring(1)),
		    sURLVariables = sPageURL.split('&'),
		    sParameterName,
		    i;

		for (i = 0; i < sURLVariables.length; i ++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	}
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

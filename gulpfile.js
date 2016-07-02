const THEME_ASSETS = "./source/themes/soywod/runetsense/assets";

var gulp   = require("gulp"),
    chug   = require("gulp-chug"),
    concat = require("gulp-concat"),
    sass   = require("gulp-sass");

// ==================== PATHS ==================== //

var path = {
	src   : {
		css: "./assets/sass/main.sass",
		js : "./assets/js/**/*.js"
	},
	dest  : {
		css : THEME_ASSETS + "/css/",
		js  : THEME_ASSETS + "/js/",
		icon: THEME_ASSETS + "/css/themes/"
	},
	vendor: {
		css : [
			"./node_modules/html5boiler/lib/html5boilerPlate/css/normalize.css",
			"./assets/vendor/semantic/dist/semantic.min.css"
		],
		js  : [
			"./node_modules/jquery/dist/jquery.min.js",
			"./assets/vendor/semantic/dist/semantic.min.js"
		],
		icon: "./assets/vendor/semantic/dist/themes/**/*"
	}
};

// ==================== TASKS ==================== //

gulp.task("css", function () {
	gulp.src(path.src.css)
		.pipe(concat("local.min.css"))
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest(path.dest.css))
});

gulp.task("js", function () {
	gulp.src(path.src.js)
		.pipe(concat("local.min.js"))
		.pipe(gulp.dest(path.dest.js))
});

gulp.task("vendor-css", function () {
	gulp.src(path.vendor.css)
		.pipe(concat("vendor.min.css"))
		.pipe(gulp.dest(path.dest.css))
});

gulp.task("vendor-js", function () {
	gulp.src(path.vendor.js)
		.pipe(concat("vendor.min.js"))
		.pipe(gulp.dest(path.dest.js))
});

gulp.task("vendor-icon", function () {
	gulp.src(path.vendor.icon)
		.pipe(gulp.dest(path.dest.icon))
});

gulp.task("default", ["css", "js", "vendor-css", "vendor-js", "vendor-icon"]);

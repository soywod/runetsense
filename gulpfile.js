const THEME_ASSETS = "./source/themes/soywod/runetsense/assets";

var gulp   = require("gulp"),
    uglify = require("gulp-uglify"),
    minify = require("gulp-cssmin"),
    concat = require("gulp-concat"),
    sass   = require("gulp-sass"),
    shell  = require("gulp-shell");

// ==================== PATHS ==================== //

var path = {
	src   : {
		css: "./assets/scss/main.scss",
		js : "./assets/js/**/*.js"
	},
	dest  : {
		css  : THEME_ASSETS + "/css/",
		js   : THEME_ASSETS + "/js/",
		fonts: THEME_ASSETS + "/fonts/"
	},
	vendor: {
		css  : [
			"./node_modules/html5boiler/lib/html5boilerPlate/css/normalize.css",
			"./node_modules/font-awesome/css/font-awesome.min.css"
		],
		fonts: "./node_modules/font-awesome/fonts/*"
	}
};

// ==================== TASKS ==================== //

gulp.task("css", function () {
	gulp.src(path.src.css)
		.pipe(concat("main.min.css"))
		.pipe(sass().on("error", sass.logError))
		.pipe(minify())
		.pipe(gulp.dest(path.dest.css))
});

gulp.task("vendor-css", function () {
	gulp.src(path.vendor.css)
		.pipe(concat("vendor.min.css"))
		.pipe(minify())
		.pipe(gulp.dest(path.dest.css))
});

gulp.task("js", function () {
	gulp.src(path.src.js)
		.pipe(concat("local.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest(path.dest.js))
});

gulp.task("vendor-fonts", function () {
	gulp.src(path.vendor.fonts)
		.pipe(gulp.dest(path.dest.fonts))
});

gulp.task("vendor-fonts", function () {
	gulp.src(path.vendor.fonts)
		.pipe(gulp.dest(path.dest.fonts))
});

gulp.task('watch', function () {
	gulp.watch("./assets/scss/**/*.scss", ["css"]);
	gulp.watch(path.src.js, ["js"]);
	shell.task("sculpin generate --watch --env=prod")();
});

gulp.task("default", ["css", "js", "vendor-css", "vendor-fonts"], shell.task("sculpin generate --env=prod"));

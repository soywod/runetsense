var gulp   = require("gulp"),
    chug   = require("gulp-chug"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    sass   = require("gulp-sass");

// ==================== PATHS ==================== //

var path = {
	js  : {
		local : "./assets/js/**/*.js",
		public: "./public/js/",
		vendor: [
			"./node_modules/jquery/dist/jquery.min.js",
			"./assets/vendor/semantic/dist/semantic.min.js"
		]
	},
	css : {
		local : "./assets/sass/main.sass",
		public: "./public/css/",
		vendor: [
			"./node_modules/html5boiler/lib/html5boilerPlate/css/normalize.css",
			"./assets/vendor/semantic/dist/semantic.min.css"
		]
	}
};

// ==================== TASKS ==================== //

gulp.task("semui", function () {
	gulp.src("./assets/vendor/semantic/gulpfile.js")
		.pipe(myChug("build"));
});

gulp.task("local-js", function () {
	gulp.src(path.js.local)
		.pipe(concat("local.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest(path.js.public))
});

gulp.task("local-css", function () {
	gulp.src(path.css.local)
		.pipe(concat("local.min.css"))
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest(path.css.public))
});

gulp.task("vendor-js", function () {
	gulp.src(path.js.vendor)
		.pipe(concat("vendor.min.js"))
		.pipe(gulp.dest(path.js.public))
});

gulp.task("vendor-css", function () {
	gulp.src(path.css.vendor)
		.pipe(concat("vendor.min.css"))
		.pipe(gulp.dest(path.css.public))
});

gulp.task("local", ["local-js", "local-css"]);
gulp.task("vendor", ["vendor-js", "vendor-css"]);
gulp.task("default", ["local", "vendor"]);

// ================== FUNCTIONS ================== //

function myChug(task) {
	return chug({tasks: [task]})
}

// load in the gulp plugin to this file so we can use it to make our builds 
var gulp = require('gulp');
var sass = require('gulp-sass'); // loading in the gulp-sass plugin and here we are LOADING it in 


// start to build tasks - things that gulp should do for use
// task to clean out directoy
// task to run our styles etc 

// we are going to create our first gulp task - this will compile our sass into our css
// we name it stlyes so that via the command line we can run gulp styles, but you can name it anything you want 
gulp.task('styles', function() {
	gulp.src('sass/styles.scss')
	.pipe(sass({errLogToConsole: true}))
	.pipe(gulp.dest('./css/'))

	});


gulp.task('watch',function() {
	// going to tell gulp to watch our css and run the styles task 
	//takes two arguments , what to watch and then an array. the array is a list of commands that should run when styles change. 
	// when the scss change run the styles command
	gulp.watch('sass/*.scss',['styles']);
	// can watch every single file with a sass ending. will watch anythign with the extension of scss 
});
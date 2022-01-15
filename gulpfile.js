
let project_folder = require("path").basename(__dirname); // Yekun papka esas papkanin adi ile eyni olacaq
let source_folder = "#src"; // Ilkin resurs olan papka
// * deyisen ona gore yaradilir ki, papkanin adini deyismek istesek adi burdan deyisek neinki butun koddan *

let path = {
	build:{
		html: project_folder + "/", // "/" index.html kokde olduguna gore ( img ve basqalari kimi papkada deyil )
		css: project_folder + "/css/",
		js:project_folder + "/js/",
		img: project_folder + "/img/",
		fonts: project_folder + "/fonts/",
		php: project_folder + "/php/",
	},
	src:{
		html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"], // bu yazilis ile #src de olan html fayllar dist - de bir index.html kimi gorunecek
		css: source_folder + "/scss/style.scss", // ancaq bu scss fayli uzerinde islesin ( yeni ki, basqa scss fayllarinin cemlesdiyi fayl)
		js:source_folder + "/js/script.js",
		img: source_folder + "/img/**/*.+(png|jpg|gif|ico|svg|webp)", //    odurki img-nin icinde olan basqa papkalardaki fayllari da gorsun ,  /*{} ise ancaq {} icinde olan bu tip fayllarla islesin
		//fonts: source_folder + "/fonts/**/*.ttf" // bir tip olduguna gore {} istifade elemedik
		fonts: source_folder + "/fonts/*.ttf",
		php: source_folder + "/php/**/*.php",
	},

	watch:{
		html: source_folder + "/**/*.html", 
		css: source_folder + "/scss/**/*.scss", 
		js:source_folder + "/js/**/*.js",
		img: source_folder + "/img/**/*.+(png|jpg|gif|ico|svg|webp)", 
		php: source_folder + "/php/*.php",
	},
	clean: "./" + project_folder + "/"
};
//  build : gulp-in son neticeni gondereceyi papkalarin yolu *
//  src : gulp in fallari gotureceyi papkalarin yolu *
//  watch : gulp -in hansi konkret fayllarin izlemesi ucun gosterilen yol *
//  clean : Her defe gulp ise dusende ( terminalda gulp yazanda project_folder - in kohnesi silinecek tezesi yuklenecek )

let{src,dest} = require('gulp'), // gulp hemin papkalara baglanacaq ve senariya yazmaaq olacaq
	 browsersync = require('browser-sync').create(),
	 gulp = require('gulp'),       // basqa isleri gormek ucun
	 fileinclude = require("gulp-file-include"), // html i hisselere bolmek ucun
	 del = require("del"), // dist de olan fayl her defe silmemek ucun
	 scss = require('gulp-sass')(require('sass')),
	 autoprefixer = require("gulp-autoprefixer"),
	 group_media = require("gulp-group-css-media-queries"),
	 clean_css = require("gulp-clean-css"),
	 rename = require("gulp-rename"),
	 uglify = require("gulp-uglify-es").default,
	 imagemin = require("gulp-imagemin");
	 webp = require("gulp-webp");
	 webphtml = require("gulp-webp-html");
	 ttf2woff = require('gulp-ttf2woff');
	 ttf2woff2 = require('gulp-ttf2woff2');
	 fonter = require('gulp-fonter');
	 
	// 1 ci plugin --> $ npm i browser-sync --save-dev


	function browserSync (params) {
		browsersync.init({
			server: {
				baseDir: "./" + project_folder + "/"
			},
			port:3000,
			notify: false // susmaya gore her defe browser yenilende pencere yaranir ve yazilir ki, ugurla yenilendi
		});
	}

	// Html faylla islemek ucun lazimi funksiya
	function html (){
		return src(path.src.html)
			.pipe(fileinclude())
			.pipe(webphtml())
			.pipe(dest(path.build.html))
			.pipe(browsersync.stream());
	}
	// 4 cu plug-in --> npm install sass gulp-sass --save-dev
	function css (params){
			return src(path.src.css)
			.pipe(
				scss({ outputStyle: 'expanded' }).on('error', scss.logError)
			)
			.pipe(
				group_media()
			)
			.pipe(
				autoprefixer({ 
					overrideBrowserslist: ["last 5 versions"],
					cascade: true
				})
			)
			.pipe(dest(path.build.css))
			.pipe(clean_css())
			.pipe(
				rename({
					extname: ".min.css"
				})
			)
			.pipe(dest(path.build.css))
			.pipe(browsersync.stream());
	}
	// 5 ci plug-in --> nmp i gulp-autoprefixer --save-dev // venderli prefixleri avtomatik artiracaq
	// 6 ci plug -in --> npm i --save-dev gulp-group-css-media-queries // css faylda her bir terefde yayilmis media cagirislari yigir ve faylin sonuna yerlesdirir // ayri-ayri yerde verilmis eyni media cagirislari da birlesdirecek
	// 7 ci plug - in --> npm i --save-dev gulp-clean-css // css i optimallasdiracaq sixacaq (min)
	// 8 ci plug-in --> npm i --save-dev gulp-rename // min css den elave adi css fayl yaradilacaq
	// 9 cu plug-in --> npm i --save-dev gulp-uglify-es // js faly-li sixmaq ucun
	// 10 cu plug-in --> use strict nen kod yaziriq sa ve isteyirik se kohne brouserlernen de kod islesin onda BABEl - den istifade edirik
	// 2 ci plug-in --> npm i gulp-file-include --save-dev
	// 11 ci plug-in --> npm i --save-dev gulp-webp
	// 12 ci plug-in --> npm i --save-dev gulp-webp-html
	// 13 cu plug-in --> npm i --save-dev gulp-ttf2woff gulp-ttf2woff2
	// 14 cu plug-in --> npm i --save-dev gulp-fonter   otf tipli srift fayllari ucun

	function js() {
	return src(path.src.js)
		.pipe(fileinclude())
		.pipe(dest(path.build.js))
		.pipe(
			uglify()
		)
		.on('error', function (err) { console.log(err.toString()); this.emit('end'); })
		.pipe(
			rename({
				extname: ".min.js"
			})
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());
}
// 11 ci plug-in npm i --save-dev gulp-imagemin  // sekilleri sixmaq ucun (keyfiyyetini itirmeden)
// npm i gulp-imagemin@^7.1.0
// /*.+(png|jpg|gif|ico|svg|webp



function images() {
	return src(path.src.img)
	.pipe(
		webp({
			quality:70
		})
	)
	.pipe(dest(path.build.img))
	.pipe(src(path.src.img))
	.pipe(
		imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3 // 0 to 7
		})
	)
	.pipe(dest(path.build.img))
	.pipe(browsersync.stream());
}		

function fonts(){
	src(path.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts));
	return src(path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts));
};




gulp.task('otf2ttf',function() {
	return src([source_folder + '/fonts/*.otf'])
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(dest(source_folder + '/fonts/'));
});


function watchFiles(params){
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);	
	gulp.watch([path.watch.img], images);	
}


	// 3 cu plug-in --> npm i del --save-dev
function clean (params){
		return del(path.clean);
}

function php (params){
	return src(path.src.php)
		.pipe(dest(path.build.php))
		.pipe(browsersync.stream());
}

let build = gulp.series(clean,gulp.parallel(js,css,html,images, fonts,php));
let watch = gulp.parallel(build,watchFiles,browserSync);

exports.php = php;
exports.fonts = fonts;
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.build = build;
exports.watch = watch; // exports --> gulp i yeni deyisenler ile dostlasdirmaq yeni gulp deyiseni basa dussun ve onlar ile islesin
exports.default = watch; // gulp-i ise salanda bu deyisen yerine yetirilsin




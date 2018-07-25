var nwjs_version = "0.12.0" // Keep this config var up to date.

var gulp        = require('gulp');
var notify      = require("gulp-notify");
var sass        = require('gulp-sass');
var minifycss   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var bundle      = require('gulp-bundle-assets');
var shell       = require('gulp-shell');
var del         = require('del');
var fileinclude = require('gulp-file-include');
var minifyHTML  = require('gulp-minify-html');
var exec        = require('child_process').exec;
var archiver    = require('gulp-archiver');
// var ftp         = require('vinyl-ftp');
// var mysql       = require('mysql');
var fs          = require('fs');

var db_credentials = {
  host     : 'mysql.gifslap.com',
  user     : 'gifslap_user',
  password : 'electric2015',
  database : 'gifslap'
}

// platform this is running on
var isWin = /^win/.test(process.platform);
if( isWin ){
  var operating_system = 'win'
}else{
  var operating_system = 'mac'
}

// Markup

gulp.task('deck_html', function() {
  gulp.src(['./html/deck/deck.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest('../dist/gifSlap.app/Contents/Resources/app.nw/'))

});

gulp.task('midi_map_html', function() {
  gulp.src(['./html/deck/midi-map.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest('../dist/gifSlap.app/Contents/Resources/app.nw/'))
    
});

gulp.task('main_html', function() {
  gulp.src(['./html/main/main.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest('../dist/gifSlap.app/Contents/Resources/app.nw/'))
    
});

// Styles

gulp.task('styles',  ['clean'], function() {
  return gulp.src('./scss/imports.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(minifycss())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('../dist/gifSlap.app/Contents/Resources/app.nw'))
    
});

// Scripts

gulp.task('scripts', ['clean'], function(){
  return gulp.src('./js/bundle.config.js')
  .pipe(bundle())
  .pipe(bundle.results('../dist/gifSlap.app/Contents/Resources/app.nw/js'))
  .pipe(gulp.dest('../dist/gifSlap.app/Contents/Resources/app.nw/js'))
  
});

// Close

gulp.task('close',function(){
  if( operating_system == 'mac' ){
    gulp.start('close_mac');
  }else{
    exec('taskkill /f /im gifSlap.exe');
  }
});

gulp.task('close_mac', shell.task([
  'osascript -e \'quit app "gifSlap"\'',
  'echo "quit app"'
],{
  ignoreErrors:true
}));

// Init Sublime

gulp.task('init_sublime', shell.task([
    'subl ~/gifslap/dev'
],{
  ignoreErrors:true
}));

// Open

gulp.task('open_win', ['delete_old_exes'], shell.task([
    'win\\gifSlap.exe'
],{
  ignoreErrors:true
}));

gulp.task('open_mac',['markup', 'styles', 'scripts'], shell.task([
    'sleep 1',
    'open ../dist/gifSlap.app',
    'echo "reloaded app"',
    'sleep .5',
    'open -a "Sublime Text"'
],{
  ignoreErrors:true
}));

// Clean

gulp.task('clean',function(){
  return del([
    '../dist/gifSlap.app/Contents/Resources/app.nw/js/**/*',
    './win/gifSlap.exe'
  ],{
    force:true
  });
});

// Watch

gulp.task('watch', ['build'], function() {
  
  gulp.watch([
    'html/**/*.html',
    'js/**/*.js',
    'scss/**/*.scss',
    '../dist/gifSlap.app/Contents/Resources/app.nw/gifSlap.html',
    '../dist/gifSlap.app/Contents/Resources/app.nw/html/**/*'
  ], ['build']);

});

gulp.task('make_app_zip_win', ['markup','styles','scripts'], function(){
  return gulp.src('../dist/gifSlap.app/Contents/Resources/app.nw/**/*')
    .pipe(archiver('app.zip'))
    .pipe(rename('app.nw'))
    .pipe(gulp.dest('./win'));
});

gulp.task('compile', ['make_app_zip_win'], shell.task([
  'copy /b nw.exe+app.nw gifSlap_noicon.exe'
],{
  cwd:'./win',
  ignoreErrors:true
}));

gulp.task('set_icon',['compile'],shell.task([
  '"Resource Hacker\\reshacker" -addoverwrite "gifSlap_noicon.exe", "gifSlap_tester.exe", "gifslap-icon.ico", ICONGROUP, IDR_MAINFRAME, 1033'
],{
  cwd:'./win',
  ignoreErrors:true
}));

gulp.task('rename_exe', ['set_icon'], function(){
  return gulp.src('win/gifSlap_tester.exe')
    .pipe(rename('gifSlap.exe'))
    .pipe(gulp.dest('./win'));
});

gulp.task('delete_old_exes',['rename_exe'], function(){
  return del([
    './win/gifSlap_tester.exe',
    './win/gifSlap_noicon.exe',
    './win/app.nw'
  ],{
    force:true
  });
});

gulp.task('build',function(){
  if( operating_system == 'mac' ){
    gulp.start('build_mac');
  }else{
    gulp.start('build_win');
  }
});

gulp.task('make_update_zip_win', ['clean_update_folder'], function(){

  version = gifSlap_version();

  return gulp.src('win/gifSlap.exe')
    .pipe(rename('gifSlap_update.exe'))
    .pipe(archiver("gifSlap_update_"+version+"_pc.zip"))
    .pipe(gulp.dest('./update'))
    .pipe(notify('Update Zipped'));
});

gulp.task('update_installer_version',function(){

  version = gifSlap_version();

  var setup_file = fs.readFileSync('./win/gifSlap_setup_script.iss', 'utf-8');
  setup_file = setup_file.replace(/^AppVersion=.*$/gim, 'AppVersion='+version);
  setup_file = setup_file.replace(/^OutputBaseFilename=.*$/gim, 'OutputBaseFilename=gifSlap_setup_'+version+'_pc');
  fs.writeFileSync('./win/gifSlap_setup_script.iss', setup_file, 'utf-8');

});

gulp.task('run_install_compiler',['update_installer_version','delete_old_exes'],shell.task([
  '"C:\/Program Files (x86)\/Inno Setup 5\/ISCC.exe" win\\gifSlap_setup_script.iss'
],{
  ignoreErrors:true
}));


gifSlap_version = function(){
  // get manifest version
  var gifSlap_package = require('../dist/gifSlap.app/Contents/Resources/app.nw/package.json');
  return gifSlap_package.version;
}

gulp.task('markup', ['clean'], function(){
  gulp.start(['main_html', 'deck_html', 'midi_map_html']);
});

gulp.task('build_mac', ['clean', 'close', 'markup', 'styles', 'scripts', 'open_mac']);
// gulp.task('build_mac', ['clean', 'close', 'markup', 'styles', 'scripts']);

gulp.task('build_win', ['clean', 'close', 'markup', 'styles', 'scripts', 'make_app_zip_win', 'compile','set_icon','rename_exe','delete_old_exes','open_win']);

gulp.task('win_make_installer',['update_installer_version','run_install_compiler']);

gulp.task('default',['watch']);
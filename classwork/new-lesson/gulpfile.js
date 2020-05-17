// function defaultTask(cb) {
//   console.log("Hello world!");
//   // place code for your default task here
//   done();
// }

// exports.default = defaultTask;

// import gulp to use it. We can import packages
//  usinge require() method

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// task are functions and the namne of the function is the task name

function sassTask() {
  //  we call the gulp package
  return (
    gulp
      //   src method: reads files from the path
      .src("./src/scss/main.scss")
      // it takes the main .scss file and then process it to css
      .pipe(sass())
      // gulp takes the processed file and put it in a folder
      .pipe(gulp.dest("./css"))
  );
}

function watchTask(done) {
  // watch method accepts two argument:
  // 1) patch to the file(-s) that you want to watch
  // 2) a task or tasks that will be executet when these files are changing

  //   gulp.watch("./src/scss/**/*.scss", sassTask);
  gulp.watch("./src/scss/**/*.scss", gulp.series(sassTask, reload));
  gulp.watch("./index.html", reload);
  done();
}

//  it creats a simple local server using the browser-sync package
function localServer(done) {
  browserSync.init({
    server: {
      // with the 'baseDir' property we specify the root of the server
      //  by default, it opens 'index.html' file
      baseDir: "./",
    },
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

//  to use the taski using gulp we need to export it.
exports.sass = sassTask;
// exports the watch task as a default task.
// it menas that we can run gulp without any parameters
// exports.default = watchTask;

//  when running the default task, we want to:
// 1) run a local server
// 2) we want to watch files
exports.default = gulp.series(localServer, watchTask);

const mix = require('laravel-mix');
const historyApiFallback = require('connect-history-api-fallback');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .extract()
   .browserSync({
      proxy: 'http://laravel_react_spa.test',
      middleware: [ historyApiFallback({
         index: '/' // '/index.php' - if you using [php artisan serve]
      }) ]
   });

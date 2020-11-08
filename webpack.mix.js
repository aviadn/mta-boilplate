let mix = require('laravel-mix');

require('laravel-mix-tailwind');


mix.js('src/app.js', 'dist')
   .sass('src/app.scss', 'dist')
   .tailwind("./tailwind.config.js")
   .sourceMaps();
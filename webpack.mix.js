let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');


// mix.js('./src/js/app.js', 'dist/js/').extract(['vue'])

mix.js('./src/js/app.js', 'dist/js/')
    .sass('src/css/app.scss', 'dist/css/').options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')]
    })
    .purgeCss({
        enabled: mix.inProduction(),
        folders: ['src', 'src/*'],
        extensions: ['html', 'js', 'php', 'vue'],
    });
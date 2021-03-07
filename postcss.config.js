const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./frontend/src/**/*.svelte', './frontend/src/**/*.html'],
    whitelistPatterns: [/svelte-/],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
    plugins: [
        require('tailwindcss'),
        ...(!process.env.ROLLUP_WATCH ? [purgecss] : [])
    ]
}
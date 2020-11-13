module.exports = {
    theme: {
        fontFamily: {
            sourceSans: ['Source\\ Sans \\Pro'],
        },
        extend: {
            fontSize: {
                heading40: '2.5rem',
            },
            colors: {
                lightBlue: '#94BFFF',
                darkBlue: '#61A0FF',
            },
        },
    },
    variants: {},
    plugins: [],
    purge: {
        // Filenames to scan for classes
        content: [
            './src/**/*.html',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
        ],
        // PurgeCSS options
        options: {
            // Whitelist specific selectors by name
            // whitelist: [],
        },
    },
};

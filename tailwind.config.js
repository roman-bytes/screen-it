module.exports = {
    theme: {
        fontFamily: {
            sourceSans: ['Source\\ Sans \\Pro'],
        },
        extend: {
            width: {
                buttonWidth: '560px',
            },
            fontSize: {
                heading40: '2.5rem',
            },
            colors: {
                lightBlue: '#94BFFF',
                darkBlue: '#61A0FF',
                grey: '#CCCCCC',
                lineColor: '#EEEEEE',
                textLight: '#AAAAAA',
            },
            inset: {
                '100': '100%',
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

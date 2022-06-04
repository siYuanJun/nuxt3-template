module.exports = {
    prefix: '',
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './*.vue'],
    corePlugins: {
        // backgroundOpacity: false,
        // scale: false,
        // skew: false,
        // stroke: false,
        // strokeWidth: false,
        tableLayout: false,
        // translate: false,
        // transform: false,
        // transformOrigin: false,
        // transitionDelay: false,
        // transitionDuration: false,
        // transitionProperty: false,
        // transitionTimingFunction: false,
        listStyleType: false,
        listStylePosition: false,
    },
    theme: {
        fontFamily: {},
        screens: {
            sm: '640px',
            md: '1366px',
            lg: '1440px',
        },
        spacing: {
            none: '0',
            one: '1px',
            xs: '0.312rem', // 5px
            sm: '0.625rem', // 10px
            md: '1.25rem', // 20px
            lg: '1.875rem', // 30px
            xl: '3.125rem', // 50px
            xxl: '7.5rem', // 120px
        },
        borderWidth: {
            default: '1px',
            0: '0',
            2: '2px',
            4: '4px',
        },
        fontSize: {
            none: '0',
            one: '1px',
            xs: '0.75rem', // 12px
            sm: '0.875rem', // 14px
            md: '1rem', // 16px
            lg: '1.123rem', // 18px
            xl: '1.375rem', // 22px
            xxl: '1.75rem', // 28px
        },
        fontWeight: {
            normal: 400,
            bold: 800,
        },
        letterSpacing: {
            normal: '0',
            wide: '.025em',
        },
        lineHeight: {
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        },
        extend: {
            colors: {
                themes: 'var(--color-themes)',
            },
            spacing: {},
        },
    },
    variants: {
        // backgroundColor: ['responsive'],
        // borderColor: ['responsive'],
        extend: {},
    },
    plugins: [],
}

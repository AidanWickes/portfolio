import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: ['class'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            amethyst: {
                DEFAULT: '#AC97F3',
                0: '#564C7A',
                10: '#675B92',
                20: '#786AAA',
                30: '#8A79C2',
                40: '#9B88DB',
                50: '#AC97F3',
                60: '#B4A1F4',
                70: '#BDACF5',
                80: '#C5B6F7',
                90: '#CDC1F8',
                100: '#D6CBF9',
            },
            heliodor: {
                DEFAULT: '#EEE277',
                0: '#77713C',
                10: '#8F8847',
                20: '#A79E53',
                30: '#BEB55F',
                40: '#D6CB6B',
                50: '#EEE277',
                60: '#F0E585',
                70: '#F1E892',
                80: '#F3EBA0',
                90: '#F5EEAD',
                100: 'F7F1BB',
            },
            onyx: {
                DEFAULT: '#000000',
                0: '#000000',
                10: '#191919',
                20: '#333333',
                30: '#4D4D4D',
                40: '#666666',
                50: '#808080',
                60: '#999999',
                70: '#B3B3B3',
                80: '#CCCCCC',
                90: '#E6E6E6',
                100: '#FFFFFF',
            },
            alabaster: {
                DEFAULT: '#FFFFFF',
                0: '#CCCCCC',
                10: '#D1D1D1',
                20: '#D6D6D6',
                30: '#DBDBDB',
                40: '#E0E0E0',
                50: '#E6E6E6',
                60: '#EBEBEB',
                70: '#F0F0F0',
                80: '#F5F5F5',
                90: '#FAFAFA',
                100: '#FFFFFF',
            },
            jasper: {
                DEFAULT: '#B34724',
                0: '#5A2412',
                10: '#6B2B16',
                20: '#7D3219',
                30: '#8F391D',
                40: '#A14020',
                50: '#B34724',
                60: '#BB593A',
                70: '#C26C50',
                80: '#CA7E66',
                90: '#D1917C',
                100: '#D9A392',
            },
            amber: {
                DEFAULT: '#A66117',
                0: '#53310C',
                10: '#643A0E',
                20: '#744410',
                30: '#854E12',
                40: '#955715',
                50: '#A66117',
                60: '#AF712E',
                70: '#B88145',
                80: '#C1905D',
                90: '#CAA074',
                100: '#D3B08B',
            },
            emerald: {
                DEFAULT: '#267841',
                0: '#133C21',
                10: '#174827',
                20: '#1B542E',
                30: '#1E6034',
                40: '#226C3B',
                50: '#267841',
                60: '#3C8654',
                70: '#519367',
                80: '#67A17A',
                90: '#7DAE8D',
                100: '#93BCA0',
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-zilla)'],
            },
            fontSize: {
                'h1-lg': [
                    '80px',
                    {
                        fontWeight: '700',
                        lineHeight: '96px',
                    },
                ],
                'h1-sm': [
                    '48px',
                    {
                        fontWeight: '700',
                        lineHeight: '60px',
                    },
                ],
                'h2-lg': [
                    '68px',
                    {
                        fontWeight: '700',
                        lineHeight: '84px',
                    },
                ],
                'h2-sm': [
                    '40px',
                    {
                        fontWeight: '700',
                        lineHeight: '48px',
                    },
                ],
                'h3-lg': [
                    '60px',
                    {
                        fontWeight: '600',
                        lineHeight: '72px',
                    },
                ],
                'h3-sm': [
                    '36px',
                    {
                        fontWeight: '600',
                        lineHeight: '44px',
                    },
                ],
                'h4-lg': [
                    '52px',
                    {
                        fontWeight: '600',
                        lineHeight: '64px',
                    },
                ],
                'h4-sm': [
                    '32px',
                    {
                        fontWeight: '600',
                        lineHeight: '40px',
                    },
                ],
                'h5-lg': [
                    '44px',
                    {
                        fontWeight: '600',
                        lineHeight: '52px',
                    },
                ],
                'h5-sm': [
                    '28px',
                    {
                        fontWeight: '600',
                        lineHeight: '36px',
                    },
                ],
                'h6-lg': [
                    '36px',
                    {
                        fontWeight: '600',
                        lineHeight: '44px',
                    },
                ],
                'h6-sm': [
                    '24px',
                    {
                        fontWeight: '600',
                        lineHeight: '32px',
                    },
                ],
                'title-lg': [
                    '28px',
                    {
                        fontWeight: '400',
                        lineHeight: '36px',
                    },
                ],
                'title-sm': [
                    '20px',
                    {
                        fontWeight: '400',
                        lineHeight: '28px',
                    },
                ],
                'body-lg': [
                    '24px',
                    {
                        fontWeight: '400',
                        lineHeight: '32px',
                    },
                ],
                'body-sm': [
                    '18px',
                    {
                        fontWeight: '400',
                        lineHeight: '24px',
                    },
                ],
                'button-lg': [
                    '24px',
                    {
                        fontWeight: '700',
                        lineHeight: '32px',
                    },
                ],
                'button-sm': [
                    '18px',
                    {
                        fontWeight: '700',
                        lineHeight: '24px',
                    },
                ],
                'caption-lg': [
                    '20px',
                    {
                        fontWeight: '400',
                        lineHeight: '24px',
                    },
                ],
                'caption-sm': [
                    '16px',
                    {
                        fontWeight: '400',
                        lineHeight: '20px',
                    },
                ],
            },
            spacing: {
                '1x': '8px',
                '2x': '16px',
                '3x': '24px',
                '4x': '32px',
                '6x': '48px',
                '8x': '64px',
                '12x': '96px',
                '16x': '128px',
            },
        },
    },
}

export default config

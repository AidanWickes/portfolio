import { cva } from 'cva'

export const buttonStyles = cva({
    base: 'elevation-2 active:elevation-surface flex items-center justify-center gap-2 text-button-lg sm:text-button-sm',
    variants: {
        intent: {
            primary: 'bg-amethyst hover:bg-amethyst-30 active:bg-amethyst-30',
            secondary: 'bg-heliodor hover:bg-heliodor-30 active:bg-heliodor-30',
        },
        size: {
            sm: 'px-8x py-3x',
            lg: 'px-12x py-4x',
        },
    },
    defaultVariants: {
        intent: 'primary',
        size: 'sm',
    },
})

import { cn } from '@/lib/utils/cn'
import { VariantProps } from 'cva'
import { ComponentPropsWithRef } from 'react'
import { buttonStyles } from './Helper'

type ButtonElementProps = ComponentPropsWithRef<'button'>

export interface ButtonProps
    extends ButtonElementProps,
        VariantProps<typeof buttonStyles> {
    children: React.ReactNode
}

export default function Button({
    className,
    intent,
    size,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(buttonStyles({ intent, size }), className)}
            type="button"
        >
            {children}
        </button>
    )
}

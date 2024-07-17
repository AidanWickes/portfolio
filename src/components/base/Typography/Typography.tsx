import { cn } from '@/lib/utils/cn'
import { ElementType } from 'react'

type Variant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'title'
    | 'body'
    | 'caption'
    | 'button'

interface Props {
    variant: Variant
    children: React.ReactNode
    className?: string
    as?: ElementType
}

const tags: Record<Variant, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    title: 'p',
    body: 'p',
    caption: 'span',
    button: 'span',
}

const sizes: Record<Variant, string> = {
    h1: 'text-h1-lg sm:text-h1-sm',
    h2: 'text-h2-lg sm:text-h2-sm',
    h3: 'text-h3-lg sm:text-h3-sm',
    h4: 'text-h4-lg sm:text-h4-sm',
    h5: 'text-h5-lg sm:text-h5-sm',
    h6: 'text-h6-lg sm:text-h6-sm',
    title: 'text-title-lg sm:text-title-sm',
    body: 'text-body-lg sm:text-body-sm',
    caption: 'text-caption-lg sm:text-caption-sm',
    button: 'text-button-lg sm:text-button-sm',
}

export const Typography = ({ variant, children, className, as }: Props) => {
    const sizeClasses = sizes[variant]
    const Tag = as || tags[variant]

    return <Tag className={cn(sizeClasses, className)}>{children}</Tag>
}

import { cn } from '@/utils/cn'

interface ButtonProps {
    variant?: 'primary' | 'secondary'
    label: string
    onClick?: () => void
}

export const Button = ({
    variant = 'primary',
    label,
    ...props
}: ButtonProps) => {
    let variantClasses = cn([
        'border p-4',
        {
            'bg-black text-white': variant === 'primary',
        },
    ])

    return <button className={cn([variantClasses])}>{label}</button>
}

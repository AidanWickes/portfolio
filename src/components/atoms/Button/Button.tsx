import { cn } from '@/lib/utils/cn'

export const Button = ({
    variant = 'primary',
    children,
    onClick,
}: {
    variant?: 'primary' | 'secondary'
    children: React.ReactNode
    onClick?: () => void
}) => {
    const variantClasses = cn([
        'border p-4',
        { 'bg-black text-white': variant === 'primary' },
    ])

    return (
        <button onClick={onClick} className={cn([variantClasses])}>
            {children}
        </button>
    )
}

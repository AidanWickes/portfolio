import { cn } from '@/lib/utils/cn'

export const Card = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => (
    <div className={cn(['border', className])}>
        <h1>Card</h1>
        {children}
    </div>
)

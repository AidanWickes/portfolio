import { cn } from '@/lib/utils/cn'
import * as HeroIcons from '@heroicons/react/24/outline'

export const Icon = ({ icon }: { icon: string }) => {
    const Icon: JSX.Element = HeroIcons[icon]
    return <Icon className={cn(['h-6 text-inherit', icon])} />
}

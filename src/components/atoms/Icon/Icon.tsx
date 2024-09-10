import { cn } from '@/lib/utils/cn'
import * as HeroIcons from '@heroicons/react/24/outline'

const Icon = ({ icon }: { icon: string }) => {
    const Icon: JSX.Element = HeroIcons[icon]
    return <Icon className={cn(['text-inherit h-6', icon])} />
}

export default Icon

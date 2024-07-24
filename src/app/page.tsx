import Button from '@/components/atoms/Button/Button'
import { Icon } from '@/components/atoms/Icon'
import { Typography } from '@/components/base/Typography/Typography'

export default function Home() {
    return (
        <>
            <Button intent="secondary">
                <Typography variant="button">Button Label</Typography>
                <Icon icon="ChevronRightIcon" />
            </Button>
            <Typography variant="h1">Test</Typography>
        </>
    )
}

import * as HeroIcons from '@heroicons/react/24/outline'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
    title: 'Atoms/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        icon: {
            name: 'Icon',
            control: { type: 'select' },
            options: Object.keys(HeroIcons),
        },
    },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
    args: {
        icon: 'ChevronRightIcon',
    },
}

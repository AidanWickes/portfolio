import type { Meta, StoryObj } from '@storybook/react'

import { fn } from '@storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Example',
        onClick: fn(),
    },
    argTypes: {
        variant: {
            name: 'Button Variant',
            description: 'The variant of the button',
            control: { type: 'inline-radio' },
            options: {
                Primary: 'primary',
                Secondary: 'secondary',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        variant: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
}

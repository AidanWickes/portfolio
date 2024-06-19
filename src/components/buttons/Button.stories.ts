import { Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
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
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        label: 'Button',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        label: 'Button',
    },
}

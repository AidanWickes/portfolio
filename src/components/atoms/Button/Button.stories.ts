import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        intent: {
            name: 'Button Intent',
            control: { type: 'inline-radio' },
            options: ['primary', 'secondary'],
        },
        size: {
            name: 'Button Size',
            control: { type: 'inline-radio' },
            options: ['sm', 'lg'],
        },
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Button',
        onClick: () => {
            window.console.log('Primary button clicked!')
        },
    },
}

export const Secondary: Story = {
    args: {
        children: 'Button',
        intent: 'secondary',
        onClick: () => {
            window.console.log('Secondary button clicked!')
        },
    },
}

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Button',
        onClick: () => {
            window.console.log('Small button clicked')
        },
    },
}

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Button',
        onClick: () => {
            window.console.log('Large button clicked')
        },
    },
}

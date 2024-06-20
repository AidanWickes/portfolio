import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta: Meta<typeof Card> = {
    title: 'Molecules/Card',
    component: Card,
    tags: ['autodocs'],
    args: {
        children: 'Example',
        variant: 'default',
    },
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {}

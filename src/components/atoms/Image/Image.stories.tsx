import type { Meta, StoryObj } from '@storybook/react'

import { Image } from './Image'

const meta: Meta<typeof Image> = {
    title: 'Atoms/Image',
    component: Image,
    tags: ['autodocs'],
    args: {
        children: 'Example',
        variant: 'default',
    },
}

export default meta

type Story = StoryObj<typeof Image>

export const Default: Story = {}

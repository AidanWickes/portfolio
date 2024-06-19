import { Meta, StoryObj } from "@storybook/react";
import { DynamicIcon } from "./DynamicIcon";
import * as Icons from '@heroicons/react/24/outline';

const meta: Meta<typeof DynamicIcon> = {
    component: DynamicIcon,
    parameters: {
        layout: 'centered',
    },
    title: 'Dynamic Icon',
    argTypes: {
        icon : {
            name: 'Icon',
            control: { type: 'select' },
            options: Object.keys(Icons),
        }
    }
};

export default meta;
type Story = StoryObj<typeof DynamicIcon>;

export const Icon = {
    args: {
        icon: 'ChevronLeftIcon'
    }
}
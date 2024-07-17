import type { Preview } from '@storybook/react'
import { zilla } from '../src/lib/fonts'
import '../src/styles/globals.css'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [
        (Story) => (
            <div className={`font-sans ${zilla.variable}`}>
                <Story />
            </div>
        ),
    ],
}

export default preview

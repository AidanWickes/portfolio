import { render, screen } from '@/tests/test-utils'

import { Button } from '.'

describe('Button', () => {
    it('should render the heading', () => {
        render(<Button>Example</Button>)

        // Assert
        screen.getByText('Example')
    })
})

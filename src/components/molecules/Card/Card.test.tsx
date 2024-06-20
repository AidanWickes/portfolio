import { render, screen } from '@/tests/test-utils'

import { Card } from '.'

describe('Card', () => {
    it('should render the heading', () => {
        render(<Card />)

        // Assert
        screen.getByRole('heading', { name: /Card/i })
    })
})

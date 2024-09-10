import { render, screen } from '@/tests/test-utils'

import { Image } from '.'

describe('Image', () => {
    it('should render the heading', () => {
        render(<Image />)

        // Assert
        screen.getByRole('heading', { name: /Image/i })
    })
})

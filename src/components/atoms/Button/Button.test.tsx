import { render } from '@/tests/test-utils'
import Button from './Button'

describe('Button', () => {
    it('renders correctly', () => {
        const { container } = render(<Button>Click Me</Button>)

        expect(container.getElementsByClassName('bg-amethyst').length).toBe(1)
    })
})

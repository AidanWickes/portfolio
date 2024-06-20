import { render } from '@/tests/test-utils'

import { Icon } from '.'

describe('Icon', () => {
    it('should render the icon', () => {
        const { container } = render(<Icon icon="ChevronRightIcon" />)

        // Assert
        expect(
            container.getElementsByClassName('ChevronRightIcon').length
        ).toBe(1)
    })
})

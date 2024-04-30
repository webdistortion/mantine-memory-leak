import { render } from '@/test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('renders with no leaks', async () => {
    const { container } = render(<Welcome />);
    expect(container).toBeDefined();
  });
});

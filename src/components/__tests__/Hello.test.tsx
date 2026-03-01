import { render, screen } from '@testing-library/react';
import { Hello } from '@/components/Hello';

describe('Hello', () => {
  it('renders the correct text', () => {
    render(<Hello />);
    expect(screen.getByText('Hello, Western Civ!')).toBeInTheDocument();
  });
});

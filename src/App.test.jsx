import { render, screen } from '@testing-library/react';
import { Link } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /dashboard/i,
    );
  });

  it('user not logged in', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      /please log in/i,
    );
  });

  it('wrong path redirects to error page', async () => {
    const user = userEvent.setup();
    const { lnk } = render(<Link to='/' />);

    await user.click(lnk);
  });
});

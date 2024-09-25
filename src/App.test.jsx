import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from './App';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('renders headline', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /dashboard/i,
    );
  });

  it('user not logged in', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      /please log in/i,
    );
  });

  it('dashboard in nav links to welcome page', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const dash = screen.getByRole('link', { name: 'Dashboard' });
    await user.click(dash);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /dashboard/i,
    );
  });

  it('login takes you to login screen', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const loginButton = screen.getByRole('link', { name: 'Login' });
    await user.click(loginButton);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  });

  it('providing username redirects user to dashboard with that user logged in', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='login' element={<Login />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const textInput = screen.getByRole('textbox', { name: /username/i });
    const button = screen.getByRole('button', { name: /submit/i });

    await user.type(textInput, 'snuken');
    await user.click(button);

    const welcomeMsg = await screen.findByRole('heading', {
      level: 2,
      name: /welcome snuken/i,
    });

    expect(welcomeMsg).toBeInTheDocument();

    // expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
    //   /welcome snuken/i,
    // );
  });
});

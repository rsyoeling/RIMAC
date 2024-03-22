/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import User from '../pages/User';

describe('User component', () => {
  test('renders user', () => {
    const userData = {
      name: 'Lucas',
      lastName: 'Lucas Caceres',
      birthDay: '1993-02-01',
    };

    render(<User />);

    expect(screen.getByText(userData.name)).toBeInTheDocument();
    expect(screen.getByText(`Nombre Completo : ${userData.lastName}`)).toBeInTheDocument();
    expect(screen.getByText(`Cumpleaños : ${userData.birthDay}`)).toBeInTheDocument();
  });
});
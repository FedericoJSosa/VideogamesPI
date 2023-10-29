import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders Card', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const cardElement = screen.getByTestId('card');
  expect(cardElement).toBeInTheDocument();
});

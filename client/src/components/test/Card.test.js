import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../Card/Card';

test('render Card', () => {
  const cardProps = {
    id: 1,
    img: 'url',
    name: 'Alan Wake',
    genres: 'Action, Adventure',
  };

  render(
    <Router>
      <Card {...cardProps} />
    </Router>
  );

  const cardLink = screen.getByRole('link');
  const cardImage = screen.getByAltText('Not found');
  const cardTitle = screen.getByText('Example Game');
  const cardGenres = screen.getByText('Genres: Action, Adventure');

  expect(cardLink).toHaveAttribute('href', '/home/detail/1');
  expect(cardImage).toHaveAttribute('src', 'url');
  expect(cardTitle).toBeInTheDocument();
  expect(cardGenres).toBeInTheDocument();
});

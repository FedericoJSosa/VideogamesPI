const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js'); 
const { conn } = require('../../src/db.js');

const agent = session(app);

describe('Game routes', () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error('Unable to connect to the database:', err);
    })
  );

  describe('GET /videojuegos', () => {
    it('should get 200', async () => {
      await agent.get('/videojuegos').expect(200);
    });
  });

  describe('GET /videojuegos/search', () => {
    it('should get 200 with search query', async () => {
      const searchQuery = 'exampleGame';
      await agent.get(`/videojuegos/search?searchGameByName=${searchQuery}`).expect(200);
    });
  });

  describe('GET /videojuegos/:id', () => {
    it('should get 200 with valid ID', async () => {
      const validId = '123'; 
      await agent.get(`/videojuegos/${validId}`).expect(200);
    });

    it('should get 404 with invalid ID', async () => {
      const invalidId = 'zzzzzzzzzzzzzz'; 
      await agent.get(`/videojuegos/${invalidId}`).expect(404);
    });
  });

  describe('POST /videojuegos', () => {
    it('should create a new game and get 200', async () => {
      const newGame = {
        name: 'New Game',
        image: 'game.jpg',
        platforms: ['PS4', 'Xbox One'],
        description: 'Description of the new game.',
        releaseDate: '2023-11-01',
        rating: 4.5,
        genres: ['Action', 'Adventure'],
      };
      await agent.post('/videojuegos').send(newGame).expect(200);
    });

    it('should handle invalid data and get 400', async () => {
      const invalidGame = {
        platforms: ['PS4', 'Xbox One'],
        description: 'Description of the new game.',
        releaseDate: '2023-11-01',
        rating: 4.5,
        genres: ['Action', 'Adventure'],
      };
      await agent.post('/videojuegos').send(invalidGame).expect(400);
    });
  });
});

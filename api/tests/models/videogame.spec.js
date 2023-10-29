const { DataTypes } = require('sequelize');
const { expect } = require('chai');
const { Sequelize, Op } = require('sequelize');
const { Videogame, conn } = require('../../src/db.js');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Attributes and Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));

    it('should throw an error if name is null', (done) => {
      Videogame.create({
        description: 'Sample description',
        platforms: 'Sample platform',
        image: 'sample.jpg',
        releaseDate: new Date(),
        rating: 5
      })
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
    });

    it('should throw an error if name is not unique', (done) => {
      Videogame.create({
        name: 'Super Mario Bros',
        description: 'Sample description',
        platforms: 'Sample platform',
        image: 'sample.jpg',
        releaseDate: new Date(),
        rating: 5
      })
        .then(() => {
          Videogame.create({
            name: 'Super Mario Bros',
            description: 'Sample description',
            platforms: 'Sample platform',
            image: 'sample.jpg',
            releaseDate: new Date(),
            rating: 5
          });
        })
        .then(() => done(new Error('Name must be unique')))
        .catch(() => done());
    });

    it('should work when all attributes are valid', () => {
      Videogame.create({
        name: 'Super Mario Bros',
        description: 'Sample description',
        platforms: 'Sample platform',
        image: 'sample.jpg',
        releaseDate: new Date(),
        rating: 5
      });
    });
  });
});


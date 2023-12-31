const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    releaseDate:{
      type: DataTypes.DATE,
      allowNull: false
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false}

  });
};

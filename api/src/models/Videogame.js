const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    decription:{
      type: DataTypes.STRING,
      allowNull: false
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: false
    },
    img:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    releseDate:{
      type: DataTypes.STRING,
      allowNull: false
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false}

  });
};

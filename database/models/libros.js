'use strict';
module.exports = (sequelize, DataTypes) => {
  const libros = sequelize.define('libros', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  libros.associate = function(models) {
    // associations can be defined here
  };
  return libros;
};
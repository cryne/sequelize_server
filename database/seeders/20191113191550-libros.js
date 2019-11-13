'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'libros',
    [
      {
        titulo: '50 sombras',
        descripcion: 'juegos de azar y ya saben',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Harry potter',
        descripcion: 'chico acosado por el asesino de sus padres',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('libros',null,{})
};
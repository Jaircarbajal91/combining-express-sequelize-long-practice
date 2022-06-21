'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Insects',[{
      name: 'Western Pygmy Blue Butterfly',
      description: "askdjhfas",
      territory: "dsfasfad",
      fact: 'Have been around for more than 200 million years',
      millimeters: 12.0
    }
    // {
    //   name: 'Patu Digua Spider',
    //   fact: 'smaller than even the head of a pin.',
    //   millimeters: 0.3

    // },
    // {
    //   name: 'Scarlet Dwarf Dragonfly',
    //   fact: 'Fossil records show it',
    //   millimeters: 20.0
    // },
    // {
    //   name: 'Midget Moths',
    //   fact: 'as butterfly antennae have a ',
    //   millimeters: 3.0
    // }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects', {
      name: ['Western Pygmy Blue Butterfly', 'Patu Digua Spider', 'Scarlet Dwarf Dragonfly', 'Midget Moths']
    })
  }
};

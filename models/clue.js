const mongoose = require("mongoose");

const clueSchema = new mongoose.Schema({
    clueId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowIncrement: true
    },
     clueLocationId: {
         type: DataTypes.INTEGER,
         references: {
          Model: "location",
         primaryKey: "locationId"}
    },

     clueString : {
        type: DataTypes.STRING(200),
        allowNull: false

      },
      clueSortOrder: {
         type: DataTypes.INTEGER,
         allowNull: false,
         order: ['clueSortOrder', 'ASC'] // Sorts by COLUMN_NAME in ascending order;
      } 
});
module.exports = mongoose.model('Clue', clueSchema);
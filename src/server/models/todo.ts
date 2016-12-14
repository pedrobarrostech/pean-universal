'use strict';

function TodoSchema(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Todo.belongsTo(models.User);
      }
    }
  });
  return Todo;
};


export { TodoSchema };
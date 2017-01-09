const Todo = require('./Todo');

module.exports = class List {

  /**
   * Set the mapping for this entity.
   * This will become prettier once decorators come through (see second link below)
   *
   * @param {Mapping} mapping
   *
   * @see https://wetland.spoonx.org/API/mapping.html
   * @see https://github.com/tc39/proposal-decorators
   */
  static setMapping(mapping) {
    mapping.forProperty('id').increments().primary();

    mapping.field('name', {type: 'string'});

    mapping.forProperty('user')
      .manyToOne({targetEntity: 'User', inversedBy: 'lists'})
      .joinColumn({onDelete: 'cascade'});

    mapping.forProperty('todos')
      .oneToMany({targetEntity: Todo, mappedBy: 'list'});
  }
};

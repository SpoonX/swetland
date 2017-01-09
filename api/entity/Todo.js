const TodoRepository = require('../repository/TodoRepository');

module.exports = class Todo {
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
    // Use a custom repository
    mapping.entity({repository: TodoRepository});

    mapping.forProperty('id').increments().primary();

    mapping.field('task', {type: 'string'});
    mapping.field('done', {type: 'boolean', defaultTo: false});

    mapping.forProperty('list')
      .manyToOne({targetEntity: 'List', inversedBy: 'todos'})
      .joinColumn({onDelete: 'cascade'});
  }
};

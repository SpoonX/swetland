const List                      = require('./List');
const bcrypt                    = require('bcrypt');
const {ArrayCollection, Entity} = require('wetland');

module.exports = class User extends Entity {
  /**
   * Initialize properties for code-completion and default values.
   * This will be prettier once class properties come through.
   *
   * NOTE: This is optional. Purely here for illustrational purposes.
   *
   * @see https://github.com/tc39/proposal-class-public-fields
   */
  constructor() {
    super(...arguments);

    this.username = null;
    this.password = null;
    this.email    = null;
    this.lists    = new ArrayCollection();
  }

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
    // Primary key
    mapping.forProperty('id').increments().primary();

    // Fields
    mapping.field('username', {type: 'string'});
    mapping.field('password', {type: 'string'});
    mapping.field('email', {type: 'string'});

    // Relations
    mapping.oneToMany('lists', {targetEntity: List, mappedBy: 'user'});
  }

  /**
   * Before creating the user, make sure the password gets hashed.
   *
   * @returns {Promise}
   */
  beforeCreate() {
    return bcrypt.hash(this.password, 10).then(hash => {
      this.password = hash;
    });
  }

  /**
   * We don't want to expose the password to the world (even if it's hashed).
   *
   * @returns {{}}
   */
  toJSON() {
    // `.toObject()` is a method on `Entity`.
    // This gives us a POJO of our entity's data (minus relations).
    let values = this.toObject();

    delete values.password;

    return values;
  }
};

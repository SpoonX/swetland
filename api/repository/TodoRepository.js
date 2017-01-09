const EntityRepository = require('wetland').EntityRepository;

module.exports = class TodoRepository extends EntityRepository {
  findByContainingCake() {
    return this.getQueryBuilder('t')
      .select('t')
      .where({task: {contains: 'cake'}})
      .getQuery()
      .getResult();
  }

  findCountByContainingCake() {
    return this.getQueryBuilder('t')
      .select({count: '*'})
      .where({task: {contains: 'cake'}})
      .getQuery()
      .getSingleScalarResult();
  }

  findNested() {
    return this.getQueryBuilder('t')
      .select(['t', 'l', 'u'])
      .innerJoin('list', 'l')
      .innerJoin('l.user', 'u')
      .getQuery()
      .getResult();
  }
};

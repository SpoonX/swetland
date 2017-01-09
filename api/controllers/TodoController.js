/**
 * TodoController
 *
 * @description :: Server-side logic for managing todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  cake: (req, res) => {
    req.getRepository()
      .findByContainingCake()
      .then(res.ok)
      .catch(res.serverError);
  },

  cakecount: (req, res) => {
    req.getRepository()
      .findCountByContainingCake()
      .then(count => res.ok({count}))
      .catch(res.serverError);
  },

  nested: (req, res) => {
    req.getRepository()
      .findNested()
      .then(res.ok)
      .catch(res.serverError);
  },
};

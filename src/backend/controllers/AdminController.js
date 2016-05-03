'use strict';

const index = {
  get(req, res) {
    res.end('Admin');
  },
};

module.exports = {
  index,
};

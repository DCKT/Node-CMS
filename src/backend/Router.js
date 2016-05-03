'use strict';

const isLogged   = rootRequire('src/backend/middleware/isLogged');

module.exports = [
  {
    path: '/admin',
    handler: rootRequire('src/backend/routes/AdminRoute'),
    middleware: isLogged,
  },
];

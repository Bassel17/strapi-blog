module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '05b07a21447a8c4076e1869c8c836ee7'),
  },
});

export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ff95aeba6035ab3dea647302113c3809'),
  },
});

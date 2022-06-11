export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('POSTGRES_DB', 'server'),
      user: env('POSTGRES_USER', 'user'),
      password: env('POSTGRES_PASSWORD', 'password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

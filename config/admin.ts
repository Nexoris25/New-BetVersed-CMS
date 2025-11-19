export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      accessTokenLifespan: 1800, // 30 minutes (in seconds)
      maxRefreshTokenLifespan: 604800, // 7 days (in seconds)
      idleRefreshTokenLifespan: 604800, // 7 days (in seconds)
      maxSessionLifespan: 86400, // 1 day (in seconds)
      idleSessionLifespan: 3600, // 1 hour (in seconds)
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
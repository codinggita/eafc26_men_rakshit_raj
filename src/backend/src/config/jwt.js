import dotenv from 'dotenv';

dotenv.config();

export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'super_secret_jwt_key_ea_fc_26_analytics_platform_2026_safe',
  expiresIn: process.env.JWT_EXPIRES_IN || '7d',
};

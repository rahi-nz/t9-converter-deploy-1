const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3030'
  : 'https://your_deployment.server.com';

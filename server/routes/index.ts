import messageServerRoutes from './server';

export default {
  message: {
    type: 'content-api',
    routes: [...messageServerRoutes],
  }
};

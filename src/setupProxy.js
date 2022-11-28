const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
      createProxyMiddleware({
        target: 'https://leetcode.com',
        changeOrigin: true,
      })
  );
};
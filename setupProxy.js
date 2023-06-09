const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

const app = express();

app.use(
  createProxyMiddleware('/svc', {
    target: 'https://api.nytimes.com',
    changeOrigin: true,
    secure: false,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    },
  })
);

app.listen(3001, () => {
  console.log('Proxy server is running on port 3001');
});

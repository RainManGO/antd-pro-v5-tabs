
export default {
  dev: {
    'auth/': {
      target: 'http://192.168.248.198/api/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    'auth/': {
      target: 'http://192.168.248.198/api/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    'auth/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};

const env = process.env;

module.exports = {
  apps: [
    {
      name: 'yue-code-api',
      script: './dist/main.js',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        ...env,
      },
      exec_mode: 'cluster',
      combine_logs: true,
    },
  ],
};

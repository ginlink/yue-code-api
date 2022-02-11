module.exports = {
  apps: [
    {
      name: 'convert-dashboard-api',
      script: './dist/main.js',
      instances: 1,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      exec_mode: 'cluster',
      combine_logs: true,
    },
  ],
};

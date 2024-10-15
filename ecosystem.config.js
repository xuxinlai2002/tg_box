module.exports = {
  apps: [{
    name: "telegram-bot",
    script: "./Bot/bot.js",
    watch: true,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}

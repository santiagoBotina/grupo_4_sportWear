module.exports = {
  development: {
    username: "root",
    password: null,
    database: "sport_wear",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};

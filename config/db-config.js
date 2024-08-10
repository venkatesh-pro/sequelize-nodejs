const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("firstmysqlvenkat", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
});

const connectDb = async () => {
  sequelize
    .authenticate()
    .then(async (res) => {
      await sequelize.sync({ force: false });
      console.log("Connected To DB");
    })
    .catch((err) => {
      console.log("err=>", err);
    });
};

module.exports = { sequelize, connectDb };

const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('successfully connected to the game server');
    conn.write('Name: HR');
  });

  conn.setEncoding("utf8");

  return conn;
};



module.exports = { connect };
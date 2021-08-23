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

    // setTimeout(() => {
    //   conn.write("Move: up")
    //   }, 100)

    // setInterval(() => {
    // conn.write("Move: up")
    // }, 800)

  });

  conn.setEncoding("utf8");

  return conn;
};



module.exports = { connect };
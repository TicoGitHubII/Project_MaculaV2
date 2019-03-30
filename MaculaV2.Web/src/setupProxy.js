const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/websocket", { target: "http://localhost:50309", ws: true }));
};

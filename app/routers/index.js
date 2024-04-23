const { Router } = require("express");
const MessageRouter = require("./message_router");
const SessionRouter = require("./session_router");

const MainRouter = Router();

MainRouter.all("/", (req, res) => {
  res.status(200).json({ Works: "fine!" });
});

MainRouter.use(SessionRouter);
MainRouter.use(MessageRouter);
module.exports = MainRouter;

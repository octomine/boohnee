const express = require("express");
const { Server } = require("ws");

// const TelegramBot = require("node-telegram-bot-api");

// const TOKEN = "5709768801:AAEY5MGCs18GsK8rtyQ1NvXgeIgFf2voDww";
// const bot = new TelegramBot(TOKEN, { polling: true });

const PORT = process.env.PORT || 3000;
let list = [];

// SERVER
const server = express();

server
  .use(express.json())
  .use(express.static("./build"))
  .listen(PORT, () => {
    console.log(`listening port: ${PORT}`);
  });

server.put("/menu/add", (req, res) => {
  list.push(req.body);
  if (wsClient) {
    setTimeout(() => wsClient.send(req.body.id), 1000);
  }
  res.send({ code: 0 });
});
server.put("/menu/remove", (req, res) => {
  list = list.filter((item) => item.id !== req.body.id);
  res.send({ code: 0 });
});
server.put("/menu/change", (req, res) => {
  list = list.map((item) =>
    item.id === req.body.id ? { ...req.body } : { ...item }
  );
  res.send({ code: 0 });
});
server.get("/menu", (req, res) => {
  res.send(list);
});

// SOCKET
const io = new Server({ server });
let wsClient;

io.on("connection", (wsc) => {
  wsClient = wsc;
  wsClient.on("message", (msg) => {
    console.log(msg);
  });
  console.log("CONNECTED!!1");
});

// BOT
// bot.on("message", (msg) => {
//   const {
//     chat: { id },
//   } = msg;
//   bot.sendMessage(id, "превед!!1", { reply_markup: { inline_keyboard: list } });
// });
// bot.on("callback_query", (query) => {
//   const {
//     message: {
//       chat: { id },
//     },
//   } = query;
//   console.log(query);
//   bot.answerInlineQuery(
//     id,
//     [{ id: 0, type: "article", message_text: "ok", title: "test" }],
//     {
//       reply_markup: { inline_keyboard: list },
//     }
//   );
// });

const express = require("express");
const http = require("http");
const ws = require("ws");

// const TelegramBot = require("node-telegram-bot-api");

// const TOKEN = "5709768801:AAEY5MGCs18GsK8rtyQ1NvXgeIgFf2voDww";
// const bot = new TelegramBot(TOKEN, { polling: true });

const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new ws.Server({ port: 5000 });
let wsClient;

// SOCKET
io.on("connection", (wsc) => {
  wsClient = wsc;
  wsClient.on("message", (msg) => {
    console.log(msg);
  });
  console.log("CONNECTED!!1");
});

let list = [];

app.use(express.json());
app.use(express.static("./build"));
server.listen(PORT, () => {
  console.log(`listening port: ${PORT}`);
});

// SERVER
app.put("/menu/add", (req, res) => {
  list.push(req.body);
  if (wsClient) {
    setTimeout(() => wsClient.send(req.body.id), 1000);
  }
  res.send({ code: 0 });
});
app.put("/menu/remove", (req, res) => {
  list = list.filter((item) => item.id !== req.body.id);
  res.send({ code: 0 });
});
app.put("/menu/change", (req, res) => {
  list = list.map((item) =>
    item.id === req.body.id ? { ...req.body } : { ...item }
  );
  res.send({ code: 0 });
});
app.get("/menu", (req, res) => {
  res.send(list);
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

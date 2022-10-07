const express = require("express");
// const TelegramBot = require("node-telegram-bot-api");

// const TOKEN = "5709768801:AAEY5MGCs18GsK8rtyQ1NvXgeIgFf2voDww";
// const bot = new TelegramBot(TOKEN, { polling: true });

const app = express();
const PORT = process.env.PORT || 3000;

let list = [];

app.use(express.json());
app.use(express.static("./build"));
app.listen(PORT, () => {
  console.log(`listening port: ${PORT}`);
});

app.put("/menu/add", (req, res) => {
  list.push(req.body);
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

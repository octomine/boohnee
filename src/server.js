const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "5709768801:AAEY5MGCs18GsK8rtyQ1NvXgeIgFf2voDww";
const bot = new TelegramBot(TOKEN, { polling: true });

const app = express();
const PORT = process.env.PORT || 3000;

let list = [];

app.use(express.json());
app.use(express.static("./build"));
app.listen(PORT, () => {
  console.log(`listening port: ${PORT}`);
});
app.post("/", (req, res) => {
  list = req.body.map((name, index) => [{ text: name, callback_data: index }]);
  res.send("done");
});

bot.on("message", (msg) => {
  const {
    chat: { id },
  } = msg;
  bot.sendMessage(id, "превед!!1", { reply_markup: { keyboard: list } });
});

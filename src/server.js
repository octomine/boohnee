const { nanoid } = require("nanoid");
const express = require("express");
const { Server } = require("ws");
const { Telegraf, Markup } = require("telegraf");

const PORT = process.env.PORT || 3000;
const TOKEN = process.env.TOKEN;

let list = [];
let order = [];
let chats = {};

// SERVER
const app = express();

app.use(express.json()).use(express.static("./build"));

const server = app.listen(PORT, () => {
  console.log(`listening port: ${PORT}`);
});

// API menu
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
// API order
app.get("/order", (req, res) => {
  res.send(order);
});
app.put("/order/ready", (req, res) => {
  closeOrderItem(req.body.id);
  res.send({ code: 0 });
});
app.put("/order/remove", (req, res) => {
  closeOrderItem(req.body.id, false);
  res.send({ code: 0 });
});

function closeOrderItem(orderId, done = true) {
  order = order.filter(({ id }) => id !== orderId);
  msg = done ? "готово!!1" : "не, не получится((";
  bot.telegram.sendMessage(chats[orderId], msg);
  delete chats[orderId];
}

// SOCKET
const io = new Server({ server });
let wsClient;

io.on("connection", (wsc) => {
  wsClient = wsc;
  wsClient.on("message", (msg) => {
    console.log(msg);
    wsClient.send("pong");
  });
  console.log("CONNECTED!!1");
});

// BOT
const bot = new Telegraf(TOKEN);

bot.start((ctx) =>
  ctx.reply("HI", Markup.keyboard(list.map(({ text }) => text)))
);
bot.hears((value, ctx) => {
  const {
    update: {
      message: {
        chat: { id: chatId },
      },
    },
  } = ctx;
  const menuItem = list.filter(({ text }) => text === value)[0];
  if (wsClient && menuItem) {
    const orderItem = {
      id: nanoid(),
      itemId: menuItem.id,
      text: value,
      time: new Date(),
      visible: menuItem.visible,
    };
    order.push(orderItem);
    chats[orderItem.id] = chatId;
    wsClient.send("update");
    ctx.reply("ok");
  } else {
    ctx.reply("что-то пошло не так...");
  }
});

bot.launch();

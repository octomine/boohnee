const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./build"));
app.listen(PORT, () => {
  console.log(`listening port: ${PORT}`);
});
app.use((ctx, next) => {
//   const { value } = ctx.request.body;
  console.log(ctx.url);
  //   const { method, url } = ctx;
  //   if (method === "POST" && url.includes("/api/")) {
  //     save(url, ctx);
  //   }
  //   return next();
});

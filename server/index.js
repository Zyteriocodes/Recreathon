import express from "express";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import { randomQuote } from "./quotes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const started = Date.now();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/api/meta", (_req, res) =>
  res.json({ app: "Recreatathon", at: new Date().toISOString(), up: Math.floor((Date.now() - started) / 1000) }),
);

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.get("/api/quote", (_req, res) => res.json({ text: randomQuote() }));

app.post("/api/echo", (req, res) => res.json({ echo: req.body }));

const server = http.createServer(app);
let port = Number(process.env.PORT) || 3000;
const maxPort = port + 10;

function listen() {
  server.listen(port, () => {
    const addr = server.address();
    const p = typeof addr === "object" && addr ? addr.port : port;
    console.log(`http://127.0.0.1:${p}`);
  });
}

server.on("error", (err) => {
  if (err.code === "EADDRINUSE" && port < maxPort) {
    console.warn(`Port ${port} in use, trying ${port + 1}…`);
    port += 1;
    listen();
  } else {
    console.error(err);
    process.exit(1);
  }
});

listen();

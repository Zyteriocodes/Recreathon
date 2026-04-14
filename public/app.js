document.getElementById("y").textContent = new Date().getFullYear();

const apiEl = document.getElementById("api");
fetch("/api/meta")
  .then((r) => r.json())
  .then((d) => (apiEl.textContent = JSON.stringify(d)))
  .catch(() => (apiEl.textContent = "run npm start"));

document.getElementById("quote-btn").addEventListener("click", () => {
  fetch("/api/quote")
    .then((r) => r.json())
    .then((d) => {
      document.getElementById("quote").textContent = d.text;
      document.getElementById("quote").classList.remove("muted");
    })
    .catch(() => (document.getElementById("quote").textContent = "Need npm start"));
});

document.getElementById("echo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = new FormData(e.target).get("msg");
  const out = document.getElementById("echo-out");
  fetch("/api/echo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ msg }),
  })
    .then((r) => r.json())
    .then((j) => (out.textContent = JSON.stringify(j, null, 2)))
    .catch(() => (out.textContent = "run npm start"));
});

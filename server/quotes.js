const lines = [
  "Small commits are easier to review.",
  "Branch from main, merge back when it works.",
  "Pull before you push if others use the repo.",
  "Read the diff before you merge.",
];

export function randomQuote() {
  return lines[Math.floor(Math.random() * lines.length)];
}

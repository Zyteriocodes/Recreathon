# Recreatathon

Small static HTML/CSS site you can host anywhere while practicing Git.

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Host it

- **GitHub Pages**: Settings → Pages → deploy from `main` branch, `/` root.
- **Netlify / Vercel**: Connect the repo and use the repo root as the publish directory.

## Git warmup

```bash
git status
git add .
git commit -m "Describe your change"
git branch feature/something
git checkout feature/something
# edit files, commit, push, open a PR on your host
```

After you create an empty remote:

```bash
git remote add origin <https-or-ssh-url>
git push -u origin main
```

Replace `main` with your default branch name if needed.

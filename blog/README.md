# My Blog

A small, dependency-free blog built with plain HTML and CSS. No build step, no
framework, no npm install — just files you can open in a browser and push to
GitHub Pages.

## Quick start

Clone the repo and open `index.html` in your browser. That's it.

For a local server with auto-refreshing paths (recommended), run one of:

```bash
# Python 3
python3 -m http.server 8000

# or, if you have Node
npx serve
```

Then visit `http://localhost:8000`.

## Writing a post

1. Copy a file in `posts/`, rename it (e.g. `posts/my-first-post.html`), and edit
   the date, title, and body.
2. Open `index.html` and add a list item to the post list pointing at your new
   file. Newest posts go on top.

The post `getting-started.html` walks through this in more detail, in the browser.

## Project structure

```
.
├── index.html        # home page + list of posts
├── about.html        # about page
├── posts/            # one HTML file per post
│   ├── hello-world.html
│   └── getting-started.html
├── css/
│   └── style.css     # all styling; theme variables live at the top
├── js/
│   └── main.js       # tiny enhancements (footer year)
├── assets/
│   └── favicon.svg
└── .nojekyll         # tells GitHub Pages to serve files as-is
```

## Theming

All colors and fonts are CSS variables at the top of `css/style.css`. Change
`--accent` to recolor links and highlights everywhere, or swap the font
variables. Dark mode is included and follows the reader's system preference.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**,
   pick your `main` branch and the `/ (root)` folder, and save.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/` within
   a minute or two.

## License

MIT — see [LICENSE](LICENSE).

# OrenNeumann.github.io

Personal site, served at <https://orenneumann.github.io>.

Currently a single static `index.html` with no build step — GitHub Pages serves
the repo root as-is.

## Deploying

Push to `main`. Pages picks it up within a minute or so.

## Swapping in a static site generator

The repo is deliberately generator-agnostic. Two ways to go:

**Build output committed to the repo** — generator writes into the repo root (or
`/docs`), you commit the output. No CI needed. Point Pages at the right folder
in *Settings → Pages → Build and deployment → Source: Deploy from a branch*.

**Build in CI** — add a workflow under `.github/workflows/` that runs the
generator and publishes with `actions/deploy-pages`. Switch *Source* to
*GitHub Actions*. Actions minutes are unlimited on public repos.

`.gitignore` already covers the usual output and cache directories for Quarto,
Hugo, Jekyll, Astro, and friends — trim it to whatever you actually pick.

## Notes

- `.nojekyll` stops Pages from running its default Jekyll pass, which otherwise
  strips files and folders whose names start with `_`.
- A custom domain later is a `CNAME` file in the repo root plus DNS records at
  the registrar.

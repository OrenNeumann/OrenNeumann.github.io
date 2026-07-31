# CLAUDE.md

Personal site. Served at <https://orenneumann.github.io>.

## Publishing model

- Pages deploys `main` from the repo root. No build step. **Push = publish.**
- The repo root is the public webroot. *Every* committed file is fetchable at
  `orenneumann.github.io/<path>` — not just `index.html`. The repo is public and
  so is its history. Never commit drafts, scratch notes, or credentials.
- `.nojekyll` is deliberate — it stops Pages' Jekyll pass from stripping
  `_`-prefixed paths. Leave it.

## Scope

- No static site generator has been chosen. The repo is deliberately
  generator-agnostic. Don't add one or restructure toward one without asking.
- Site content is placeholder by choice. Don't fill in biographical detail,
  research topics, or anything else about the owner unless explicitly asked.

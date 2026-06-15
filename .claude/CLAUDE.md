# CLAUDE.md

## Working principles

- **Favor official Next.js / React best practices.** When choosing how to implement something, prefer the idiomatic, currently-recommended approach from the official docs over ad-hoc patterns.
- **Keep dependencies current.** Part of the ongoing intent for this repo is modernizing an aging codebase — prefer up-to-date APIs and avoid deprecated ones.
- **Must build as a fully static site.** The site is statically exported (`output: 'export'`) and deployed to GitHub Pages. Anything added must work without a Node server at runtime — no API routes, request-time SSR, or server-side image optimization.

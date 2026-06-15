---
name: modernize
description: >-
  Run a periodic, staged modernization of the codebase: survey what's outdated,
  then upgrade in low-risk-first stages, keeping every commit green and
  reviewable. Use when the user wants to modernize/refresh/clean up the
  codebase, bump or update dependencies, upgrade the framework, address
  dependency vulnerabilities, remove deprecated APIs or stale practices, or asks
  in Japanese to 最新化 / モダナイズ / 依存を更新 / 脆弱性を直す / 古い書き方を直す /
  定期リファクタリング. Prefer this over ad-hoc upgrades so the work stays staged
  and verified.
---

# Modernize

A discipline for periodically modernizing this repo against _current_ official
best practices — without a broken commit along the way. This file holds
the durable process only; the specifics (which deps are behind, which APIs are
deprecated, what a given major version breaks) change constantly, so discover
them fresh each run from the tools and the official docs rather than from memory.

## Principles

- **Survey before you touch anything.** Modernization is a research task first.
  Know what's outdated and why before proposing changes.
- **Stage by risk; one commit per stage.** Go lowest-risk → highest-risk so a
  breakage is small and easy to bisect. Each stage is independently reviewable.
- **Every commit stays green.** Never land a commit where the project's own
  checks fail, so the working branch stays deployable and mergeable at any point.
- **Respect coupling and ordering.** When a change forces another (e.g. an
  upgrade removes a tool you rely on), do them together and tell the user _why_
  you reordered — don't produce a knowingly-broken intermediate commit.
- **Follow official upgrade paths.** Prefer first-party codemods and migration
  guides, and look up the current breaking changes for the target version at the
  time you run — they are not stable enough to memorize.
- **The user owns scope and cadence.** Present the plan, let them decide how far
  to go, and don't commit without explicit instruction.

## Workflow

1. **Branch and establish a green baseline.** Do the work on a dedicated branch
   off the default branch. Install dependencies if needed, then run the project's
   documented checks (discover them from `package.json` scripts, `CLAUDE.md`, or
   the Makefile — they evolve) and confirm they pass _before_ you change
   anything, so later failures are attributable to your work.

2. **Survey.** Inventory what's outdated: package dependencies (`npm outdated`,
   `npm audit`), the GitHub Actions pinned in `.github/workflows`, and code
   patterns that diverge from current best practices (framework/library APIs,
   language idioms, and CSS — within the browser-support range the project
   targets). Flag major version jumps and any coupled changes.

3. **Plan with the user.** Present an organized assessment grouped by the stages
   below, with risk and major jumps called out. Recommend a low-risk-first order
   and get sign-off on scope and commit cadence.

4. **Execute, low-risk → high-risk:**

   - **Tooling, config, and hygiene** — rarely affects runtime behavior;
     includes keeping CI workflows and their pinned GitHub Actions current
     (the deploy depends on them — this site ships via GitHub Actions to Pages).
   - **Code-pattern modernization** — idiomatic changes that need no version
     bump. Doing these before upgrades keeps the upgrade diffs small.
   - **Dependency major upgrades** — independent libraries first, then the
     framework and anything coupled to it, using official codemods. Resolve peer
     conflicts by dropping/inlining a tiny single-use dependency rather than
     forcing an incompatible install.

   If a stage can't be made green (e.g. a major upgrade has no clean path), stop
   and report back, leaving the default branch untouched — don't force a broken
   commit.

5. **Verify and commit each stage.** Run the full check suite; only commit when
   it's green. Write commit messages in the language the repo uses. Re-run
   `npm audit` after upgrades to confirm the posture improved.

6. **Get an independent review.** Once the changeset is committed, hand it to the
   `modernization-reviewer` subagent for a skeptical third-party pass, telling it
   the base to diff against (the branch's base, i.e. the default branch) — the
   automated checks confirm it builds, not that the refactors are
   behavior-preserving or the upgrades fully idiomatic. Relay its prioritized
   findings to the user, then fix each one or log it explicitly (in the PR or
   branch description) so nothing is silently dropped.

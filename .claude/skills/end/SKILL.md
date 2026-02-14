---
name: end
description: Session end protocol — simplify, commit, push, update log
user_invocable: true
---

# /end — End a Work Session

Run this to wrap up a session cleanly. Do NOT skip steps.

## Steps

### 1. Check for Changes
- Run `git status` and `git diff --stat`
- If no changes, skip to step 7

### 2. Run Simplifier
- Invoke the `/simplify` skill on all modified files
- Fix any issues found before committing

### 3. Commit and Push
- Stage changed files (be specific — no `git add .`)
- Write a concise commit message describing what was accomplished
- Push to the current branch

### 4. Create PR (if on feature branch)
If not on `main`:
- Create a PR with `gh pr create`
- Title: short summary of the session's work
- Body: bullet points of what changed

### 5. Merge PR (if appropriate)
Ask the user:
- **Merge now?** Merge the PR to main and delete the branch?
- If yes: `gh pr merge --squash --delete-branch`

### 6. Deploy
If changes were pushed/merged to `main`:
- GitHub Pages deploys automatically on push
- Verify deployment: check `gh api repos/EpicGrowth/roelboutique/pages` for status
- Report the live URL: https://epicgrowth.github.io/roelboutique/

### 7. Update Session Log
Update the session's entry in `SESSION_LOG.md`:
```markdown
**Status:** Complete
**Changes:** [bullet list of what was done]
**Commit:** [short hash]
```

### 8. Final Report
Print a summary:
```
Session Complete
Branch: [branch]
Commits: [count]
Files changed: [count]
Live at: https://epicgrowth.github.io/roelboutique/
```

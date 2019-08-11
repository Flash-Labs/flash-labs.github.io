## Git Workflow

Development is focused around the `master` branch, which contains the latest
changes for the next release. The following branch structures are also used:

 - `release/vX`: Releases by major version `X`
 - `fix/name`: Fixes for issues, generally for PRs
 - `feature/name`: New features, generally for PRs
 - `refactor/name`: Code refactors/rewrites, generally internal

### API Modifications

In general, any changes the affect the API should be handled through PRs to
allow time for feedback and review on the changes. This is **necessary** for
breaking changes and **optional** for non-breaking changes - use judgement.

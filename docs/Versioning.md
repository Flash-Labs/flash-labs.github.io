## Versioning

We use [Semantic Versioning](https://semver.org/) with the following specifications for major version 0.

 - Versioning starts at `0.0.0`
 - The first build is `0.0.1`
 - When in `0.0.x`, x acts as a major version
 - When in `0.x.y`, x acts as a major version and y acts as a minor version

This defines the behavior that `0.x.y` is backwards compatible through `0.x.0`, or in other words all breaking changes
must increment `x`. Note that `x` may still be incremented for non-breaking changes.

---

### Test Versions

Additionally, the following classifiers are defined for versioning test builds. Classifiers are also suffixed with a
number, as in `a1`. In general, only pre-release builds are officially released - the others are purely for testing.

 - `a` (Alpha): Internal or self testing *without* compatibility guarantees
 - `b` (Beta): Private testing *without* compatibility guarantees
 - `pr` (Pre-Release): Public testing builds *without* compatibility guarantees, generally for intermediate builds
 - `rc` (Release-Candidate): Public testing builds *with* compatibility guarantees, generally for testing final builds

> These names are slightly contrived but ensure SemVer parses them in the desired order (`a` < `b` < `pr` < `rc`).

---

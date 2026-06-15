// Static image imports (e.g. `import pic from '@@/assets/img/icon.png'`) are
// typed by Next via this reference. Next also writes it into the gitignored
// next-env.d.ts, but that file only exists after a build — declaring it here
// keeps `tsc --noEmit` self-contained on a fresh checkout (e.g. in CI, where
// typecheck runs before the build).
/// <reference types="next/image-types/global" />

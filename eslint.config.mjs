import next from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  {
    ignores: ['.next/**', 'out/**', 'src/p2js/**'],
  },
  ...next,
];

export default eslintConfig;

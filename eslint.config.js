import { defineConfig } from '@tb-dev/eslint-config';

export default defineConfig({
  project: ['packages/guest-js/tsconfig.json', 'packages/playground/tsconfig.json'],
  features: {
    vue: true,
  },
  overrides: {
    typescript: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
    },
  },
});

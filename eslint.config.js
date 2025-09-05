import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
  // ignorer les fichiers compilés
  globalIgnores(['.react-router', 'build']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended, // regles ESLint de base
      ...tseslint.configs.recommendedTypeChecked, // regles TS de base
      ...tseslint.configs.strictTypeChecked, // regles très strictes
      reactX.configs['recommended-typescript'], // regles react
      reactDom.configs.recommended, // regles react DOM
      reactHooks.configs['recommended-latest'], // regles React Hooks
      reactRefresh.configs.vite, // regles specifiques vite + React refresh
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    },
  },
]);

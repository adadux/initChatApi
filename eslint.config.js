import { defineConfig } from 'eslint/config';
import globals from 'globals';
import jsPlugin from '@eslint/js';
import parser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import jsonPlugin from '@eslint/json';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		languageOptions: {
			parser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			globals: { ...globals.node },
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			...jsPlugin.configs.recommended.rules,
			...tsPlugin.configs.recommended.rules,

			'@typescript-eslint/no-restricted-types': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'off',

			'no-unused-vars': 'warn',
			'no-loop-func': 'error',
			eqeqeq: ['error', 'always'],
			strict: ['error', 'global'],
			'max-nested-callbacks': ['error', { max: 7 }],
			'no-lonely-if': 'error',
			'no-global-assign': 'error',
			'no-self-compare': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-constant-condition': ['error', { checkLoops: false }],
			'no-console': 'warn',
			'no-useless-concat': 'error',
			'no-useless-escape': 'error',
			'no-shadow-restricted-names': 'error',
			'no-use-before-define': ['error', { functions: false }],
			'no-useless-computed-key': 'error',
			'no-useless-rename': 'error',
			'no-var': 'warn',
			'object-shorthand': ['error', 'always'],
			'prefer-arrow-callback': 'error',
			'prefer-const': 'warn',
			'prefer-numeric-literals': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'arrow-body-style': ['error', 'always'],
		},
	},
	{
		files: ['**/*.{json, jsonc, json5}'],
		ignores: ['package-lock.json'],
		language: 'json/json',
		rules: {
			...jsonPlugin.configs.recommended.rules,
		},
	},
	{
		ignores: [
			'.github/**',
			'.husky/**',
			'.idea/**',
			'.next/**',
			'.yarn/**',
			'node_modules/**',
			'build/**',
			'dist/**',
			'logs/**',
			'yarn.lock',
		],
	},
]);

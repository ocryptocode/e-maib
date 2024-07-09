/**
 * ESLint configuration file for a project using TypeScript, Prettier, and Jest.
 */

module.exports = {
  // Specifies the environments your script is designed to run in.
  env: {
    browser: true, // Enables browser global variables like 'window' and 'document'.
    es6: true, // Enables ES6 global variables and syntax.
    node: true, // Enables Node.js global variables like 'global' and 'process'.
  },
  // Extends the base configurations from various ESLint plugins.
  extends: [
    'eslint:recommended', // Uses the recommended rules from ESLint.
    'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from @typescript-eslint.
    'plugin:jest/recommended', // Uses the recommended rules for Jest.
    'plugin:prettier/recommended', // Uses the recommended rules for Prettier to ensure code formatting.
  ],
  // Defines global variables that are read-only.
  globals: {
    Atomics: 'readonly', // Adds Atomics as a read-only global variable.
    SharedArrayBuffer: 'readonly', // Adds SharedArrayBuffer as a read-only global variable.
  },
  // Specifies the parser and its options.
  parser: '@typescript-eslint/parser', // Specifies @typescript-eslint/parser as the parser to support TypeScript.
  parserOptions: {
    ecmaVersion: 2018, // Specifies the version of ECMAScript syntax to use (ES9).
    sourceType: 'module', // Allows the use of ECMAScript modules.
  },
  // Lists the plugins to be used.
  plugins: [
    '@typescript-eslint', // Adds TypeScript support to ESLint.
    'jest', // Adds Jest support.
    'prettier', // Adds Prettier support.
  ],
  // Customizes the behavior of individual ESLint rules.
  rules: {
    'linebreak-style': ['error', 'unix'], // Enforces Unix line endings (LF).
    quotes: ['error', 'double'], // Enforces the use of double quotes for strings.
    semi: ['error', 'always'], // Enforces the use of semicolons at the end of statements.
    'no-unused-vars': 'off', // Disables the rule for unused variables (handled by TypeScript).
    'no-prototype-builtins': 'off', // Disables the rule against calling Object.prototype methods directly on objects.
  },
}

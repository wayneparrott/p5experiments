module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        indent: ['error', 4],
        'no-multi-spaces': ['error'],
        'no-unused-vars': ['error', { args: 'none' }],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
};

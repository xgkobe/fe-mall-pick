import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import parseForESLint from 'vue-eslint-parser';

export default [
    {
        files: [
            'src/**/*.{js,mjs,cjs,vue,jsx}',
        ],
    },
    {
        languageOptions: {
            parser: parseForESLint,
            parserOptions: {
                parser: '@babel/eslint-parser',
                requireConfigFile: false,
                // sourceType: 'module',
                // presets: ["@babel/preset-env"],
                babelOptions: {
                    parserOpts: {
                        plugins: ['jsx'],
                    },
                },
            },
        },
    },
    {
        rules: {
            'no-undef': 'error',
            'indent': [
                'error',
                4,
                {
                    'SwitchCase': 1,
                },
            ],
            'object-curly-spacing': ['error', 'never'],
            'indent-legacy': 'off',
            'generator-star-spacing': [
                'error',
                {
                    'before': false,
                    'after': true,
                },
            ],
            'array-bracket-spacing': [
                'error',
                'never',
            ],
            'arrow-parens': [
                'error',
                'as-needed',
            ],
            'no-console': [
                'warn',
                {
                    'allow': [
                        'error',
                        'warn',
                        'info',
                    ],
                },
            ],
            'no-constant-condition': 'warn',
            'comma-dangle': [
                'error',
                {
                    'arrays': 'always-multiline',
                    'objects': 'always-multiline',
                    'imports': 'always-multiline',
                    'exports': 'always-multiline',
                    'functions': 'never',
                },
            ],
            'no-debugger': 'error',
            'no-dupe-keys': 'warn',
            'no-empty-character-class': 'error',
            'no-ex-assign': 'error',
            'no-extra-boolean-cast': 'warn',
            'no-func-assign': 'warn',
            'no-inner-declarations': 'warn',
            'no-invalid-regexp': 'error',
            'no-negated-in-lhs': 'error',
            'no-obj-calls': 'error',
            'no-sparse-arrays': 'error',
            'no-unreachable': 'error',
            'no-unreachable-loop': 'error',
            'use-isnan': 'error',
            'valid-typeof': 'error',
            'curly': [
                'error',
                'all',
            ],
            'eqeqeq': [
                'error',
                'allow-null',
            ],
            'guard-for-in': 'warn',
            'no-else-return': 'warn',
            'no-labels': [
                'warn',
                {
                    'allowLoop': true,
                },
            ],
            'no-eval': 'warn',
            'no-extend-native': 'error',
            'no-extra-bind': 'warn',
            'no-implied-eval': 'warn',
            'no-iterator': 'error',
            'no-irregular-whitespace': 'warn',
            'no-lone-blocks': 'warn',
            'no-loop-func': 'warn',
            'no-multi-str': 'warn',
            'no-native-reassign': 'error',
            'no-new-wrappers': 'error',
            'no-octal': 'warn',
            'no-octal-escape': 'warn',
            'no-proto': 'error',
            'no-redeclare': 'warn',
            'no-self-compare': 'error',
            'no-unneeded-ternary': 'error',
            'no-with': 'warn',
            'radix': 'error',
            'wrap-iife': [
                'error',
                'any',
            ],
            'no-delete-var': 'warn',
            'no-dupe-args': 'error',
            'no-duplicate-case': 'error',
            'no-label-var': 'warn',
            'no-shadow-restricted-names': 'error',
            'no-unused-vars': [
                'warn',
                {
                    'vars': 'local',
                    'args': 'none',
                },
            ],
            'no-use-before-define': [
                'error',
                'nofunc',
            ],
            'brace-style': [
                'warn',
                'stroustrup',
                {},
            ],
            'comma-spacing': [
                'error',
                {
                    'before': false,
                    'after': true,
                },
            ],
            'comma-style': [
                'error',
                'last',
            ],
            'new-parens': 'warn',
            'no-array-constructor': 'error',
            'no-multi-spaces': [
                'error',
                {
                    'exceptions': {
                        'Property': true,
                        'BinaryExpression': true,
                        'VariableDeclarator': true,
                    },
                },
            ],
            'no-new-object': 'error',
            'func-call-spacing': 'error',
            'no-trailing-spaces': 'error',
            'no-extra-parens': 'off',
            'no-mixed-spaces-and-tabs': 'error',
            'one-var': [
                'error',
                'never',
            ],
            'operator-linebreak': [
                'error',
                'before',
            ],
            'quotes': [
                'error',
                'single',
                {
                    'avoidEscape': true,
                },
            ],
            'semi': [
                'error',
                'always',
            ],
            'semi-spacing': 'error',
            'keyword-spacing': 'error',
            'key-spacing': [
                'error',
                {
                    'beforeColon': false,
                    'afterColon': true,
                },
            ],
            'space-before-function-paren': [
                'error',
                {
                    'anonymous': 'always',
                    'named': 'never',
                    'asyncArrow': 'always',
                },
            ],
            'space-before-blocks': [
                'error',
                'always',
            ],
            'computed-property-spacing': [
                'error',
                'never',
            ],
            'space-in-parens': [
                'error',
                'never',
            ],
            'space-unary-ops': 'warn',
            'spaced-comment': [
                'error',
                'always',
                {
                    'exceptions': [
                        '-',
                        '+',
                        "'",
                        '#',
                    ],
                    'block': {
                        'balanced': true,
                    },
                },
            ],
            'max-nested-callbacks': [
                'warn',
                3,
            ],
            'max-depth': [
                'warn',
                6,
            ],
            'max-len': [
                'error',
                120,
                4,
                {
                    'ignoreUrls': true,
                    'ignorePattern': 'data:image\\/',
                },
            ],
            'max-params': [
                'warn',
                6,
            ],
            'space-infix-ops': 'error',
            'dot-notation': [
                'error',
                {
                    'allowKeywords': true,
                    'allowPattern': '^catch$',
                },
            ],
            'arrow-spacing': 'error',
            'constructor-super': 'error',
            'no-confusing-arrow': [
                'error',
                {
                    'allowParens': true,
                },
            ],
            'no-class-assign': 'warn',
            'no-const-assign': 'error',
            'no-dupe-class-members': 'warn',
            'no-this-before-super': 'warn',
            'no-var': 'warn',
            'no-duplicate-imports': 'warn',
            'prefer-rest-params': 'error',
            'unicode-bom': 'warn',
            'max-statements-per-line': 'error',
            'no-useless-constructor': 'warn',
        },
    },
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/essential'],
];
var config = {
    // Base this on the recommended ESLint configuration
    extends: 'eslint:recommended',

    parserOptions: {
        // Set to ES6
        ecmaVersion: 6,
        sourceType: 'module',

        // Activate basic ECMA Features we need
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },

    // Activate environments
    env: {
        browser: true,
        node: true,
        es6: true
    },

    // Use babel parser
    parser: 'babel-eslint',

    // Add babel and react plugin
    plugins: [
        'react'
    ],

    rules: {
        // ESLint Rules
        'comma-dangle': [ 2, 'never' ],

        // ESLint Best Practices erroring
        'accessor-pairs': 2,
        'array-callback-return': 2, // array method functions must always return
        'curly': [ 2, 'all' ], // always use curly braces
        'default-case': 2, // no switch statements without default cases
        'dot-location': [ 2, 'property' ], // dot location on the same line as the propery
        'dot-notation': 2,
        'no-alert': 2,
        'no-caller': 2, // arguments.caller and .callee are deprecated
        'no-else-return': 2,
        'no-eval': 2,
        'no-extend-native': 2, // no extending of native prototypes
        'no-native-reassign': 2, // no reassigning of native globals
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-new': 2, // no none assigned new statements for side effects
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-proto': 2,
        'no-return-assign': [ 2, 'except-parens' ],
        'no-throw-literal': 2,
        'no-self-compare': 2,
        'no-useless-call': 2, // no useless apply and call
        'no-void': 2,
        'no-useless-concat': 2, // no concats of literals
        'no-with': 2,
        'wrap-iife': [ 2, 'outside' ],
        'yoda': [ 2, 'never', { exceptRange: true } ],
        'no-unused-vars': 0,
        'no-console': [ 2, { allow: [ 'warn', 'error'] } ],
        'no-undefined': 0,

        // ESLint Best Practices warning
        'consistent-return': 1,
        'eqeqeq': [ 1, 'smart' ],
        'guard-for-in': 1,
        'no-empty-function': 1,
        'no-unmodified-loop-condition': 1, // require assignment on loop conditions being a single variable
        'no-warning-comments': 1, // reminder for FIXME and TODO

        // ESLint Variable rules
        'no-catch-shadow': 2,
        'no-use-before-define': 2,

        // ESLint Variable warnings
        'no-shadow': 1,

        // ESLint NodeJS and CommonJS
        'callback-return': 2,
        'no-path-concat': 2, // enforce use of the path module

        // ESLint Coding Style
        'array-bracket-spacing': [ 2, 'always' ],
        'block-spacing': [ 2, 'always' ],
        'comma-spacing': [ 2, { before: false, after: true } ],
        'comma-style': [ 2, 'last' ],
        'computed-property-spacing': [ 2, 'never' ],
        'func-names': 2, // function declarations must be named
        'func-style': [ 2, 'declaration', { allowArrowFunctions: true } ],
        'key-spacing': [ 2, { beforeColon: false, afterColon: true} ],
        'lines-around-comment': [ 2, {
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true
        } ],
        'new-cap': [ 2, { capIsNew: false } ], // constructor names must be capitalised
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-bitwise': 2,
        'no-lonely-if': 2, // no if inside else statements
        'no-multiple-empty-lines': 2,
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-unneeded-ternary': 1, // just warn about the simpler alternative
        'no-whitespace-before-property': 2,
        'one-var': [ 2, 'never' ],
        'quote-props': [ 2, 'as-needed' ],
        'semi-spacing': [ 2, { before: false, after: true } ],
        'space-before-blocks': [ 2, 'always' ],
        'space-before-function-paren': [ 2, 'never' ],
        'space-in-parens': [ 2, 'never' ],
        'spaced-comment': [ 2, 'always' ],

        // ESLint Coding Styles that are changing and disputed
        'jsx-quotes': [ 2, 'prefer-single' ], // prefer-single or prefer-double
        'quotes': [ 2, 'single', 'avoid-escape' ],
        'semi': [ 2, 'always' ],

        // ESLint ES6 Rules
        'arrow-body-style': [ 2, 'as-needed' ],
        'arrow-parens': [ 2, 'as-needed' ],
        'arrow-spacing': [ 2, { before: true, after: true } ],
        'no-useless-constructor': 2,
        'no-var': 2,
        'object-shorthand': 2,
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'prefer-rest-params': 2,
        'prefer-spread': 2,

        // React rules
        'react/no-danger': 1,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-direct-mutation-state': 2,
        'react/no-is-mounted': 2,
        'react/react-in-jsx-scope': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': 1, // warn about incorrect sorting that can be fixed
        'react/wrap-multilines': 2,

        // JSX specific rules
        'react/jsx-boolean-value': [ 2, 'never' ],
        'react/jsx-curly-spacing': [ 2 , 'never' ],
        'react/jsx-equals-spacing': [ 2, 'never' ],
        'react/jsx-key': 2,
        'react/jsx-max-props-per-line': [ 2, { maximum: 2 } ],
        'react/jsx-no-duplicate-props': 2,
    }
};

module.exports = config;


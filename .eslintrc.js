
module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: [ '.vue' ]
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'prettier'
  ],

  plugins: [
    '@typescript-eslint',
    'vue',
    'import'
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      {
        'allow': ['error']
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "all",
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"]
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "pathGroups": [
          {
            "pattern": "vue",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "vue/**",
            "group": "internal"
          },
          {
            "pattern": "@/**",
            "group": "internal"
          },
          {
            "pattern": "src/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "node_modules/**",
            "group": "external",
            "position": "after"
          },
          {
            "pattern": "src/**/*",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "../*",
            "group": "parent"
          },
          {
            "pattern": "../**",
            "group": "sibling"
          }
        ],
        "pathGroupsExcludedImportTypes": ["builtin"]
      }
    ]
  }
}

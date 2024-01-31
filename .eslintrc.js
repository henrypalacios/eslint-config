module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    plugins: [
        "import",
        "unused-imports",
        "simple-import-sort"
    ],
    rules: {
        // Basic error prevention
        "no-unused-vars": "warn",
        "no-undef": "error",
        "no-redeclare": "error",
        "no-irregular-whitespace": "error",
        "no-empty": "error",
        "no-duplicate-case": "error",
        
        // Best practices
        "consistent-return": "error",
        "dot-notation": "error",
        "eqeqeq": ["error", "smart"],
        "no-empty-function": "warn",
        "no-multi-spaces": "error",
        "no-unused-expressions": "error",
        "radix": "error",
        "require-await": "error",

        // Styling
        "brace-style": "error",
        "camelcase": ["error", { properties: "always" }],
        "comma-spacing": ["error", { before: false, after: true }],
        "func-call-spacing": ["error", "never"],
        "indent": ["error", 2],
        "key-spacing": ["error", { beforeColon: false, afterColon: true }],
        "linebreak-style": ["error", "unix"],
        "no-trailing-spaces": "error",
        "quotes": ["error", "single"],
        "semi": ["error", "always"],

        // Import & Sorting
        "import/first": "error",
        "import/no-duplicates": "error",
        "import/no-unresolved": "error",
        "import/no-webpack-loader-syntax": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "unused-imports/no-unused-imports": "error",
    }
};

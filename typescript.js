module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    extends: [
        "./.eslintrc.js", 
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
    ],
    plugins: [
        "@typescript-eslint",
        "import",
        "unused-imports",
        "simple-import-sort"
    ],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                // TypeScript specific rules
                "@typescript-eslint/member-ordering": "error",
                "@typescript-eslint/no-confusing-non-null-assertion": "error",
                "@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
                "@typescript-eslint/no-explicit-any": "warn",
                "@typescript-eslint/no-extra-non-null-assertion": "error",
                "@typescript-eslint/no-floating-promises": "error",
                "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
                "@typescript-eslint/no-unnecessary-condition": "error",
                "@typescript-eslint/no-useless-constructor": "error",
                "@typescript-eslint/prefer-for-of": "error",
                "@typescript-eslint/prefer-nullish-coalescing": "error",
                "@typescript-eslint/prefer-readonly": "error",
                "@typescript-eslint/promise-function-async": ["error", { checkArrowFunctions: false }],
                "@typescript-eslint/switch-exhaustiveness-check": "error",
                "@typescript-eslint/no-unused-vars": "off",
                
                // Replace or disable ESLint rules that conflict with TypeScript
                "no-unused-vars": "off", // Disable to use @typescript-eslint/no-unused-vars
                "no-useless-constructor": "off", // Disable to use @typescript-eslint/no-useless-constructor
            },
        },
        {
            files: ["*.ts"],
            rules: {
                "@typescript-eslint/explicit-module-boundary-types": "error",
            },
        },
    ],
};

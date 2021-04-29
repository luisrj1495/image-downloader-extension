module.exports = {
    root: true,
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        webextensions: true,
        jest: true,
    },
    plugins: ["react-hooks", "react"],
    extends: [
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "eslint:recommended",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "eslint-config-prettier", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        "require-atomic-updates": "warn",
        "react/prop-types": 0,
        "prettier/prettier": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-var-requires": 0,
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    overrides: [
        {
            files: ["src/background/browserAction/**/*.{ts,tsx}"],
            rules: {
                "react-hooks/rules-of-hooks": "error",
                "react-hooks/exhaustive-deps": "off",
            },
        },
    ],
};

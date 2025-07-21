import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";
import pluginNext from '@next/eslint-plugin-next';
import prettierConfig from "./prettier.config.cjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    rules: {},
  },
});

const eslintConfig = [
  ...compat.extends(
    "next",
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        NodeJS: "readonly",
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      "no-unused-vars": "warn",
      "prettier/prettier": ["error", prettierConfig],
      "react/prop-types": "off",
      "no-console": "off",
      "no-extra-boolean-cast": "off",
      "react/react-in-jsx-scope": "off",
      "functional/no-conditional-statement": "off",
      "functional/no-expression-statement": "off",
      "functional/immutable-data": "off",
      "functional/functional-parameters": "off",
      "functional/no-try-statement": "off",
      "functional/no-throw-statement": "off",
      "no-underscore-dangle": ["error", { allow: ["__filename", "__dirname"] }],
      "testing-library/no-debug": "off",
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      "no-case-declarations": "off",
      "react-hooks/exhaustive-deps": "warn",
      "no-shadow": "warn",
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
      "import/no-absolute-path": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        alias: {
          map: [["@", "./src"]],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
  {
    ignores: [
      "node_modules",
      ".vscode",
      "dist",
      "build",
      "prettier.config.*",
      "eslint.config.mjs",
      "src/locales/*",
      "postcss.config.mjs",
      "tailwind.config.js"
    ]
  },
];

export default eslintConfig;

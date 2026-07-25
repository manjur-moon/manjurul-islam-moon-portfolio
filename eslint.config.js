import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const tsconfigRootDir = fileURLToPath(new URL(".", import.meta.url));

export default tseslint.config(
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "coverage/**",
      ".vite/**",
      "playwright-report/**",
      "test-results/**",
    ],
  },

  js.configs.recommended,

  ...tseslint.configs.strictTypeChecked,

  {
    files: ["src/**/*.{ts,tsx}"],

    languageOptions: {
      globals: globals.browser,

      parserOptions: {
        projectService: true,
        tsconfigRootDir,
      },
    },

    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],

      "@typescript-eslint/no-confusing-void-expression": "off",
    },
  },

  {
    files: ["vite.config.ts", "vitest.config.ts", "playwright.config.ts", "e2e/**/*.ts"],

    languageOptions: {
      globals: globals.node,

      parserOptions: {
        projectService: true,
        tsconfigRootDir,
      },
    },
  },

  {
    ...tseslint.configs.disableTypeChecked,

    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],

    languageOptions: {
      ...tseslint.configs.disableTypeChecked.languageOptions,

      globals: globals.node,
    },
  },
  {
    files: ["src/components/ui/Button.tsx"],

    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  prettier,
);

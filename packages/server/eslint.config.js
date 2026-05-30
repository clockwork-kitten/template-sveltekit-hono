// @ts-check
import eslintJs from "@eslint/js";
import unicorn from "eslint-plugin-unicorn";
import security from "eslint-plugin-security";
import globals from "globals";
import tseslint from "typescript-eslint";

const ignoresConfig = {
  ignores: ["dist/**", "node_modules/**", "coverage/**"],
};

export default [
  ignoresConfig,
  ...tseslint.config(
    eslintJs.configs.recommended,
    ...tseslint.configs.recommended,
    unicorn.configs.recommended,
    security.configs.recommended,
    {
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
      rules: {
        "prefer-const": "error",
        "no-var": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "unicorn/prevent-abbreviations": [
          "error",
          {
            allowList: {
              params: true,
              Params: true,
              env: true,
              Env: true,
            },
          },
        ],
        "unicorn/no-null": "off",
        "unicorn/filename-case": ["error", { case: "kebabCase" }],
      },
    },
  ),
];

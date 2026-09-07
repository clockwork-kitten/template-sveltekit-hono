// @ts-check
import eslintJs from "@eslint/js";
import sveltePlugin from "eslint-plugin-svelte";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

const ignoresConfig = {
  ignores: ["dist/**", ".svelte-kit/**", "node_modules/**", "build/**", ".wrangler/**", "coverage/**"],
};

export default [
  ignoresConfig,
  ...tseslint.config(
    eslintJs.configs.recommended,
    ...tseslint.configs.recommended,
    unicorn.configs.recommended,
    ...sveltePlugin.configs["flat/recommended"],
    {
      files: ["**/*.svelte"],
      languageOptions: {
        parserOptions: {
          parser: tseslint.parser,
        },
      },
    },
    {
      languageOptions: {
        globals: {
          ...globals.browser,
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
              props: true,
              Props: true,
              params: true,
              Params: true,
              ref: true,
              Ref: true,
              env: true,
              Env: true,
            },
          },
        ],
        "unicorn/no-null": "off",
        "svelte/no-navigation-without-resolve": "off",
        "unicorn/filename-case": ["error", { case: "kebabCase" }],
      },
    },
  ),
];

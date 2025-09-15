// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        process: "readonly",
        console: "readonly",
      },
    },

    rules: {
      camelcase: ["error", { properties: "always" }], // ✅ enforce camelCase
      "no-unused-vars": "warn",
      semi: ["error", "always"],
    },
  },
];

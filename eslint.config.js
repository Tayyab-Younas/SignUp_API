// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "camelcase": ["error", { properties: "always" }], // ✅ enforce camelCase
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
    },
  },
];

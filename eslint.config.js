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
      camelcase: ["error", { properties: "always" , ignore: ["cloud_name", "api_key", "api_secret", "allowed_formats"]  }], // ✅ enforce camelCase
      "no-unused-vars": "warn",
      semi: ["error", "always"],
    },
  },
];

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
        lib: ["ESNext"],
      },
      ...tseslint.configs.recommended,
      rules: {
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
  languageOptions: { globals: globals.browser },
  plugins: [pluginJs.configs.recommended, pluginReactConfig],
};

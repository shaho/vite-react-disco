module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["jest", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }], // https://github.com/prettier/eslint-plugin-prettier#options
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "jsx-a11y/accessible-emoji": "off",
    "jsx-a11y/no-onchange": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
};

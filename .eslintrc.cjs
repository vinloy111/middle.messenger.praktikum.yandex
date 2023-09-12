module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "linebreak-style": 0,
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-param-reassign": "off",
    "no-throw-literal": "off",
    "class-methods-use-this": "off",
    "no-use-before-define": "off",
    "no-unused-vars": "off",
    "max-len": ["error", { "code": 120 }]
  }
}
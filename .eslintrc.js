module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": "airbnb",
  "rules": {
    "func-names": [
      "error",
      "never"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": true
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": true
      }
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "linebreak-style": 0,
    "import/prefer-default-export": "off",
    "react/prefer-stateless-function": "off",
    "no-tabs": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "max-len": [1, 200, 4],
    "react/state-in-constructor": "off",
  },
  "parser": "babel-eslint"
}
module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "import"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": [0],
    "react/forbid-prop-types": [0],
    "comma-dangle": ["error", "never"],
    "linebreak-style": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
};
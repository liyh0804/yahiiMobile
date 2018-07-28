module.exports = {
  "root": true,
  "parser": "babel-eslint", // eslint 默认支持ECMAScript 5, babel-eslint支持ES6
  "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 6,
      "ecmaFeatures": {
        "jsx": true,
        "forOf": true,
        "es6": true
      }
  },
  "extends": "airbnb",
  "env": {
      "browser": true,
      "node": true,
      "jest": true,
      "es6": true // 额外支持ES6全局变量
  },
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "globals": {
    "window": true,
    "fetch": true,
    "__DEV__": true,
    "__APP__": true,
    "__ANDROID__": true,
    "__IOS__": true
  },
  "rules": {
      // 0 = off, 1 = warning, 2 = error
      "global-require": 0,
      "no-use-before-define": 0,
      "max-len": ["error", { "code": 120, "comments": 120 }],
      "no-console": 2,
      "no-undef": 2,
      "object-curly-newline": 0,
      "arrow-body-style": 0,
      "implicit-arrow-linebreak": 0,
      "no-underscore-dangle": 0,
      "no-unused-expressions": 0,

      "no-unused-vars": 1,
      "block-scoped-var": 2,
      "complexity": ["error", { "max": 10 }],
      "consistent-return": 0,

      // allow async- await
      "generator-star-spacing": ["error", {"before": true, "after": false}],
      "no-return-assign": 1,

      "import/no-unresolved": 0,

      "react/jsx-filename-extension": 0,
      "react/self-closing-comp": 1,
      "react/jsx-closing-bracket-location": 0,
      "react/prop-types": 0,
      "react/prefer-stateless-function": 0,
      "react/jsx-one-expression-per-line": 0,
      "react/no-multi-comp": 0,
      "react/destructuring-assignment": 0,
      "react/no-access-state-in-setstate": 0,
      "react/react-in-jsx-scope": 0,
  }
}

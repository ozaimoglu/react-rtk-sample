module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "react/prop-types": "off",
    "guard-for-in": "off",
    "no-underscore-dangle": "off",
    "linebreak-style": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "react/no-danger": 0,
    "react/no-array-index-key": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-nested-ternary": 0,
    "import/prefer-default-export": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/no-this-in-sfc": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-plusplus": "off",
    "no-await-in-loop": "off",
    "no-case-declarations": "off",
    "no-restricted-syntax": ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"],
    "prefer-destructuring": ["error", {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/jsx-props-no-spreading": "off",
    "import/no-mutable-exports": "off",
    "no-param-reassign": [2, { props: false }],
    "import/named": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    indent: [
      "warn",
      2,
    ],
    radix: ["warn", "as-needed"],
    quotes: [
      "warn",
      "double",
    ],
    semi: [
      "warn",
      "never",
    ],
  },
}

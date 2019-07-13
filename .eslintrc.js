module.exports = {
    "env": {
        "node": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 8,
		"sourceType": "module",
		"ecmaFeatures": {
            "jsx": true
        },
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": 0
    }
};
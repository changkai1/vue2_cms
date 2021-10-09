module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier", "plugin:prettier/recommended"],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/no-parsing-error": [
            "error",
            {
                "duplicate-attribute": true,
                "non-void-html-element-start-tag-with-trailing-solidus": false
            }
        ],
        "vue/no-duplicate-attributes": [
            "error",
            {
                allowCoexistClass: true,
                allowCoexistStyle: true
            }
        ]
    }
}

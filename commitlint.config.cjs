// Commitlint

const typesWithScope = ["feat", "util", "docs", "test", "config"];
const allowedScopes = ["add", "delete", "edit"];
const additionalTypes = [
  "temp",
  "inst",
  "uninst",
  "fix",
  "rename",
  "move",
  "disable",
  "enable",
  "refactor",
  "revert",
  "perf",
  "replace",
  "update",
  "upgrade",
  "chore",
];
const allTypes = [...typesWithScope, ...additionalTypes];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "type-scope-conditional": (parsed) => {
          const { type, scope } = parsed;

          if (!type) {
            return [true];
          }

          const isScopeRequired = typesWithScope.includes(type);

          if (isScopeRequired) {
            if (!scope) {
              return [
                false,
                `Type "${type}" requires a scope. Allowed: ${allowedScopes.join(", ")}`,
              ];
            }
            if (!allowedScopes.includes(scope)) {
              return [
                false,
                `Scope "${scope}" is not allowed for type "${type}". Allowed: ${allowedScopes.join(", ")}`,
              ];
            }
          } else {
            if (scope) {
              return [
                false,
                `Type "${type}" must not have a scope. Remove "(${scope})" from the commit message.`,
              ];
            }
          }

          return [true];
        },
      },
    },
  ],
  rules: {
    "type-enum": [2, "always", allTypes],
    "type-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-scope-conditional": [2, "always"],
  },
};

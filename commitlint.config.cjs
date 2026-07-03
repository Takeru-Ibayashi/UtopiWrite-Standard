// Commitlint

const typesWithScopes = {
  first: ["feat", "util", "docs", "test", "config"],
  second: ["add", "delete"],
};

const allowedScopes = {
  first: ["add", "delete", "edit"],
  second: ["dir", "file"],
};

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

const allTypes = Array.from(
  new Set([
    ...typesWithScopes.first,
    ...typesWithScopes.second,
    ...additionalTypes,
  ]),
);

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

          let matchedGroup = null;
          for (const group of Object.keys(typesWithScopes)) {
            if (typesWithScopes[group].includes(type)) {
              matchedGroup = group;
              break;
            }
          }

          if (matchedGroup) {
            const currentAllowedScopes = allowedScopes[matchedGroup] || [];

            if (!scope) {
              return [
                false,
                `Type "${type}" requires a scope. Allowed scopes for this type: ${currentAllowedScopes.join(", ")}`,
              ];
            }
            if (!currentAllowedScopes.includes(scope)) {
              return [
                false,
                `Scope "${scope}" is not allowed for type "${type}". Allowed: ${currentAllowedScopes.join(", ")}`,
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

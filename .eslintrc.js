module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-cushily`
  extends: ["cushily"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'scope-enum': [2, 'always', [/^SGV-\d+$/]],
      'scope-empty': [2, 'never'], 
    },
  };
  
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'scope-enum': [2, 'always', [/^SGV-\d+$/]], // Valida o padrão SGV-NÚMERO com uma expressão regular, sendo "d" dígitos decimais
      'scope-empty': [2, 'never'], // Exige que o scope não esteja vazio
    },
};
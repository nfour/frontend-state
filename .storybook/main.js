
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  typescript: {
    check: true,
    reactDocgen: undefined,
  },
  async webpackFinal(config) {
    const babelRule = config.module.rules.find(rule => rule.test.toString().includes('tsx'))

    babelRule.use[0].options.plugins.push('babel-plugin-styled-components')

    return config
  }
}
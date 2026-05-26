module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.spec.js'],
  transform: {
    '^.+\\.js$': ['babel-jest', { configFile: './backend/babel.config.json' }]
  },
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: ['src/**/*.js', '!src/**/index.js']
}

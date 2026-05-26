module.exports = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },

  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

  collectCoverage: true,

  coverageDirectory: 'coverage',

  testMatch: [
    '**/*.spec.js',
    '**/*.spec.jsx',
    '**/*.test.js',
    '**/*.test.jsx',
  ],
}
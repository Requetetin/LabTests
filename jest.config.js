module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/Mocks/styleMock.js',
  },
}

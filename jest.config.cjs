/** @type {import('jest').Config} */
module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
    '\\.(png|jpe?g|gif|webp|svg)$': '<rootDir>/src/test/fileMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': [
      '@swc/jest',
      {
        jsc: {
          parser: { syntax: 'typescript', tsx: true },
          transform: { react: { runtime: 'automatic' } },
        },
      },
    ],
  },
}

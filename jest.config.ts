import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@content/(.*)$': '<rootDir>/content/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/']
};

export default config;

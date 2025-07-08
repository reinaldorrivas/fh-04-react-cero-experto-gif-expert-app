/** @type {import('jest').Config} */

const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: true,
  setupFiles: ["./jest.setup.mjs"],
};

export default config;

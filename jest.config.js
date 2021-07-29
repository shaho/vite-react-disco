/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  testEnvironment: "jsdom",
};

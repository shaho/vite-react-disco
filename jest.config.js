/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */

/**
 * Converts paths defined in tsconfig.json to the format of
 * moduleNameMapper in jest.config.js.
 *
 * For example, {'@alias/*': [ 'path/to/alias/*' ]}
 * Becomes {'@alias/(.*)': [ '<rootDir>/path/to/alias/$1' ]}
 * Credit: https://gist.github.com/timosadchiy/87a5c3799ed44837c4d9de48a02a10bc
 *
 * @param {string} srcPath
 * @param {string} tsconfigPath
 */

function makeModuleNameMapper(srcPath, tsconfigPath) {
  const { paths } = require(tsconfigPath).compilerOptions;
  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace("/*", "/(.*)");
    const path = paths[item][0].replace("/*", "/$1");
    aliases[key] = srcPath + "/" + path;
  });
  return aliases;
}

const TS_CONFIG_PATH = "./tsconfig.json";
const SRC_PATH = "<rootDir>/";

module.exports = {
  roots: [SRC_PATH],
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: makeModuleNameMapper(SRC_PATH, TS_CONFIG_PATH),
  collectCoverage: true,
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
};

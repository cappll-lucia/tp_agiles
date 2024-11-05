const preset = "ts-jest";
const testEnvironment = "node";
const transform = {
  "^.+\\.ts?$": "ts-jest", // Transforma archivos TypeScript usando ts-jest
};
const moduleFileExtensions = ["ts", "js"];

export default { preset, testEnvironment, transform, moduleFileExtensions };

module.exports = {
  preset: 'ts-jest', // Permite usar TypeScript con Jest
  testEnvironment: 'node', // Configura el entorno de Node.js para las pruebas
  transform: {
    '^.+\\.ts?$': 'ts-jest', // Transforma archivos .ts usando ts-jest
  },
  moduleFileExtensions: ['ts', 'js'], // Extensiones que Jest reconocerá
};

export default {
  testEnvironment: 'jsdom', // Use jsdom to simulate browser environment for React testing
  
  injectGlobals: true, // Added: Inject Jest globals (jest, expect, describe, test, etc.) into test files - Required when using "type": "module" in package.json because ESM doesn't have global scope by default
  
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Run setup file before tests to add polyfills for TextEncoder/TextDecoder required by React Router v7
  
  extensionsToTreatAsEsm: ['.jsx'], // Treat .jsx files as ES modules - Note: .js is automatically inferred from "type": "module" in package.json, so we don't need to include it here
  
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './.babelrc' }], // Use babel-jest to transform JS/JSX files with Babel configuration - Converts ESM to CommonJS for Jest
  },
  
  transformIgnorePatterns: [
    'node_modules/(?!(@faker-js|swr|react-router)/)', // Transform these packages from node_modules because they use ES modules - Without this, Jest can't understand their import/export syntax
  ],
  
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports in tests - Prevents errors when components import CSS files
  },
};

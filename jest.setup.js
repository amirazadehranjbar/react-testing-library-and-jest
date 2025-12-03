// Jest setup file - runs before all tests
// This file adds browser APIs that are not available in Node.js/Jest environment

// Polyfill for TextEncoder - Required by React Router v7
// TextEncoder is a browser API used for encoding strings to bytes
// Jest's jsdom environment doesn't provide it by default
global.TextEncoder = require('util').TextEncoder;

// Polyfill for TextDecoder - Required by React Router v7
// TextDecoder is a browser API used for decoding bytes to strings
// Jest's jsdom environment doesn't provide it by default
global.TextDecoder = require('util').TextDecoder;

// Why do we need this?
// React Router v7 uses these APIs internally for handling form data and URLs
// Without this polyfill, tests will fail with "TextEncoder is not defined" error

module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|@freakycoder/react-native-bounceable)/).+\\.js$',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
};

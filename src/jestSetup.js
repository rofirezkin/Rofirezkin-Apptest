import 'react-native-gesture-handler/jestSetup';
jest.useFakeTimers();
jest.mock('react-redux');
jest.mock('react-native-skeleton-content-nonexpo');
jest.mock('axios');
jest.mock('@react-navigation/native');
jest.mock('@react-navigation/native-stack');

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

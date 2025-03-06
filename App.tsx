import 'react-native-gesture-handler';

import { Text } from 'react-native';

import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Text>sakfoafopaskfoa12</Text>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

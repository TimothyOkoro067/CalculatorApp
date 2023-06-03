import { AppRegistry } from 'react-native';
import { View } from 'react-native';
import Calculator from './Calculator';

AppRegistry.registerComponent('MyApp', () => App);

const App = () => {
  return (
     <View style={{ flex: 1 }}>
      <Calculator />
    </View>
  );
};

export default App;


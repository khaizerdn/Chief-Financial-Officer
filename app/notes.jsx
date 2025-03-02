import { View, Text, memo } from 'react';
import { View as RNView } from 'react-native';
import globalStyles from './globalStyles';

const Notes = memo(() => {
  return (
    <RNView style={{ flex: 1 }}>
      <RNView style={globalStyles.container}>
        <Text style={globalStyles.title}>Notes</Text>
      </RNView>
    </RNView>
  );
});

export default Notes;
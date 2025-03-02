import { View, Text, memo } from 'react';
import { View as RNView } from 'react-native';
import globalStyles from './globalStyles';

const Todo = memo(() => {
  return (
    <RNView style={{ flex: 1 }}>
      <RNView style={globalStyles.container}>
        <Text style={globalStyles.title}>To-Do</Text>
      </RNView>
    </RNView>
  );
});

export default Todo;
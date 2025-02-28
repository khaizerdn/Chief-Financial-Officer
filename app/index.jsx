import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import globalStyles from './globalStyles';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [note, setNote] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [wallet, setWallet] = useState('');
  const [date, setDate] = useState('');
  const [dueDate, setDueDate] = useState('');

  // Automatically set the current date when the modal opens
  useEffect(() => {
    if (modalVisible) {
      setDate(new Date().toLocaleDateString());
    }
  }, [modalVisible]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <View style={globalStyles.container}>
          <Text style={globalStyles.title}>My App</Text>
          <TouchableOpacity style={globalStyles.fab} onPress={() => setModalVisible(true)}>
            <Ionicons name="add" size={24} color="#121212" />
          </TouchableOpacity>

          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            modalPresentationStyle="overFullScreen"
          >
            <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
              <StatusBar barStyle="light-content" backgroundColor="#121212" />
              <View style={[globalStyles.modal.container, { backgroundColor: '#121212' }]}>
                <ScrollView contentContainerStyle={globalStyles.modal.contentWrapper}>
                  <View style={globalStyles.modal.innerContainer}>
                    <View>
                      <Text style={globalStyles.modal.title}>New Entry</Text>
                      <TextInput
                        placeholder="Note"
                        placeholderTextColor="#ccc"
                        style={globalStyles.input}
                        value={note}
                        onChangeText={setNote}
                      />
                      <TextInput
                        placeholder="Name"
                        placeholderTextColor="#ccc"
                        style={globalStyles.input}
                        value={name}
                        onChangeText={setName}
                      />
                      <TextInput
                        placeholder="Amount"
                        placeholderTextColor="#ccc"
                        style={globalStyles.input}
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType="numeric"
                      />
                      <TextInput
                        placeholder="Type"
                        placeholderTextColor="#ccc"
                        style={globalStyles.input}
                        value={type}
                        onChangeText={setType}
                      />
                      <TextInput
                        placeholder="Wallet"
                        placeholderTextColor="#ccc"
                        style={globalStyles.input}
                        value={wallet}
                        onChangeText={setWallet}
                      />
                      <TextInput
                        placeholder="Date"
                        placeholderTextColor="#ccc"
                        style={globalStyles.input}
                        value={date}
                        editable={false}
                      />
                      <TextInput
                        placeholder="Due Date"
                        placeholderTextColor="#ccc"
                        style={globalStyles.input}
                        value={dueDate}
                        onChangeText={setDueDate}
                      />
                    </View>

                    <View style={globalStyles.modal.buttons}>
                      <TouchableOpacity
                        style={globalStyles.modal.actionButton}
                        onPress={() => setModalVisible(false)}
                      >
                        <Text style={globalStyles.modal.actionButtonText}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={globalStyles.modal.actionButton}
                        onPress={() => {
                          console.log({ note, name, amount, type, wallet, date, dueDate });
                          setModalVisible(false);
                        }}
                      >
                        <Text style={globalStyles.modal.actionButtonText}>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </SafeAreaView>
          </Modal>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

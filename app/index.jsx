import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
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

  // Set the current date automatically when the modal opens
  useEffect(() => {
    if (modalVisible) {
      setDate(new Date().toLocaleDateString());
    }
  }, [modalVisible]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainTitle}>Aasdadpp</Text>
      <TouchableOpacity style={globalStyles.fab} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={24} color="#121212" />
      </TouchableOpacity>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={globalStyles.modalOverlay}>
          <View style={globalStyles.modalContainer}>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
              <Text style={globalStyles.modalTitle}>New Entry</Text>
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

              {/* Buttons are now attached immediately after the last input */}
              <View style={globalStyles.modalButtons}>
                <TouchableOpacity
                  style={globalStyles.actionButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={globalStyles.actionButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={globalStyles.actionButton}
                  onPress={() => {
                    console.log({ note, name, amount, type, wallet, date, dueDate });
                    setModalVisible(false);
                  }}
                >
                  <Text style={globalStyles.actionButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;

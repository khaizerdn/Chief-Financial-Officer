import React, { useState, useEffect, memo } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import globalStyles, { COLORS } from './globalStyles';

const Home = memo(() => {
  const [modalVisible, setModalVisible] = useState(false);
  const [note, setNote] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [wallet, setWallet] = useState('');
  const [date, setDate] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (modalVisible) {
      setDate(new Date().toLocaleDateString());
    }
  }, [modalVisible]);

  return (
    <View style={{ flex: 1 }}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Home</Text>
        <TouchableOpacity style={globalStyles.fab} onPress={() => setModalVisible(true)}>
          <Ionicons name="add" size={24} color={COLORS.bgLayer0} />
        </TouchableOpacity>

        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          modalPresentationStyle="overFullScreen"
        >
          <View style={[globalStyles.modal.container, { backgroundColor: COLORS.bgLayer0 }]}>
            <ScrollView contentContainerStyle={globalStyles.modal.contentWrapper}>
              <View style={globalStyles.modal.innerContainer}>
                <View>
                  <Text style={globalStyles.modal.title}>New Entry</Text>
                  <TextInput
                    placeholder="Note"
                    placeholderTextColor={COLORS.textMuted}
                    style={globalStyles.input}
                    value={note}
                    onChangeText={setNote}
                  />
                  <TextInput
                    placeholder="Name"
                    placeholderTextColor={COLORS.textMuted}
                    style={globalStyles.input}
                    value={name}
                    onChangeText={setName}
                  />
                  <TextInput
                    placeholder="Amount"
                    placeholderTextColor={COLORS.textMuted}
                    style={globalStyles.input}
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                  />
                  <TextInput
                    placeholder="Type"
                    placeholderTextColor={COLORS.textMuted}
                    style={globalStyles.input}
                    value={type}
                    onChangeText={setType}
                  />
                  <TextInput
                    placeholder="Wallet"
                    placeholderTextColor={COLORS.textMuted}
                    style={globalStyles.input}
                    value={wallet}
                    onChangeText={setWallet}
                  />
                  <TextInput
                    placeholder="Date"
                    placeholderTextColor={COLORS.textMuted}
                    style={globalStyles.input}
                    value={date}
                    editable={false}
                  />
                  <TextInput
                    placeholder="Due Date"
                    placeholderTextColor={COLORS.textMuted}
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
        </Modal>
      </View>
    </View>
  );
});

export default Home;
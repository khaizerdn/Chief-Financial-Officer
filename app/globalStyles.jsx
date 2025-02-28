import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  // Base container for screens
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  // Main title style
  title: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  // Floating Action Button style
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  // Input fields style
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#FFFFFF',
  },
  // Modal-specific styles grouped under "modal"
  modal: {
    // Modal container covers the full screen
    container: {
      flex: 1,
      backgroundColor: '#121212',
      padding: 20,
      alignItems: 'center',
    },
    // Allows the ScrollView content to grow to full height
    contentWrapper: {
      flexGrow: 1,
    },
    // Inner container that spaces out the content and the buttons
    innerContainer: {
      flex: 1,
      justifyContent: 'space-between',
      width: '100%',
    },
    // Modal title style
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 20,
      paddingHorizontal: 5,
    },
    // Container for the modal action buttons
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'auto',
      width: '100%',
    },
    // Style for each action button
    actionButton: {
      flex: 0.48,
      height: 56,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    // Text style for action buttons
    actionButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#121212',
    },
  },
});

export default globalStyles;

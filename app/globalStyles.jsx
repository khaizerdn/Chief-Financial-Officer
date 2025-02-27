import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // dark background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mainTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FFFFFF', // white background for FAB
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E1E1E', // dark input background
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#FFFFFF',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF', // white button background
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#121212', // dark text on white button
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#121212', // dark cancel button
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
  redListButton: {
    padding: 10,
    backgroundColor: '#121212',
    borderRadius: 5,
    width: 60,
    alignItems: 'center',
  },
  blueListButton: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: 60,
    alignItems: 'center',
  },
  listButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  listContainer: {
    flex: 1,
    width: '100%',
    minHeight: 200,
  },
  listItem: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 60,
  },
  listItemLeft: {
    flex: 1,
  },
  listItemRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  listItemDate: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  listItemPrimary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  listItemSecondary: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  sectionAddIcon: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  // ===== Global Modal Styles =====
  modalOverlay: {
    flex: 1,
    backgroundColor: '#121212', // dark overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#121212', // dark modal container
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  modalButtons: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalDeleteTextLink: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#FFFFFF'
  },
  actionButtonText: {
    color: '#121212',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Separator
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#1E1E1E',
    marginVertical: 10,
  },
});

export default globalStyles;

import { StyleSheet } from 'react-native';

const COLORS = {
  bgLayer0: '#121212',
  bgLayer1: '#1E1E1E',
  bgLayer2: '#2A2A2A',
  bgLayer3: '#363636',
  textColor0: '#FFFFFF',
  textMuted: '#808080',
  accent: '#FFFFFF',
  navActive: '#FFFFFF',
  navInactive: '#808080',
};

const SPACING = {
  small: 10,
  medium: 15,
  large: 20,
};

const FONT_SIZES = {
  small: 14,
  medium: 16,
  large: 18,
  title: 20,
  heading: 24,
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgLayer0,
    padding: SPACING.large,
  },
  title: {
    fontSize: FONT_SIZES.heading,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    color: COLORS.textColor0,
    marginBottom: SPACING.large,
  },
  fab: {
    position: 'absolute',
    bottom: SPACING.large + 60,
    right: SPACING.large,
    width: 56,
    height: 56,
    borderRadius: SPACING.small,
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.bgLayer1,
    borderRadius: SPACING.small,
    paddingHorizontal: SPACING.medium,
    marginBottom: SPACING.medium,
    fontSize: FONT_SIZES.medium,
    color: COLORS.textColor0,
  },
  modal: {
    container: {
      flex: 1,
      backgroundColor: COLORS.bgLayer2,
      padding: SPACING.large,
      alignItems: 'center',
    },
    contentWrapper: {
      flexGrow: 1,
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'space-between',
      width: '100%',
    },
    title: {
      fontSize: FONT_SIZES.title,
      fontWeight: 'bold',
      color: COLORS.textColor0,
      marginBottom: SPACING.large,
      paddingHorizontal: SPACING.small / 2,
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'auto',
      width: '100%',
    },
    actionButton: {
      flex: 0.48,
      height: 56,
      backgroundColor: COLORS.accent,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: SPACING.small,
    },
    actionButtonText: {
      fontSize: FONT_SIZES.large,
      fontWeight: 'bold',
      color: COLORS.bgLayer0,
    },
  },
});

export default globalStyles;
export { COLORS };
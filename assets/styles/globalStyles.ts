import { StyleSheet } from 'react-native';

export const globalColors = {
  primary: '#e0f0fd',
  secondary: '#2E3A59',
  lightGray: '#636363',
  purple: '#3A49F9',
  secondaryPurple: '#3926e0',
  white: '#fff',
  secondaryWhite: '#a3a3a3',
  gray: '#E5EAFC',
  darkGray: '#666666'
};

export const globalStyles = StyleSheet.create({
  textWhite: {color: globalColors.white},
  cardContainer: {
    marginVertical: 30,
    gap: 10
  },
  card: {
      backgroundColor: globalColors.purple,
      borderRadius: 20,
      padding: 15,
      marginRight: 15,
      width: 240,
      height: 240,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13},
      justifyContent: 'space-around'
  }
});
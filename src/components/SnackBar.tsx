import React, { useEffect, useState } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SnackbarProps {
  message: string; // El mensaje a mostrar
  visible: boolean; // Si el Snackbar es visible o no
  onDismiss: () => void; // Función para ocultar el Snackbar
}

const Snackbar: React.FC<SnackbarProps> = ({ message, visible, onDismiss }) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Para animar la opacidad

  useEffect(() => {
    if (visible) {
      // Mostrar el Snackbar
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // Ocultarlo después de 3 segundos
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => onDismiss());
      }, 3000);

      return () => clearTimeout(timer); // Limpieza del temporizador
    }
  }, [visible, fadeAnim, onDismiss]);

  if (!visible) return null; // No renderizar si no es visible

  return (
    <Animated.View style={[styles.snackbar, { opacity: fadeAnim }]}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Text style={styles.snackbarText}>{message}</Text>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png'}} style={{width: 20, height: 20}}/>
      </View>
      <TouchableOpacity onPress={onDismiss} style={styles.dismissButton}>
        <Text style={styles.dismissText}>X</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#333',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  snackbarText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  dismissButton: {
    marginLeft: 10,
  },
  dismissText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Snackbar;

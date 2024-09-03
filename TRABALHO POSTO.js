import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { km, liters } = route.params;
  const average = (km / liters).toFixed(2);

  let classification;
  if (average > 12) classification = 'A';
  else if (average > 10) classification = 'B';
  else if (average > 8) classification = 'C';
  else if (average > 4) classification = 'D';
  else classification = 'E';

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/gas-station-background.jpg' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Resultado do Consumo:</Text>
          <Text style={styles.result}>Média de Consumo: {average} Km/L</Text>
          <Text style={[styles.classification, styles[`classification${classification}`]]}>
            Classificação: {classification}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#3CB371', // Cor de fundo verde
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'Lucida Bright',
    color: '#FFD700', // Amarelo
    textAlign: 'center',
    marginBottom: 20,
  },
  result: {
    fontSize: 24,
    color: '#FFFFFF', // Branco
    marginBottom: 10,
  },
  classification: {
    fontSize: 28,
    fontWeight: 'Lucida Bright',
    marginBottom: 30,
  },
  classificationA: { color: '#00FF00' }, // Verde para classificação A
  classificationB: { color: '#ADFF2F' }, // Verde amarelado para B
  classificationC: { color: '#FFFF00' }, // Amarelo para C
  classificationD: { color: '#FFA500' }, // Laranja para D
  classificationE: { color: '#FF0000' }, // Vermelho para E
  button: {
    backgroundColor: '#1E90FF', // Azul
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Branco
    fontSize: 18,
    fontWeight: 'Lucida Bright',
  },
});

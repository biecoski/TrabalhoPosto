import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function InputScreen({ navigation }) {
  const [km, setKm] = useState('');
  const [liters, setLiters] = useState('');

  const handleCalculate = () => {
    if (!km || !liters) {
      alert('Por favor, insira a quilometragem e a quantidade de litros.');
      return;
    }
    navigation.navigate('Result', { km: parseFloat(km), liters: parseFloat(liters) });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/gas-station-background.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Gas Station</Text>
        </View>
        <Text style={styles.label}>Quilometragem (KM):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite a quilometragem"
          placeholderTextColor="#B0B0B0"
          value={km}
          onChangeText={setKm}
        />
        <Text style={styles.label}>Litros de Gasolina:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite a quantidade de litros"
          placeholderTextColor="#B0B0B0"
          value={liters}
          onChangeText={setLiters}
        />
        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <View style={styles.resultTable}>
          <Text style={styles.tableTitle}>Tabela de Consumo</Text>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.tableHeader}>Classificação</Text>
            <Text style={styles.tableHeader}>Média (Km/L)</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>A</Text>
            <Text style={styles.tableCell}>> 12</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>B</Text>
            <Text style={styles.tableCell}>10 - 12</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>C</Text>
            <Text style={styles.tableCell}>8 - 10</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>D</Text>
            <Text style={styles.tableCell}>4 - 8</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>E</Text>
            <Text style={styles.tableCell}>{'<'} 4</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 140,
    padding: 52,
    justifyContent: 'center',
    backgroundColor: '#3CB371', // Fundo Verde
  },
 
  title: {
    fontSize: 65,
    fontWeight: 'Lucida Bright',
    color: 'white', // Branco
    textAlign: 'center',
    textShadowColor: '#1E90FF', // Sombra azul para contraste
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontFamily: 'Lucida Bright', 
  },
  label: {
    fontSize: 20,
    top:'1%',
    left:'25%',
    color: '#FFFFFF', // Branco
    marginBottom: 10,
    
  },
  input: {
    height: 40, // Altura reduzida
    borderColor: '#1E90FF', // Azul
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#F0E68C', 
    color: '#333333', 
    fontSize: 16,
    marginBottom: 15,
    width: '50%', // Reduzir largura
    alignSelf: 'center', // Centralizar horizontalmente
  },
  button: {
    backgroundColor: '#1E90FF', // Azul
    paddingVertical: 12,
    borderRadius: 8,
    width: '20%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF', // Branco
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'Lucida Bright',
  },
  resultTable: {
    backgroundColor: '#FFFFFF', // Fundo branco
    borderRadius: 8,
    padding: 10, // Padding reduzido
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: '60%', // Reduzir largura da tabela
    alignSelf: 'center', // Centralizar horizontalmente
  },
  tableTitle: {
    fontSize: 22,
    fontWeight: 'Lucida Bright',
    color: '#1E90FF', // Azul
    textAlign: 'center',
    marginBottom: 10,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#1E90FF', // Azul
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: 'Lucida Bright',
    color: '#FFD700', 
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  tableCell: {
    fontSize: 16,
    color: '#333333', // Cinza escuro
    flex: 1,
    textAlign: 'center',
  },
});

import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Função para fazer a solicitação à API Django
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/clientes/');
        setData(response.data); // Armazena os dados da resposta no estado
        console.error(response.data[0]);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchDataFromAPI(); // Chama a função ao montar o componente
  }, []); // O segundo argumento vazio garante que isso seja executado apenas uma vez

  return (
    <View>
      <Text></Text>
      <Text>Dados da API Django:</Text>
      {data ? (
        <Text>{JSON.stringify(data[1]["codigo"], null, 2)}</Text>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

export default YourComponent;
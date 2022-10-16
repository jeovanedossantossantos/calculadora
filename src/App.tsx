import React from 'react';
import { Text } from 'react-native';
import { ContainerView } from './App.styled';
import ButtonCalc from './components/ButtonCalc';


export default function App() {
  return (
    <ContainerView>
      <Text>Calculadora</Text>
      <ButtonCalc label="1" clickAction={() => { }} triple="triple" />

    </ContainerView>
  );
}

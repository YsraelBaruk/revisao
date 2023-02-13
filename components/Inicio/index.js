import { Text, View } from 'react-native';

import estilo from './estilo.js';

export default function Inicio() {
  return (
      <View style={estilo.container}>
        <Text style={estilo.texto}>Olá Michel</Text>
      </View>
  );
}
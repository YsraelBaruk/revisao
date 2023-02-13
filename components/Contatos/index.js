import { Text, View } from 'react-native';

import estilo from './estilo.js';

export default function Contatos() {
  return (
      <View style={estilo.container}>
        <Text style={estilo.texto}>Aqui estão os seus contatos, blz?</Text>
      </View>
  );
}
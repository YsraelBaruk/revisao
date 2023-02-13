import { Text, View } from 'react-native';

import estilo from './estilo.js';

export default function Produtos() {
  return (
      <View style={estilo.container}>
        <Text style={estilo.texto}>Seus produtos legais estão nesse lugarzinho, ok?</Text>
      </View>
  );
}
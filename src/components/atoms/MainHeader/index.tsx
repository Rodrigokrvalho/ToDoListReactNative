import { View, Image } from 'react-native';
import { styles } from './styles';

export function MainHeader() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} resizeMode='contain' style={styles.img} />
    </View>
  );
}
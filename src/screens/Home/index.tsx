import { View, Image } from 'react-native';
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Header title="MARIANA EU TE AMO MUITO MEU AMOR" subtitle="Casa comigo?" />
    </View>
  );
}
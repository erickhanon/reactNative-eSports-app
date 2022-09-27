import { View, Image, FlatList } from 'react-native';
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Header } from '../../components/Header';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Header title="Encontre o seu DUO" subtitle="Ache um parceiro para jogar online!" />
      <FlatList 
        data={GAMES}
        horizontal
        contentContainerStyle={styles.contentList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard data={item} />
        )}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}
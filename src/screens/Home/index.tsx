import { View, Image, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Header } from "../../components/Header";
import { GameCard, GameCardProps } from "../../components/GameCard";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch("http://192.168.0.43:3333/games").then((response) => {
      response.json().then((data) => {
        setGames(data);
      });
    });
  }, [])
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Header
        title="Encontre o seu DUO"
        subtitle="Ache um parceiro para jogar online!"
      />
      <FlatList
        data={games}
        horizontal
        contentContainerStyle={styles.contentList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

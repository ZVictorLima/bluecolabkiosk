import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
//   Dimensions
} from 'react-native';
import { WebView } from 'react-native-webview';

// const { width, height } = Dimensions.get('window');

const games = [
  {
    name: 'Jeopardy',
    description: 'Learn more about water while having fun.',
    creator: 'Keathson Lam',
    img: require('../assets/images/screenshots/jeopardy.jpg'),
    url: 'https://bluecolab.github.io/BlueCoLab-Jeopardy/',
  },
  {
    name: 'Cronin Cruise',
    description: 'The one and only Cronin hops over sharks. Based off of Google Chrome dinosaur game.',
    creator: 'Daniel White & Jack Sullivan',
    img: require('../assets/images/screenshots/cronincruise.jpg'),
    url: 'https://itch.io/embed-upload/10391777?color=333333',
  },
  {
    name: 'Splashy Fish',
    description: 'Flappy bird remake.',
    creator: 'Daniel White & Jack Sullivan',
    img: require('../assets/images/screenshots/splashyfish.jpg'),
    url: 'https://itch.io/embed-upload/10391857?color=333333',
  },
];

export default function Games() {
  const [currentGame, setCurrentGame] = useState(games[0]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Play interactive games to learn about water!</Text>

      <View style={styles.gameList}>
        {games.map((game, index) => (
          <TouchableOpacity key={index} onPress={() => setCurrentGame(game)}>
            <Text style={styles.gameItem}>{game.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.preview}>
        <Text style={styles.title}>{currentGame.name}</Text>
        <Text style={styles.subTitle}>Created by: {currentGame.creator}</Text>
        <Text style={styles.description}>{currentGame.description}</Text>
        <Image source={currentGame.img} style={styles.image} resizeMode="contain" />
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Play Game</Text>
        </Pressable>
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalHeader}>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.backText}>← Back</Text>
          </Pressable>
          <Text style={styles.modalTitle}>{currentGame.name}</Text>
        </View>
        <WebView
          source={{ uri: currentGame.url }}
          style={styles.webview}
          allowsFullscreenVideo
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#eee',
    flex: 1,
  },
  header: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  gameList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  gameItem: {
    backgroundColor: '#fff',
    padding: 8,
    margin: 4,
    borderRadius: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    elevation: 2,
  },
  preview: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000080',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalHeader: {
    backgroundColor: '#000080',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
    fontSize: 18,
    marginRight: 12,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
  },
});

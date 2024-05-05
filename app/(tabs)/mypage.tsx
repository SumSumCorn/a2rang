import { sampleEvents } from '@/utils/data';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

const MenuOptions = [
  { id: '1', title: '자주 묻는 질문' },
  { id: '2', title: '이메일 문의' },
  { id: '3', title: '약관 및 정책' },
  { id: '4', title: '서비스 이용 안내' },
  { id: '5', title: '개인정보 처리방침' },
];

const MyPage = () => {
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>유저 이름</Text>
      </View>
      <View style={styles.myPlaceContainer}>
        <Text style={styles.myPlaceTitle}>내 관심지역</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text>성균</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>동대문구</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>장서</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        horizontal
        data={sampleEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.eventTitle}>{item.title}</Text>
          </View>
        )}
      />
      {MenuOptions.map((option) => (
        <TouchableOpacity key={option.id} style={styles.menuItem}>
          <Text style={styles.menuText}>{option.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  myPlaceContainer: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myPlaceTitle: {
    fontSize: 16,
    color: '#737780',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  card: {
    width: 150,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  eventTitle: {
    textAlign: 'center',
  },
  menuItem: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  menuText: {
    fontSize: 16,
  },
});

export default MyPage;

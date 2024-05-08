import Colors from '@/constants/Colors';
import { sampleEvents } from '@/utils/data';
import { Entypo } from '@expo/vector-icons';
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
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>유저 이름</Text>
        </View>
        <View style={styles.myPlaceContainer}>
          <Text style={styles.myPlaceTitle}>내 관심지역</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>성북구</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>동대문구</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>강서구</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.subTitle}>최근 본 행사</Text>
          <Entypo name='chevron-right' size={20} color={Colors.lightGray} />
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
            <Entypo name='chevron-right' size={20} color={Colors.lightGray} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
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
    backgroundColor: '#F7F9FC',
    borderRadius: 12,
    marginBottom: 24,
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
  subTitle: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.orange,
  },
  card: {
    // width: 150,
    marginRight: 12,
    gap: 12,
    marginVertical: 12,
  },
  image: {
    width: 140,
    height: 166,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  eventTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

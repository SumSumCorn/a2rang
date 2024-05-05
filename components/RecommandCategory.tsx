import Colors from '@/constants/Colors';
import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const events = [
  {
    id: '1',
    title: '색칠공부 콘테스트',
    date: '2024.05.31 - 06.08',
    image: require('@/assets/images/icon.png'),
  },
  {
    id: '2',
    title: '행복한 하루 축제',
    date: '2024.05.04 - 05.05',
    image: require('@/assets/images/icon.png'),
  },
  {
    id: '3',
    title: '고전 게임 박람회',
    date: '2024.05.06',
    image: require('@/assets/images/icon.png'),
  },
];
// 데이터를 두 개씩 그룹화
const groupedData = events.reduce<(typeof events)[]>((acc, item, index) => {
  if (index % 2 === 0) {
    acc.push([item]);
  } else {
    acc[acc.length - 1].push(item);
  }
  return acc;
}, []);

const categories = ['전시·미술', '공연', '교육체험', '축제', '영화', '기타'];

const RecommandCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>아이랑의 추천 Pick!</Text>
      <View style={styles.categoryContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                category === selectedCategory ? styles.selected : null,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === selectedCategory
                    ? styles.selectedCategoryText
                    : null,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          data={events}
          // horizontal={true}
          // showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.cardSection}>
                <View style={styles.cardTypeSection}>
                  <Text style={styles.cardText}>연극</Text>
                  <Text style={styles.cardText}>|</Text>
                  <Text style={styles.cardText}>전연령</Text>
                </View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.bigButton}>
          <Text>{selectedCategory} 모아보기</Text>
          <MaterialIcons name='arrow-forward-ios' size={16} color='#585C66' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryButton: {
    // backgroundColor: Colors.lightGray,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  selected: {
    borderColor: 'transparent',
    backgroundColor: Colors.organge,
    color: 'white',
  },
  categoryText: {
    fontSize: 14,
  },
  selectedCategoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    width: '50%',
    marginVertical: 10,
    paddingHorizontal: 5,
    // paddingHorizontal: 10,
    // height: 200,
    // marginRight: 15,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardSection: {
    marginTop: 10,
    gap: 7,
  },
  cardTypeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#3B3F47',
  },
  image: {
    width: '100%',
    height: 128,
    borderRadius: 6,
    // width: '100%',
    // height: 200,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: '#777',
  },
  cardContainer: {
    marginBottom: 20,
  },
  bigButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.lightGray,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  bigButtonText: {
    fontSize: 16,
  },
});

export default RecommandCategory;

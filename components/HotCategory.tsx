import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

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

const categories = ['성복구', '동대문구', '종로구'];

const HotCategory = () => {
  // const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>내 관심지역의 핫한 행사</Text>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <View
            key={category}
            style={[styles.categoryButton]}
            // onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </View>

      <FlatList
        data={events}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/detail/${item.id}`} asChild>
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
          </Link>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
    backgroundColor: 'rgba(255, 94, 59, 0.08)',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  selected: {
    backgroundColor: Colors.orange,
    opacity: 8,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.orange,
  },
  card: {
    width: 140,
    // height: 200,
    marginRight: 15,
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
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 5,
    paddingBottom: 1,
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
    // width: 112,
    // height: 128,
    width: '100%',
    height: 166,
    borderRadius: 6,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: '#777',
  },
});

export default HotCategory;

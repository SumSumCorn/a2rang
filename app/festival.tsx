import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import {
  samplecategories as categories,
  sampleEvents as events,
} from '@/utils/data';
import { Link } from 'expo-router';

const FestivalPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.categoryItem}
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
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterPill}>
          <Text style={styles.filterPillText}>날짜</Text>
          <Entypo name='chevron-small-down' size={20} color={Colors.gray} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterPill}>
          <Text style={styles.filterPillText}>지역</Text>
          <Entypo name='chevron-small-down' size={20} color={Colors.gray} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitle}>총 91건</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>인기순</Text>
            <Entypo name='chevron-small-down' size={20} color={Colors.gray} />
          </View>
        </View>
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link href={`/detail/${item.id}`} asChild>
              <TouchableOpacity style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.details}>
                  <View style={{ flexDirection: 'row', gap: 6 }}>
                    <View
                      style={[styles.badge, { backgroundColor: '#F2F4F7' }]}
                    >
                      <Text>{item.place}</Text>
                    </View>
                    <View
                      style={[styles.badge, { backgroundColor: '#FFF4E6' }]}
                    >
                      <Text>{item.target}</Text>
                    </View>
                  </View>
                  <Text style={styles.contentTitle}>{item.title}</Text>
                  <Text style={styles.description}>{item.org}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  categoryContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 0,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  categoryItem: {
    paddingHorizontal: 8,
  },
  categoryText: {
    fontSize: 16,
  },
  selectedCategoryText: {
    // fontSize: 14,
    fontWeight: 'bold',
    color: Colors.orange,
  },
  filterContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F2F4F7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 6,
  },
  filterPill: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D5D7DC',
  },
  filterPillText: {
    fontSize: 14,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentHeader: {
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // title: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
  card: {
    width: '100%',
    flexDirection: 'row',
    // padding: 10,
    // paddingBottom: 16,
    // marginBottom: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
    // marginHorizontal: 20,
    // backgroundColor: '#fff',
    // borderRadius: 8,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // shadowOffset: { width: 0, height: 2 },
    // elevation: 3,
  },
  image: {
    borderRadius: 6,
    width: 112,
    height: 128,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  description: {
    fontSize: 14,
    paddingBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  badge: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
  // searchSection: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#f0f0f0',
  //   marginTop: 16,
  //   paddingVertical: 12,
  //   paddingHorizontal: 16,
  //   borderRadius: 8,
  // },
  // input: {
  //   flex: 1,
  //   // padding: 10,
  //   fontSize: 16,
  //   color: '#424242',
  //   backgroundColor: '#f0f0f0',
  // },
  // searchIcon: {
  //   padding: 10,
  // },
  // item: {
  //   padding: 10,
  //   fontSize: 18,
  //   height: 44,
  // },
});

export default FestivalPage;

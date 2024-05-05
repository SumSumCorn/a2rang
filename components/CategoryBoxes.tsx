import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '@/constants/Colors';
import { useAssets } from 'expo-asset';

const categories = [
  { id: '1', name: '전시·미술', icon: '@/assets/images/icon/art' },
  { id: '2', name: '공연', icon: '@/assets/images/icon/mic' },
  { id: '3', name: '교육·체험', icon: '@/assets/images/icon/education' },
  { id: '4', name: '축제', icon: '@/assets/images/icon/festival' },
  { id: '5', name: '영화', icon: '@/assets/images/icon/film' },
  { id: '6', name: '기타', icon: '@/assets/images/icon/etc' },
];
const CategoryBoxes = () => {
  const [assets, error] = useAssets([
    require('@/assets/images/icon/art.png'),
    require('@/assets/images/icon/mic.png'),
    require('@/assets/images/icon/education.png'),
    require('@/assets/images/icon/festival.png'),
    require('@/assets/images/icon/film.png'),
    require('@/assets/images/icon/etc.png'),
  ]);

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity key={category.id} style={styles.button}>
          {assets ? (
            <Image
              source={
                assets[+category.id - 1] as ImageSourcePropType | undefined
              }
            />
          ) : null}
          <Text style={styles.label}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff', // Background color for the buttons
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default CategoryBoxes;

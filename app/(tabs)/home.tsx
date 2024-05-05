import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import CategoryBoxes from '@/components/CategoryBoxes';
import HotCategory from '@/components/HotCategory';
import RecommandCategory from '@/components/RecommandCategory';
import RecentCategory from '@/components/RecentCategory';

export default function Page() {
  const [query, setQuery] = useState('');
  const handleSearch = (text: string) => {
    // const formattedQuery = text.toLowerCase();
    // const filteredData = data.filter(item => item.toLowerCase().includes(formattedQuery));
    setQuery(text);
    // setData(filteredData);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* 검색 컴포넌트 */}
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            value={query}
            onChangeText={handleSearch}
            placeholder='검색어를 입력하세요'
            placeholderTextColor='#999'
          />
          <TouchableOpacity onPress={() => handleSearch(query)}>
            <AntDesign name='search1' size={24} color='#999' />
          </TouchableOpacity>
        </View>
        {/* box컴포넌트 */}
        <CategoryBoxes />
        {/* 핫한행사컴포넌트 */}
        <HotCategory />
        {/* 아이랑추천픽컴포넌트 */}
        <RecommandCategory />
        {/* 최근등록된행사 컴포넌트 */}
        <RecentCategory />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    // padding: 10,
    fontSize: 16,
    color: '#424242',
    backgroundColor: '#f0f0f0',
  },
  searchIcon: {
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

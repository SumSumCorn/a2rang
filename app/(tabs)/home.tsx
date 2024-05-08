import {
  FlatList,
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

// 상단 헤더 섹션을 렌더링할 컴포넌트
const ListHeader = ({
  query,
  handleSearch,
}: {
  query: string;
  handleSearch: (text: string) => void;
}) => (
  <View style={{ backgroundColor: 'white' }}>
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
    <CategoryBoxes />
    <HotCategory />
    <RecommandCategory />
    <RecentCategory />
  </View>
);

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
      <FlatList
        ListHeaderComponent={
          <ListHeader query={query} handleSearch={handleSearch} />
        }
        data={[]} // 여기서는 실제 리스트 데이터가 없다면 빈 배열을 전달
        renderItem={null} // 데이터가 없으므로 renderItem은 필요 없음
        keyExtractor={() => 'key'} // 데이터가 없으므로 키 추출 함수는 간단히 처리
      />
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

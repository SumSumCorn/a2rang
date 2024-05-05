import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '@/constants/Colors';

const Page = () => {
  return (
    <View style={styles.container}>
      <Link href={'/festival'} asChild>
        <TouchableOpacity style={styles.pillButton}>
          <Text
            style={{ fontSize: 18, fontWeight: 'bold', color: Colors.orange }}
          >
            관심사 설정하러가기
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  pillButton: {
    borderRadius: 20,
    backgroundColor: 'rgba(255, 94, 59, 0.08)',
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginRight: 10,
  },
});
export default Page;

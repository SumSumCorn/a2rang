import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Link, useRouter } from 'expo-router';

const Page = () => {
  return (
    <View>
      <Text>Page</Text>
      <Link href={'/(tabs)/home'}>
        <Text>안녕</Text>
      </Link>
    </View>
  );
};

export default Page;

import { View, Text, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomePage = () => {
  return (
    <SafeAreaView>
      <Header name="Pep" />;
    </SafeAreaView>
  );
};

// Header
const Header = ({ name }: { name: string }) => {
  return (
    <>
      <View className="flex gap-y-6 px-3 py-8">
        <Text className="text-4xl font-bold">Hello, {name}</Text>
        <View className="flex flex-row items-center gap-x-3">
          <MaterialCommunityIcons name="google-maps" size={24} />
          <Text className="text-gray-700">Find a store</Text>
        </View>
      </View>
      <View className="border-2 border-gray-50" />
    </>
  );
};

export default HomePage;

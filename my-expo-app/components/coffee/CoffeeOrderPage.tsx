import { SafeAreaView, Text, View } from 'react-native';

// Main Page
const CoffeeOrderPage = () => {
  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
};

// Header
const Header = () => {
  return (
    <View className="flex gap-y-4 px-3">
      <Text className="bg-green-200 text-3xl font-bold">Order</Text>;
      <Text>Exclusive for Starbucks® Rewards members.</Text>
    </View>
  );
};

export default CoffeeOrderPage;

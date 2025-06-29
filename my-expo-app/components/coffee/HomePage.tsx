import { View, Text, SafeAreaView, ScrollView, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomePage = () => {
  return (
    <SafeAreaView>
      <Header name="akaMiWP" />
      <QuickSelection />
      <Content stars={226} />
    </SafeAreaView>
  );
};

// Header
const Header = ({ name }: { name: string }) => {
  return (
    <>
      <View className="flex gap-y-6 px-3 pb-4 pt-8">
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

// Quick Selection
const QuickSelection = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row gap-x-6 px-3 py-2">
        <QuickSelectionItem icon="cup-outline" title="Pay in store" />
        <QuickSelectionItem icon="bag-personal-outline" title="Delivery" />
        <QuickSelectionItem icon="storefront-outline" title="In-store Pickup" />
        <QuickSelectionItem icon="coffee-outline" title="Order to Table" />
      </View>
    </ScrollView>
  );
};

const QuickSelectionItem = ({ icon, title }: { icon: any; title: string }) => {
  return (
    <View className="flex w-20 items-center gap-y-4 px-2 py-2">
      <View className=" rounded-3xl bg-gray-50 p-4">
        <MaterialCommunityIcons name={icon} size={24} />
      </View>
      <Text className="text-center font-medium">{title}</Text>
    </View>
  );
};

// Content
const Content = ({ stars }: { stars: number }) => {
  return (
    <View className="h-72 bg-green-950">
      <View className="flex gap-2 px-3 py-6">
        <View className="flex-row items-center gap-2">
          <Text className="text-4xl font-semibold text-yellow-500">Gold {stars}</Text>
          <MaterialCommunityIcons name="star" size={24} color="#f0b100" />
        </View>
        <Text className="text-sm font-medium text-gray-300">Stars earned to redeem rewards</Text>
        <View className="max-w-[60%]">
          <View className="flex gap-y-3">
            <Text className="font-bold text-white">A Free Upsize on Your Drink</Text>
            <Text className="text-sm font-medium text-gray-300">
              Get a free upsize on your favorite drink (Tall/Grande size).
            </Text>
            <View className="mt-3 max-w-[80%] flex-row justify-center space-x-1 rounded-3xl bg-white p-3">
              <Text className="text-center font-medium">Redeem 20</Text>
              <MaterialCommunityIcons name="star" size={16} color="#f0b100" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;

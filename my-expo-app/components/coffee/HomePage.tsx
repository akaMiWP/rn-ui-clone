import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomePage = () => {
  return (
    <SafeAreaView>
      <Header name="Pep" />
      <QuickSelection />
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
      <View className="flex flex-row gap-x-6 px-3 py-4">
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
      <View className=" rounded-3xl bg-gray-100 p-4">
        <MaterialCommunityIcons name={icon} size={24} />
      </View>
      <Text className="text-center font-medium">{title}</Text>
    </View>
  );
};

export default HomePage;

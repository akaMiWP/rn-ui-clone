import { SafeAreaView, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Main Page
const CoffeeOrderPage = () => {
  return (
    <SafeAreaView>
      <Header />
      <ContentList />
    </SafeAreaView>
  );
};

// Header
const Header = () => {
  return (
    <View className="flex gap-y-4 px-3">
      <Text className="bg-green-200 text-3xl font-bold">Order</Text>
      <Text>Exclusive for Starbucks® Rewards members.</Text>
    </View>
  );
};

// Content
const ContentList = () => {
  return (
    <View className="mt-8 flex gap-y-4">
      <ContentItem
        title="Delivery"
        subtitle="Order your favorites that delivers near you."
        icon="bag-personal-outline"
      />

      <ContentItem
        title="In-store Pickup"
        subtitle="Save time by ordering ahead and paying on the app."
        icon="storefront-outline"
      />

      <ContentItem
        title="Order to Table"
        subtitle="Scan the QR code to order at your table and wait to be served."
        icon="coffee-outline"
      />
    </View>
  );
};

const ContentItem = ({ title, subtitle, icon }: { title: string; subtitle: string; icon: any }) => {
  return (
    <View className="flex px-3 py-2 ">
      <View className="flex flex-row items-center justify-between rounded-md border-2 border-gray-200 px-6 py-6">
        <View className="flex max-w-[85%] gap-y-2">
          <Text className="text-lg font-semibold">{title}</Text>
          <Text className="text-sm">{subtitle}</Text>
        </View>
        <MaterialCommunityIcons name={icon} size={24} />
      </View>
    </View>
  );
};

export default CoffeeOrderPage;

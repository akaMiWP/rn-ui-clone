import { SafeAreaView, Text, View } from 'react-native';

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
      <Text className="bg-green-200 text-3xl font-bold">Order</Text>;
      <Text>Exclusive for Starbucks® Rewards members.</Text>
    </View>
  );
};

// Content
const ContentList = () => {
  return (
    <View className="mt-8 flex gap-y-4">
      <ContentItem title="Delivery" subtitle="Order your favorites that delivers near you." />;
      <ContentItem
        title="In-store Pickup"
        subtitle="Save time by ordering ahead and paying on the app."
      />
      ;
      <ContentItem
        title="Order to Table"
        subtitle="Scan the QR code to order at your table and wait to be served."
      />
      ;
    </View>
  );
};

const ContentItem = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <View className="px-3 py-2">
      <View className="flex gap-y-2 rounded-md border-2 border-gray-200 px-6 py-6">
        <Text className="text-lg font-semibold">{title}</Text>
        <Text className="text-sm">{subtitle}</Text>
      </View>
    </View>
  );
};

export default CoffeeOrderPage;

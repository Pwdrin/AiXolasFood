import { View, Pressable, Text, Image } from "react-native";
import { RestaunrantsProps } from "..";

export function RestaurantItem({ item }: { item: RestaunrantsProps }) {
  return (
    <Pressable
      className="flex flex-col items-center justify-center"
      onPress={() => console.log("CLICOU NO RESTAURANTE")}
    >
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
      <Text
        className="text-sm mt-2 w-20 text-center leading-4 text-black"
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </Pressable>
  );
}

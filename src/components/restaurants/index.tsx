import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { RestaurantItem } from "./horizontal";

export interface RestaunrantsProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaunrantsProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.1.13:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }
    getFoods();
  }, []);

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

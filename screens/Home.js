import React from "react";
import { View, Text } from "react-native";
import Categories from "../components/Categories";
import Destinations from "../components/Destinations";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <View style={{ padding: "20px" }}>
      <View
        style={{
          marginTop: "20px",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "30px",
            width: "30px",
            backgroundColor: "gray",
            borderRadius: "999px",
            marginRight: "10px",
          }}
        ></View>
        <Text style={{ fontWeight: "400", fontSize: "12px" }}>
          Holla! Gianna,
        </Text>
      </View>
      <View style={{ marginTop: "20px" }}>
        <Text
          style={{ fontWeight: "800", fontSize: "25px", maxWidth: "180px" }}
        >
          Where do you want to go?
        </Text>
      </View>
      <View>
        <SearchBar />
      </View>
      <View
        style={{
          marginTop: "40px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: "20px", fontWeight: "500" }}>Countries</Text>
        <Text>See All</Text>
      </View>
      <Categories />
      <View style={{ marginTop: "20px" }}>
        <Text style={{ fontSize: "17px", fontWeight: "600" }}>Top trips</Text>
      </View>
      <View>
        <Destinations />
      </View>
    </View>
  );
}

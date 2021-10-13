import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
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
        <Text
          style={{
            fontWeight: "400",
            fontSize: "12px",
            fontFamily: "Poppins-regular",
          }}
        >
          Holla! Gianna,
        </Text>
      </View>
      <View style={{ marginTop: "20px" }}>
        <Text
          style={{
            fontWeight: "800",
            fontSize: "25px",
            maxWidth: "180px",
            fontFamily: "Poppins-regular",
          }}
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
        <Text
          style={{
            fontSize: "20px",
            fontWeight: "500",
            fontFamily: "Poppins-medium",
          }}
        >
          Countries
        </Text>
        <TouchableOpacity>
          <Text style={{ fontFamily: "Poppins-semiBold", fontSize: "12px" }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <Categories />
      <View style={{ marginTop: "20px" }}>
        <Text
          style={{
            fontSize: "17px",
            fontWeight: "600",
            fontFamily: "Poppins-medium",
          }}
        >
          Top trips
        </Text>
      </View>
      <View>
        <Destinations />
      </View>
      <View style={{ marginTop: "30px" }}>
        <Text style={{ fontFamily: "Poppins-medium", fontSize: "17px" }}>
          Special Offers
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-regular",
            fontSize: "13px",
            marginTop: "7px",
            maxWidth: "250px",
          }}
        >
          Our Special Offers have been carefully created to ensure you get the
          best experience with us.
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              marginTop: "12px",
              fontSize: "14px",
              position: "relative",
            }}
          >
            VIEW ALL OFFERS
          </Text>
          <View
            style={{
              position: "absolute",
              height: "1px",
              width: "120px",
              backgroundColor: "black",
              bottom: "-5px",
            }}
          ></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

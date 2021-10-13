import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Destinations() {
  const tours = [
    {
      image: require("../assets/images/img1.jpg"),
      name: "Serengeti",
      location: "Tanzania",
    },
    {
      image: require("../assets/images/img2.jpg"),
      name: "Great Forest",
      location: "Kenya",
    },
    {
      image: require("../assets/images/img3.jpg"),
      name: "View Point",
      location: "Uganda",
    },
    {
      image: require("../assets/images/img4.jpg"),
      name: "Archipelago",
      location: "Maasai",
    },
  ];
  return (
    <View style={{ marginTop: "20px" }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tours.map((tour) => (
          <TouchableOpacity style={{ marginRight: "20px" }}>
            <View
              style={{ height: "200px", width: "300px", position: "relative" }}
            >
              <Image
                source={tour.image}
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "cover",
                  borderRadius: "10px",
                }}
              />
              <View
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: 0,
                  left: 0,
                  backgroundColor: "#00000052",
                  borderRadius: "10px",
                }}
              ></View>
              <View
                style={{
                  position: "absolute",
                  bottom: "5px",
                  paddingLeft: "20px",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: "22px",
                    zIndex: 100,
                    fontFamily: "Poppins-medium",
                  }}
                >
                  {tour.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Ionicons
                    name="location-sharp"
                    size={18}
                    style={{ color: "white", marginRight: "5px" }}
                  />
                  <Text
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontFamily: "Poppins-regular",
                    }}
                  >
                    {tour.location}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

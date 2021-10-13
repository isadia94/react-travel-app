import React, { Component } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";

const destinations = [
  "Africa",
  "Europe",

  "SouthAmerica",
  "NorthAmerica",
  "Antarctica",
  "Oceania",
  "Asia",
];

export default class Categories extends Component {
  render() {
    return (
      <View style={{ marginTop: "20px" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {destinations.map((destination) => (
            <TouchableOpacity
              style={{
                backgroundColor: "gray",
                padding: "10px",
                marginRight: "15px",
                borderRadius: "12px",
              }}
            >
              <Text>{destination}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

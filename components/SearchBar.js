import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function SearchBar() {
  return (
    <View style={{ marginTop: "15px", flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: "20px",
            fontWeight: "bold",
            marginTop: "7px",
            fontFamily: "Poppins-thin",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: "50px",
            flexDirection: "row",
            alignItems: "center",
            marginRight: "10px",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: "10px" }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: "10px",
              marginLeft: "5px",
              backgroundColor: "white",
              padding: "3px",
              borderRadius: "100%",
              alignItems: "center",
            }}
          >
            <Ionicons name="search" size={24} />
          </View>
        )}
      />
    </View>
  );
}

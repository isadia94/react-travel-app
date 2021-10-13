import React from "react";
import { View, Text, Image } from "react-native";

export default function Splash1() {
  return (
    <View>
      <View style={{ height: "100vh", width: "100%", position: "relative" }}>
        <Image
          source={require("../assets/images/bg1.jpg")}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            backgroundColor: "#23D920",
            opacity: "0.5",
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            height: "40%",
            width: "90%",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "10px",
            backgroundColor: "white",
            opacity: "0.4",
          }}
        >
          <Text
            style={{
              padding: "20px",
              fontWeight: "700",
              color: "black",
              zIndex: 1000,
            }}
          >
            WELCOME
          </Text>
          <Text
            style={{
              padding: "20px",
              fontWeight: "900",
              color: "black",
              zIndex: 1000,
              fontSize: "35px",
              marginTop: -25,
              maxWidth: "350px",
            }}
          >
            Begin Your Adventure Today
          </Text>
        </View>
      </View>
      {/* <View>
        <Text
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Discover Great Adventure
        </Text>
        <Text style={{ textAlign: "center", marginTop: "20px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View> */}
    </View>
  );
}

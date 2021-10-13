import React from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";

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
            opacity: "0.3",
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            maxHeight: "fit-content",
            width: "95%",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "10px",
            backgroundColor: "#ffffff86",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              color: "#166EF3",
            }}
          >
            WELCOME
          </Text>
          <Text
            style={{
              fontWeight: "900",
              marginTop: "15px",
              color: "black",
              zIndex: 1,
              fontSize: "35px",

              maxWidth: "350px",
            }}
          >
            Great Adventure Awaits
          </Text>
          <Text style={{ marginTop: "15px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <TouchableOpacity
            style={{
              marginTop: "30px",
              backgroundColor: "green",
              padding: "10px",
              borderRadius: "30px",
              marginBottom: "20px",
            }}
          >
            <Text
              style={{ textAlign: "center", color: "white", fontWeight: "500" }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

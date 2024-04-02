import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.LqTtANjX} source={{
        uri: "https://d3us6o44nsrv55.cloudfront.net/63f213393dc452f253ffd90f2484dda8ec95815e/studio/static/media/cb-symbol-new-black.e6c007698becdbf89c08.png"
      }} resizeMode="cover"></ImageBackground><View style={styles.RuJYEpPh}></View><Text style={styles.cxSAngmf}>{"Ravinder Yadav"}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  LqTtANjX: {
    width: 180,
    height: 119,
    position: "absolute",
    left: 54,
    top: 39
  },
  RuJYEpPh: {
    height: 180,
    width: 336,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 7,
    top: 179
  },
  cxSAngmf: {
    width: 339,
    height: 116,
    lineHeight: 39,
    fontSize: 15,
    borderRadius: 0,
    position: "absolute",
    left: 4,
    top: 377,
    fontWeight: "900",
    letterSpacing: 34,
    fontFamily: "Roboto"
  }
});
export default Untitled4;
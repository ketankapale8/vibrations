import React, { Component } from "react";
import {
  Text,
} from 'react-native';

import { View, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const RadioButton = (props) => {
  return (
    <View>
      <Text style={{color: COLORS.pink , ...FONTS.h2}}>Select Conditions to Apply Filter</Text>
      <View
        style={{
          flexWrap: "wrap",
          height: 190,
          paddingHorizontal: 10,
          width: '100%',
          alignContent: "space-between",
        }}
      >
        {props.quefilterResult?.map((res) => {
          return (
            <View key={res} style={styles.container}>

              <TouchableOpacity
                style={{ flexDirection: "row", display: 'flex' , paddingVertical: 7 , marginLeft: 0, paddingRight: 20  }}
                onPress={() => props.handleChange(res)}
                activeOpacity={0.8}
              >
                <View style={styles.radioCircle}>
                  {props.selected === res && (
                    <View style={styles.selectedRb} />
                  )}
                </View>
                <Text style={styles.radioText}>{res}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginHorizontal: 5,
    paddingVertical: 5,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  radioText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#000000",
    fontWeight: "500",
    flexWrap: "wrap",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#000000",
  },
  result: {
    marginTop: 20,
    color: "white",
    fontWeight: "600",
    backgroundColor: "#000000",
  },
});

import React from 'react';
import { View, StyleSheet,ScrollView, Text, Dimensions } from 'react-native';
import { BarChart, LineChart } from "react-native-chart-kit";
import GenericGraph from './GenericGraph' ;
export default function App() {
var x=[{"WeeklySummary": [{"Week": 1, "Summary": {"Walk": 0, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 0}}, {"Week": 2, "Summary": {"Walk": 0, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 0}}, {"Week": 3, "Summary": {"Walk": 0, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 0}}, {"Week": 4, "Summary": {"Walk": 28, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 28}}, {"Week": 5, "Summary": {"Walk": 136, "Others": 0, "Run": 0, "Ride": 20, "Swim": 0, "Total": 156}}, {"Week": 6, "Summary": {"Walk": 91, "Others": 0, "Run": 0, "Ride": 17, "Swim": 0, "Total": 108}}, {"Week": 7, "Summary": {"Walk": 131, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 131}}, {"Week": 8, "Summary": {"Walk": 113, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 113}}, {"Week": 9, "Summary": {"Walk": 120, "Others": 0, "Run": 0, "Ride": 15, "Swim": 0, "Total": 135}}, {"Week": 10, "Summary": {"Walk": 70, "Others": 0, "Run": 0, "Ride": 70, "Swim": 0, "Total": 140}}, {"Week": 11, "Summary": {"Walk": 205, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 205}}, {"Week": 12, "Summary": {"Walk": 69, "Others": 0, "Run": 0, "Ride": 27, "Swim": 0, "Total": 96}}, {"Week": 13, "Summary": {"Walk": 41, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 41}}, {"Week": 14, "Summary": {"Walk": 80, "Others": 0, "Run": 0, "Ride": 37, "Swim": 0, "Total": 117}}, {"Week": 15, "Summary": {"Walk": 90, "Others": 0, "Run": 0, "Ride": 53, "Swim": 0, "Total": 143}}, {"Week": 16, "Summary": {"Walk": 116, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 116}}, {"Week": 17, "Summary": {"Walk": 44, "Others": 0, "Run": 0, "Ride": 47, "Swim": 0, "Total": 91}}, {"Week": 18, "Summary": {"Walk": 36, "Others": 0, "Run": 0, "Ride": 13, "Swim": 0, "Total": 49}}, {"Week": 19, "Summary": {"Walk": 63, "Others": 0, "Run": 0, "Ride": 44, "Swim": 0, "Total": 107}}, {"Week": 20, "Summary": {"Walk": 180, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 180}}, {"Week": 21, "Summary": {"Walk": 58, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 58}}, {"Week": 22, "Summary": {"Walk": 83, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 83}}, {"Week": 23, "Summary": {"Walk": 19, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 19}}, {"Week": 24, "Summary": {"Walk": 83, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 83}}, {"Week": 25, "Summary": {"Walk": 61, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 61}}, {"Week": 26, "Summary": {"Walk": 37, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 37}}, {"Week": 27, "Summary": {"Walk": 15, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 15}}, {"Week": 28, "Summary": {"Walk": 31, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 31}}, {"Week": 29, "Summary": {"Walk": 11, "Others": 0, "Run": 0, "Ride": 49, "Swim": 0, "Total": 60}}, {"Week": 30, "Summary": {"Walk": 0, "Others": 0, "Run": 0, "Ride": 40, "Swim": 0, "Total": 40}}, {"Week": 31, "Summary": {"Walk": 31, "Others": 0, "Run": 0, "Ride": 44, "Swim": 0, "Total": 75}}, {"Week": 32, "Summary": {"Walk": 27, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 27}}, {"Week": 33, "Summary": {"Walk": 46, "Others": 0, "Run": 0, "Ride": 306, "Swim": 0, "Total": 352}}, {"Week": 34, "Summary": {"Walk": 38, "Others": 30, "Run": 0, "Ride": 352, "Swim": 0, "Total": 420}}, {"Week": 35, "Summary": {"Walk": 34, "Others": 5, "Run": 0, "Ride": 380, "Swim": 0, "Total": 419}}, {"Week": 36, "Summary": {"Walk": 181, "Others": 0, "Run": 0, "Ride": 218, "Swim": 0, "Total": 399}}, {"Week": 37, "Summary": {"Walk": 44, "Others": 30, "Run": 0, "Ride": 314, "Swim": 0, "Total": 388}}, {"Week": 38, "Summary": {"Walk": 98, "Others": 10, "Run": 0, "Ride": 270, "Swim": 0, "Total": 378}}, {"Week": 39, "Summary": {"Walk": 76, "Others": 20, "Run": 0, "Ride": 148, "Swim": 0, "Total": 244}}, {"Week": 40, "Summary": {"Walk": 53, "Others": 0, "Run": 0, "Ride": 299, "Swim": 0, "Total": 352}}, {"Week": 41, "Summary": {"Walk": 81, "Others": 0, "Run": 0, "Ride": 254, "Swim": 0, "Total": 335}}, {"Week": 42, "Summary": {"Walk": 120, "Others": 0, "Run": 0, "Ride": 120, "Swim": 0, "Total": 240}}, {"Week": 43, "Summary": {"Walk": 85, "Others": 0, "Run": 0, "Ride": 193, "Swim": 0, "Total": 278}}, {"Week": 44, "Summary": {"Walk": 95, "Others": 0, "Run": 0, "Ride": 152, "Swim": 0, "Total": 247}}, {"Week": 45, "Summary": {"Walk": 69, "Others": 0, "Run": 0, "Ride": 70, "Swim": 0, "Total": 139}}, {"Week": 46, "Summary": {"Walk": 72, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 72}}, {"Week": 47, "Summary": {"Walk": 0, "Others": 0, "Run": 0, "Ride": 0, "Swim": 0, "Total": 0}}], "lastupdated": 1637537407, "id": "66320555", "picture": "https://graph.facebook.com/10226921380920199/picture?height=256&width=256", "name": "Praneetha Reddy Tirupari", "AnnualSummary": {"Walk": 3161, "Others": 95, "Run": 0, "Ride": 3552, "Swim": 0, "Total": 6808}}]
	var athlete=x[0];
  return (
	  <ScrollView>
    <View>
	<GenericGraph athlete={athlete} type="Total" />
   </View>
    <View >
	<GenericGraph athlete={athlete} type="Run" />
   </View>
    <View >
	<GenericGraph athlete={athlete} type="Walk" />
   </View>
    <View >
	<GenericGraph athlete={athlete} type="Ride" />
   </View>
    <View >
	<GenericGraph athlete={athlete} type="Swim" />
   </View>
	  </ScrollView>
  );
}
const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

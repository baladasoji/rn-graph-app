import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";

const GenericGraph = (props) => {
	var ws=props.athlete.WeeklySummary ;
	var type = props.type ;
	var wnums = ws.map(w => w.Week);
	var values=[];
	var customColors = false ;
	if (type === 'Total') {
		values = ws.map(w => w.Summary.Total);
		customColors=true;
	}
	else if (type === 'Run')
		values = ws.map(w => w.Summary.Run);
	else if (type === 'Ride')
		values = ws.map(w => w.Summary.Ride);
	else if (type === 'Walk')
		values = ws.map(w => w.Summary.Walk);
	else if (type === 'Swim')
		values = ws.map(w => w.Summary.Swim);
	else if (type === 'Other')
		values = ws.map(w => w.Summary.Other);

	var colors = values.map(value => (opacity=1) => {
		if (value < 50 )
			return '#AF5555';
		else if (value < 100 )
			return '#55AF55';
		else if (value > 100 )
			return '#5555AF';
	});
	var screenWidth=Dimensions.get('window').width - 10
	var totaldata={
          datasets: [{ data: values ,
	  colors : colors
	  }],
        } ;
const webChartConfig = {
	backgroundColor:"transparent",
	backgroundGradientTo:"#B0B0B0",
	backgroundGradientToOpacity:0.5,
	backgroundGradientFrom:"#A0A0A0",
	backgroundGradientFromOpacity:0.2,
	decimalPlaces: 0,
	color: (opacity=1) => `#111111`,
	labelColor: (opacity = 0.5) => `rgba(2, 2, 2, ${opacity})`,
	barPercentage: 0.15,
	barRadius:2,
	fillShadowGradient: '#111011', // THIS
	fillShadowGradientOpacity: 1, // THIS
	verticalLabelRotation: 30,
	horizontalLabelRotation: 30
} ;

  return (
    <View>
      <Text style={{ fontSize: 28, textAlign: 'center' }}>  {type} </Text>
      <BarChart
        data={totaldata}
        width={Dimensions.get('window').width - 20}
        height={100}
       chartConfig={ webChartConfig }
	withCustomBarColorFromData={customColors} 
	  showBarTops={false}
	  showValuesOnTopOfBars={false}
	  withInnerLines={false}
	  fromZero={true}
	  flatColor={true}
	  />
   </View>
  );
}
const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default GenericGraph ;

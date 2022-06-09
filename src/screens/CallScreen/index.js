import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CallActionBox from "../../components/CallActionBox"

const CallScreen = () => {
	return (
		<View style={styles.page}>
			<View style={styles.cameraPreview}/>
			<CallActionBox />
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: "#7b4e88"
	},
	cameraPreview: {
		height: 100,
		width: 100,
		backgroundColor: '#ffff6e',
		position: "absolute",
		right: 10,
		top: 100,
		height: 150,
		borderRadius: 10
	}
})

export default CallScreen
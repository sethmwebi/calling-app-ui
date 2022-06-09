import { View, Text, StyleSheet, Pressable } from "react-native";
import CallActionBox from "../../components/CallActionBox"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation, useRoute } from "@react-navigation/core"

const CallingScreen = () => {
	const navigation = useNavigation()
	const route = useRoute()

	const user = route?.params?.user;

	const goBack = () => {
		navigation.goBack()
	}
	return (
		<View style={styles.page}>
			<View style={styles.cameraPreview}>
				<Pressable onPress={goBack} style={styles.backButton}>
				<Ionicons name="chevron-back" color="white" size={25}/>
				</Pressable>
				<Text style={styles.name}>{user?.user_display_name}</Text>
				<Text style={styles.phoneNumber}>ringing +254 796 547 997</Text>
			</View>
			<CallActionBox />
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		height: "100%",
		backgroundColor: "#7b4e88",
	},
	cameraPreview: {
		flex: 1,
		alignItems: "center",
		paddingTop: 10,
		paddingHorizontal: 10,
	},
	name: {
		fontSize: 30,
		fontWeight: "bold",
		color: "white",
		marginTop: 50,
		marginBottom: 15,
	},
	phoneNumber: {
		fontSize: 20,
		color: "white",
	},
	backButton: {
		position: "absolute",
		top: 50,
		left: 10,
		zIndex: 10
	}
});

export default CallingScreen;

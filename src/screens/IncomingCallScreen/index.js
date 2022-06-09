import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Pressable,
} from "react-native";
import bg from "../../../assets/images/ios.jpeg";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";

const IncomingCallScreen = () => {

	const onDecline = () => {
		console.log("Decline")
	}

	const onAccept = () => {
		console.log("Accept")
	}
	return (
		<ImageBackground source={bg} style={styles.bg} resizeMode="cover">
			<Text style={styles.name}>Jessica</Text>
			<Text style={styles.phoneNumber}>Whatsapp Video...</Text>

			<View style={[styles.row, { marginTop: "auto" }]}>
				<View style={styles.iconContainer}>
					<Ionicons name="alarm" color="white" size={30} />
					<Text style={styles.iconText}>Remind Me</Text>
				</View>
				<View style={styles.iconContainer}>
					<Entypo name="message" color="white" size={30} />
					<Text style={styles.iconText}>Message</Text>
				</View>
			</View>

			<View style={styles.row}>
				{/*Decline*/}
				<Pressable onPress={onDecline} style={styles.iconContainer}>
					<View style={styles.iconButtonContainer}>
						<Feather name="x" color="white" size={40} />
					</View>
					<Text style={styles.iconText}>Decline</Text>
				</Pressable>
				{/*Accept*/}
				<Pressable onPress={onAccept} style={styles.iconContainer}>
					<View
						style={[styles.iconButtonContainer, { backgroundColor: "#2e7bff" }]}
					>
						<Feather name="check" color="white" size={40} />
					</View>
					<Text style={styles.iconText}>Accept</Text>
				</Pressable>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	root: {
		height: "100%",
	},
	name: {
		fontSize: 30,
		fontWeight: "bold",
		color: "white",
		marginTop: 100,
		marginBottom: 15,
	},
	phoneNumber: {
		fontSize: 20,
		color: "white",
	},
	bg: {
		flex: 1,
		alignItems: "center",
		padding: 10,
		paddingBottom: 50
	},
	row: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-around",
	},
	iconContainer: {
		alignItems: "center",
		marginVertical: 20,
	},
	iconText: {
		color: "white",
		marginTop: 10,
	},
	iconButtonContainer: {
		backgroundColor: "red",
		padding: 10,
		borderRadius: 50,
		margin: 10,
	},
});
export default IncomingCallScreen;

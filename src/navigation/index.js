import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ContactsScreen from "../screens/ContactsScreen";
import CallingScreen from "../screens/CallingScreen";
import IncomingCallScreen from "../screens/IncomingCallScreen";
import CallScreen from "../screens/CallScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Contacts"
					component={ContactsScreen}
					options={{ headerTitleAlign: "center" }}
				/>
				<Stack.Group screenOptions={{headerShown: false}}>
					<Stack.Screen
						name="Call"
						component={CallScreen}
					/>
					<Stack.Screen
						name="Calling"
						component={CallingScreen}
					/>
					<Stack.Screen
						name="IncomingCall"
						component={IncomingCallScreen}
					/>
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

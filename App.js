import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./src/navigation"

export default function App() {
  return (
    <>
      <StatusBar style={"dark"} />
      <Navigation />
    </>
  );
}

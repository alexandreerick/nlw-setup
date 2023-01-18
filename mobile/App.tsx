import { StatusBar } from "react-native";
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from "@expo-google-fonts/inter";
import { Loading } from "./src/components/Loading";
import Home from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
    "Inter-ExtraBold": Inter_800ExtraBold,
    "Inter-SemiBold": Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Home />
      <StatusBar
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent
      />
    </>
  );
}

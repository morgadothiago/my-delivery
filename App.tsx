import React, { useEffect, useState } from "react";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import MainScreen from "./src/screen/Main";

import Loading from "./src/components/Loading";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screen/Main";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar style="light" translucent />
      {isLoading ? <HomeScreen /> : <Loading />}
    </>
  );
}

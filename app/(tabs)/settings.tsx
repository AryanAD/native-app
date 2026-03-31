import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Settings = () => {
  return (
    <SafeAreaView className="bg-background p-1 flex-1">
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;

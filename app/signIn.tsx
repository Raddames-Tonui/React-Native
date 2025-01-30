import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handlelogin = () => {};
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="h-3/5 w-full"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-center uppercase text-black-200 text-base font-rubik-semibold">
            Welcome to Aora Estates
          </Text>
          <Text className="text-center mt-3 font-rubik-extrabold text-3xl text-black-300 ">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <TouchableOpacity
            onPress={handlelogin}
            className="shadow-md w-full flex flex-row items-center justify-center bg-white rounded-lg h-12 mt-12"
          >
            <View className="flex flex-row items-center gap-x-2">
              <Image
                source={icons.google}
                className="h-5 w-5 "
                resizeMode="contain"
              />
              <Text className="text-xl text-black-300 font-rubik-medium">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

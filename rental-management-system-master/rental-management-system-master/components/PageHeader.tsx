import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { View, StyleSheet } from "react-native";
import { primaryBlue } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    height: 80,
    backgroundColor: primaryBlue,
  },
  title: {
    display: "flex",
    alignItems: "center",
    fontSize: 25,
    marginLeft: 35,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export function PageHeader({ pageTitle }) {
  const navigation = useNavigation();
  const navigateBackHandler = () => {
    navigation.goBack();
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={navigateBackHandler}>
          <Ionicons name="arrow-back" size={40} />
        </TouchableOpacity>

        <ThemedText style={styles.title}>{pageTitle}</ThemedText>
      </View>

      <View style={{ display: "flex", justifyContent: "space-around" }}>
        <Ionicons name="logo-xing" size={50} />
      </View>
    </ThemedView>
  );
}

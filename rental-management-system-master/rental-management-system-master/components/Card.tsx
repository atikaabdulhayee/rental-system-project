import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { primaryBlue, primaryRed } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
useNavigation;

export function Card({ isAsset }) {
  const navigation = useNavigation();
  const subHeadingType = "House";
  const rented = true;
  function onDeleteHandler() {
    console.log("Delete ");
  }
  function onCardHandler() {
    console.log("Open card");
    isAsset
      ? navigation.navigate("forms/assetForm", { id: 86 })
      : navigation.navigate("forms/tenantForm", { id: 86 });
  }

  return (
    <TouchableOpacity onPress={onCardHandler}>
      <View style={styles.CardContainer}>
        <View style={styles.ImageContainer}>
          <Image source={require("../assets/images/react-logo.png")} />
        </View>

        <View style={styles.DataContainer}>
          <View style={styles.HeadingContainer}>
            <Text style={styles.Heading}>
              {isAsset ? "Asset 42771" : "Dorris Hyatt"}
            </Text>
            <TouchableOpacity onPress={onDeleteHandler}>
              <Ionicons name="trash" size={20} style={styles.DeleteIcon} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.SubHeading}>
              {isAsset
                ? `Monthly ${subHeadingType && ` - ${subHeadingType}`}`
                : "dorris119@gmail.com"}
            </Text>
          </View>

          <View>
            <Text style={styles.Text}>Canada, Manitoba, Winnipeg</Text>
            <Text style={styles.Text}>123456, 1157, McLeod Ave</Text>
          </View>

          <View style={styles.HighlightedTextContainer}>
            <View
              style={[
                styles.HighlightedText,
                { backgroundColor: primaryBlue, borderRadius: 5 },
              ]}
            >
              <Text style={styles.Text}>
                {isAsset ? "$ 2000.00" : "+921234657898"}
              </Text>
            </View>
            {isAsset && (
              <View
                style={[
                  styles.HighlightedText,
                  {
                    backgroundColor: `${rented ? "yellow" : primaryBlue}`,
                    borderRadius: 50,
                  },
                ]}
              >
                <Text style={styles.Text}>Rented</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  CardContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
  },
  ImageContainer: {
    flex: 1,
  },
  DataContainer: {
    flex: 2,
    flexDirection: "column",
  },
  HeadingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Heading: {
    fontWeight: 500,
    fontSize: 26,
  },
  DeleteIcon: {
    color: primaryRed,
    marginTop: 5,
    paddingRight: 10,
  },
  SubHeading: {
    fontWeight: 400,
    fontSize: 22,
  },
  Text: {
    fontSize: 14,
  },
  HighlightedTextContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 15,
  },
  HighlightedText: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

import { backgroundGray, primaryBlue } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function FilterAssets() {
  return (
    <View style={styles.Container}>
      <TouchableOpacity>
        <View style={[styles.FilterButton, { backgroundColor: primaryBlue }]}>
          Past Rental
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.FilterButton}>Active Rentals</View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.FilterButton}>Expenses</View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.FilterButton}>Payments</View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: backgroundGray,
    height: 50,
    alignItems: "center",
    borderRadius: 14,
  },
  FilterButton: {
    padding: 8,
    borderRadius: 18,
  },
});

import {
  primaryBlue,
  primaryWhite,
  primaryYellow,
  shadowGray,
} from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function RentalDetailsCard() {
  return (
    <View style={styles.Container}>
      <View style={styles.ContainerColumn}>
        <View>
          <Text style={{ fontSize: 21, fontWeight: 600, marginBottom: 3 }}>
            Ford Mustang V8
          </Text>
          <Text style={{ color: primaryBlue, fontWeight: 600 }}>$300.00</Text>
          <Text style={{ fontWeight: 600 }}>Monthly</Text>
          <Text style={{ fontWeight: 600 }}>01/01/23 - 01/01/24</Text>
        </View>

        <View style={{ marginBottom: 60 }}>
          <View style={styles.PhoneContainer}>
            <Ionicons name="call" size={10} />
            <Text>{` +9231654987`}</Text>
          </View>
          <TouchableOpacity>
            <View
              style={[
                styles.ButtonContainer,
                { backgroundColor: primaryYellow },
              ]}
            >
              <Text style={styles.ButtonText}>Add Expense</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ContainerColumn}>
        <View>
          <Text
            style={[styles.AmountText, { marginBottom: 5, fontWeight: 500 }]}
          >
            * 20% increment/6 months
          </Text>

          <View style={styles.AmountContainer}>
            <Text style={styles.AmountText}>Total Rent: </Text>
            <Text style={styles.AmountText}>$3600.00</Text>
          </View>

          <View style={styles.AmountContainer}>
            <Text style={styles.AmountText}>Paid: </Text>
            <Text style={styles.AmountText}>$3600.00</Text>
          </View>

          <View style={styles.AmountContainer}>
            <Text style={styles.AmountText}>Advance: </Text>
            <Text style={styles.AmountText}>$500.00</Text>
          </View>

          <View style={styles.AmountContainer}>
            <Text style={styles.AmountText}>Due: </Text>
            <Text style={styles.AmountText}>$0.0</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <View
              style={[styles.ButtonContainer, { backgroundColor: primaryBlue }]}
            >
              <Text style={styles.ButtonText}>Add Payment</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: primaryWhite,
    height: 190,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: shadowGray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 3,
  },
  ContainerColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  PhoneContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 6,
    marginTop: 15,
  },
  ButtonContainer: {
    padding: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
  ButtonText: {
    display: "flex",
    justifyContent: "center",
    fontWeight: 600,
  },
  AmountContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  AmountText: {
    fontSize: 13,
    fontWeight: 400,
  },
});

import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Switch,
} from "react-native";
import { PageHeader } from "../PageHeader";
import DropDownPicker from "react-native-dropdown-picker";

const AssetForm = () => {
  const [assetName, setAssetName] = useState("");
  const [assetAddress, setAssetAddress] = useState("");
  const [assetDesc, setAssetDesc] = useState("");
  const [rentalAmount, setRentalAmount] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  // Asset Dropdown
  const [assetTypeItems, setAssetTypeItems] = useState([
    { label: "House", value: "house" },
    { label: "Condo", value: "condo" },
    { label: "Apartment", value: "apartment" },
  ]);
  const [assetTypeOpen, setAssetTypeOpen] = useState(false);
  const [assetTypeValue, setAssetTypeValue] = useState(null);

  //Status Dropdown
  const [statusItems, setStatusItems] = useState([
    { label: "Rented", value: "rented" },
    { label: "Available", value: "available" },
  ]);
  const [statusOpen, setStatusOpen] = useState(false);
  const [statusValue, setStatusValue] = useState(null);

  //Rental Period Dropdown
  const [rentalPeriodItems, setRentalPeriodItems] = useState([
    { label: "Weekly", value: "weekly" },
    { label: "Bi-Weekly", value: "biWeekly" },
    { label: "Monthly", value: "biMonthly" },
    { label: "Annually", value: "annually" },
  ]);
  const [rentalPeriodOpen, setRentalPeriodOpen] = useState(false);
  const [rentalPeriodValue, setRentalPeriodValue] = useState(null);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleSubmit = () => {};

  return (
    <ScrollView>
      <PageHeader pageTitle="Add/Update Assets" />

      <View style={styles.container}>
        <Text style={styles.label}>Type</Text>
        <DropDownPicker
          open={assetTypeOpen}
          value={assetTypeValue}
          items={assetTypeItems}
          setOpen={setAssetTypeOpen}
          setValue={setAssetTypeValue}
          setItems={setAssetTypeItems}
          placeholder="Select a type"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          dropDownStyle={styles.dropdownStyle}
          labelStyle={styles.labelStyle}
          arrowStyle={styles.arrowStyle}
        />

        <Text style={styles.label}>Asset Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your asset's name"
          value={assetName}
          onChangeText={setAssetName}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the address"
          value={assetAddress}
          onChangeText={setAssetAddress}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Please add description"
          value={assetDesc}
          onChangeText={setAssetDesc}
          multiline
          numberOfLines={50}
        />

        <Text style={styles.label}>Status</Text>
        <DropDownPicker
          open={statusOpen}
          value={statusValue}
          items={statusItems}
          setOpen={setStatusOpen}
          setValue={setStatusValue}
          setItems={setStatusItems}
          placeholder="Select Status"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          dropDownStyle={styles.dropdownStyle}
          labelStyle={styles.labelStyle}
          arrowStyle={styles.arrowStyle}
        />

        <Text style={styles.label}>Rental Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the rental amount"
          value={rentalAmount}
          onChangeText={setRentalAmount}
        />

        <Text style={styles.label}>Rental Period</Text>
        <DropDownPicker
          open={rentalPeriodOpen}
          value={rentalPeriodValue}
          items={rentalPeriodItems}
          setOpen={setRentalPeriodOpen}
          setValue={setRentalPeriodValue}
          setItems={setRentalPeriodItems}
          placeholder="Select Rental Period"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          dropDownStyle={styles.dropdownStyle}
          labelStyle={styles.labelStyle}
          arrowStyle={styles.arrowStyle}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.label}>Active</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    paddingBottom: 10,
  },
  dropdown: {
    borderColor: "gray",
    borderWidth: 1,
  },
  dropdownStyle: {
    backgroundColor: "#fafafa",
  },
  labelStyle: {
    fontSize: 16,
  },
  arrowStyle: {
    width: 20,
    height: 20,
  },

  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default AssetForm;

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
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { primaryBlue } from "@/constants/Colors";

const TenantForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [assetAddress, setAssetAddress] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isReference, setIsReference] = useState(false);
  const [referenceName, setReferenceName] = useState("");
  const [referenceMobile, setReferenceMobile] = useState("");
  const [referenceAddress, setReferenceAddress] = useState("");

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const referenceButtonHandler = () =>
    setIsReference((previousState) => !previousState);
  const handleSubmit = () => {};

  return (
    <ScrollView>
      <PageHeader pageTitle="Add/Update Assets" />

      <View style={styles.container}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your mobile number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          value={emailAddress}
          onChangeText={setEmailAddress}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={[styles.input, { height: 70 }]}
          placeholder="Enter the address"
          value={assetAddress}
          onChangeText={setAssetAddress}
          multiline
          numberOfLines={50}
        />

        <View style={styles.toggle}>
          <Text style={styles.label}>Active</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <TouchableOpacity onPress={referenceButtonHandler}>
          <View style={styles.reference}>
            <Text style={styles.label}>Reference</Text>
            <Ionicons
              style={{ paddingLeft: 10 }}
              name={
                isReference ? "remove-circle-outline" : "add-circle-outline"
              }
              size={25}
            />
          </View>
        </TouchableOpacity>

        {isReference && (
          <View style={styles.container}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the Reference Name"
              value={referenceName}
              onChangeText={setReferenceName}
            />

            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter mobile number"
              value={referenceMobile}
              onChangeText={setReferenceMobile}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Address"
              value={referenceAddress}
              onChangeText={setReferenceAddress}
            />
          </View>
        )}

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
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
  toggle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reference: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
    borderTopWidth: 1,
  },
});

export default TenantForm;

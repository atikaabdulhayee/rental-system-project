import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { ScrollView } from "react-native-gesture-handler";
import { AddButton } from "@/components/AddButton";

export default function AssetView() {
  return (
    <ScrollView>
      <PageHeader pageTitle="Assets" />
      <Card isAsset={true} />
      <Card isAsset={true} />
      <Card isAsset={true} />
      <AddButton label="Add Asset" isAsset={true} />
    </ScrollView>
  );
}

import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AddButton } from "@/components/AddButton";
import { ScrollView } from "react-native";

export default function TenantView() {
  return (
    <ScrollView>
      <PageHeader pageTitle="Tenants" />
      <Card asset={false} />
      <Card asset={false} />
      <Card asset={false} />
      <AddButton label="Add Tenant" isAsset={false} />
    </ScrollView>
  );
}

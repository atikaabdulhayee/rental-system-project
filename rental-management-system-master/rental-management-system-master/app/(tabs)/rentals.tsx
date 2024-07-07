import { DetailsBar } from "@/components/DetailsBar";
import { FilterAssets } from "@/components/FilterAssets";
import { PageHeader } from "@/components/PageHeader";
import { RentalDetailsCard } from "@/components/RentalDetailsCard";
import { SearchBar } from "@/components/SearchBar";
import { ScrollView } from "react-native";

const RentalView = () => {
  return (
    <ScrollView>
      <PageHeader pageTitle="Home" />
      <DetailsBar />
      <FilterAssets />
      <SearchBar />
      <RentalDetailsCard />
      <RentalDetailsCard />
    </ScrollView>
  );
};

export default RentalView;

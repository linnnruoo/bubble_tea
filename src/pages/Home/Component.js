import React from "react";
import Spinner from "../../components/Spinner";
import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";
import LocationCard from "../../components/LocationCard";

const HomeComponent = ({ locations, loading }) => {
  if (loading) return <Spinner />;

  const renderLocations = () => {
    return locations.map((location, index) => {
      return (
        <GridItem key={index}>
          <LocationCard location={location} key={location.id} />
        </GridItem>
      );
    });
  };

  return <GridContainer>{renderLocations()}</GridContainer>;
};

export default HomeComponent;

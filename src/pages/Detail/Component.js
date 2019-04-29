import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Button } from "@material-ui/core";
import Spinner from "../../components/Spinner";
import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";
import DealCard from "../../components/DealCard";

const DetailComponent = ({ deals, loading }) => {
  if (loading) return <Spinner />;

  const renderDeals = () => {
    return deals.map((deal, index) => {
      return (
        <GridItem key={index}>
          <DealCard deal={deal} />
        </GridItem>
      );
    });
  };

  return (
    <>
      <Button href="/">
        <HomeIcon />
        Home
      </Button>
      <GridContainer>{renderDeals()}</GridContainer>
    </>
  );
};

export default DetailComponent;

import React from "react";
import styled from "styled-components";
import { Autocomplete, TextField } from "@mui/material";

const Shell = () => {
  return (
    <ShellStyledDiv>
      <Autocomplete
        id="item-locator-1"
        options={genericHouseholdItems}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Items ..." />}
      />
      IN
      <Autocomplete
        id="item-locator-1"
        options={genericHouseholdItems}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Items ..." />}
      />
    </ShellStyledDiv>
  );
};

export const ShellStyledDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const genericHouseholdItems = [
  { label: "Black Container", itemDepth: 0 },
  { label: "Small tube end sprayer", itemDepth: 1 },
  { label: "Fuel Canister", itemDepth: 1 },
  { label: "Blue Container", itemDepth: 2 },
  { label: "Dog Food - Chow Expert", itemDepth: 3 },
  { label: "Dog poop bags", itemDepth: 3 },
];

export default Shell;

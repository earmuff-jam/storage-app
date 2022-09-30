import React, { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../config/supabaseClient";
import { Autocomplete, TextField } from "@mui/material";

/**
 * CONSTANTS THAT NEED TO BE MOVED OUT
 */
export const TABLE_NAME = "storage";

const useItems = () => {
  const [error, setError] = useState(null);
  const [genericItems, setGenericItems] = useState([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from(TABLE_NAME).select(); // no args to pass all records

    if (error) {
      setError(error);
      setGenericItems([]);
    }

    if (data) {
      // filter the response from the api here
      const genericItems = data.map((v) => {
        const { depth: _, ...genericItems } = v;
        return genericItems;
      });
      setGenericItems(genericItems);
      setError(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [error, genericItems];
};

const Shell = () => {
  const [error, genericItems] = useItems();

  console.log(genericItems, error);

  return (
    <ShellStyledDiv>
      <Autocomplete
        id="item-locator-1"
        options={genericItems.map((v) => v.name)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Items ..." />}
      />
      IN
      <Autocomplete
        id="item-locator-2"
        options={genericItems.map((v) => v.name)}
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

export default Shell;

import { Link } from "react-router-dom";
import { ImageSearch } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { top500Collections } from "../../../mockData";

import { useStyles } from "./styles";

const Search = ({ searchResults, handleCollectionSearch }) => {
  const classes = useStyles();

  const handleCollectionChange = (e, value) => {
    if (
      top500Collections.find((item) => item.name === value) &&
      searchResults.name !== value
    ) {
      const newValue = top500Collections.filter((item) => item.name === value);
      handleCollectionSearch(newValue[0].contract, newValue[0].name);
    }
  };

  const menuItems = [
    { url: "/opensea-x/assets", label: "Portfolio" },
    { url: "/opensea-x/snipe", label: "Snipe" },
    { url: "/opensea-x/buy", label: "Buy" },
    { url: "/opensea-x/sell", label: "Sell" },
    { url: "/opensea-x/auction", label: "Auction" },
    { url: "/opensea-x/offer", label: "Bid" },
  ];

  return (
    <Box className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8} lg={6}>
          {menuItems.map((item) => (
            <Link to={item.url} key={item.url}>
              <Button
                variant='outlined'
                color='secondary'
                sx={{ p: 0.9, borderRadius: "0 !important", ml: 1 }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Grid>
        <Grid item xs={12} md={4} lg={6} align='right'>
          <Autocomplete
            disablePortal
            filterSelectedOptions
            clearOnBlur
            options={top500Collections}
            onInputChange={handleCollectionChange}
            getOptionLabel={(option) => option.name}
            renderOption={({ key, ...props }, option) => {
              return (
                <Link
                  to={`/opensea-x/collection/${option.name
                    .replace(/\s/g, "-")
                    .toLocaleLowerCase()}`}
                  key={option.contract}
                >
                  <li {...props}>{option.name}</li>
                </Link>
              );
            }}
            renderInput={(params, option) => (
              <TextField
                {...params}
                type='search'
                className={classes.textField}
                placeholder='Search collection ...'
                size='small'
                InputProps={{
                  ...params.InputProps,
                  type: "text",
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{ position: "absolute", right: 8 }}
                      onClick={(e, v) => console.log(v)}
                    >
                      <ImageSearch />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;

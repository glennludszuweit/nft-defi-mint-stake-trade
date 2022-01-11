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

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
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
        <Grid item xs={12} md={4} align='right'>
          <Link to='/opensea-x/assets'>
            <Button
              variant='outlined'
              color='secondary'
              sx={{ p: 1, borderRadius: "0 !important", mr: 2 }}
            >
              Assets
            </Button>
          </Link>
          <Link to='/opensea-x/trade'>
            <Button
              variant='outlined'
              color='secondary'
              sx={{ p: 1, borderRadius: "0 !important" }}
            >
              Trade
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;

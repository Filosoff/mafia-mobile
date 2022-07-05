import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import PlayersItem from "./Players/PlayersItem";
import { getPlayersNames } from "../games/statsSelectors";

export default function Profile() {
  const [name, setName] = useState(window.localStorage.getItem('profile-name') || "");

  useEffect(() => {
    window.localStorage.setItem('profile-name', name);
  }, [name]);

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
  };

  const getDropdown = () => (
    <Box sx={{ width: '80%', margin: 'auto', mt: 2, }}>
      <Typography variant="h5">Оросоор ярьдаг хүн байна уу?</Typography>
      <Divider sx={{ mt: 1, mb: 2 }}/>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          value={name}
          label="Age"
          onChange={handleChange}
        >
          {getPlayersNames().map(name => <MenuItem key={name} value={name}>{name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  )

  if (!name) {
    return getDropdown();
  }

  return (
    <React.Fragment>
      <Grid container justifyContent="space-between" sx={{ p: 2, alignItems: 'center'}}>
        <Grid item xs={4}>
          <Typography variant="h5">{name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ textAlign: 'right', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setName("")}>Это же не я!</Typography>
        </Grid>
      </Grid>
      <Divider/>
      <PlayersItem name={name}/>
    </React.Fragment>
  )
}
import { Divider, Grid, ListItem, Typography } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  value: string | number | undefined;
  selected?: boolean | undefined;
  suppressDivider?: boolean | undefined;
}

export default function StatItem({ label, value, selected, suppressDivider }: Props) {
  return (
    <React.Fragment>
      <ListItem selected={selected}>
        <Grid container justifyContent="space-between">
          <Grid item xs={6}>
            <Typography>{label}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ textAlign: 'right' }}>{value}</Typography>
          </Grid>
        </Grid>
      </ListItem>
      { !suppressDivider && <Divider/>}
    </React.Fragment>
  )
}
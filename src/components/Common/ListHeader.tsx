import { Divider, ListItem, Typography } from "@mui/material";
import React from "react";

interface Props {
  title: string;
}

export default function ListHeader({ title }: Props) {
  return (
    <React.Fragment>
      <ListItem><Typography variant="h5">{title}</Typography></ListItem>
      <Divider/>
    </React.Fragment>
  )
}
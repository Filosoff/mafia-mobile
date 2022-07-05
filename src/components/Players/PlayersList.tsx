import React from "react";
import {
  Divider,
  List,
  ListItemButton,
} from "@mui/material";
import { getPlayersList } from "../../games/statsSelectors";
import StatItem from "../Common/StatItem";
import { SetPageType } from "../../utils/types";

const playersList = getPlayersList();

interface Props {
  setPageParam: SetPageType;
}

export default function PlayersList({ setPageParam } : Props ) {
  return (
    <div className="stats">
      <List>
        { playersList.map((plr, index) => (
          <React.Fragment key={plr.name}>
            <ListItemButton onClick={() => setPageParam(undefined, plr.name)}>
              <StatItem label={`${index+1}. ${plr.name}`} value={plr.rating || '-'} suppressDivider={true} />
            </ListItemButton>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  )
}
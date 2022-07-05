import React from "react";
import {
  Divider,
  List,
  ListItemButton,
} from "@mui/material";
import { getMeetingsDates } from "../../games/statsSelectors";
import StatItem from "../Common/StatItem";
import { convertDateToNice, getFromNow } from "../../utils/date";
import { SetPageType } from "../../utils/types";

const meetings = getMeetingsDates().reverse();

interface Props {
  setPageParam: SetPageType;
}

export default function MeetingsList({ setPageParam }: Props) {
  return (
    <div className="stats">
      <List>
        {meetings.map(date => (
          <React.Fragment key={date}>
            <ListItemButton onClick={() => setPageParam(undefined, date)}>
              <StatItem label={convertDateToNice(date)} value={getFromNow(date)} suppressDivider={true}/>
            </ListItemButton>
            <Divider/>
          </React.Fragment>
        ))}
      </List>
    </div>
  )
}
import React, { useEffect, useState } from 'react';
import { getMeetingStats } from "../../games/statsSelectors";
import { Divider, List, ListItemButton, } from "@mui/material";
import StatItem from "../Common/StatItem";
import { convertDateToNice, getFromNow } from "../../utils/date";
import { calcPercent, getGamesCountWord, roleToText } from "../../utils/utils";
import ListHeader from "../Common/ListHeader";
import { SetPageType } from "../../utils/types";
import { Pages } from "../../enum/pages";

interface Props {
  date: string;
  setPageParam: SetPageType;
}

export default function MeetingsItem({ date, setPageParam }: Props) {
  const [stats, setStats] = useState(getMeetingStats(date));
  useEffect(() => {
    setStats(getMeetingStats(date));
  }, [date])

  return (
    <React.Fragment>
      <List>
        <ListHeader title={`Встреча ${convertDateToNice(date)}`}/>
        <StatItem label="Встречались" value={getFromNow(date)}/>
        <StatItem label="Сыграли" value={`${stats.count} ${getGamesCountWord(stats.count)}`}/>
        <StatItem label="Побед мафии" value={`${stats.mafiaWin} ${calcPercent(stats.count, stats.mafiaWin)}`}/>
        <StatItem label="Побед города" value={`${stats.cityWin} ${calcPercent(stats.count, stats.cityWin)}`}/>
      </List>
      <List>
        <ListHeader title="Участники (Побед / Сыграно)"/>
        {
          Object
            .keys(stats.players)
            .sort()
            .map(plrName => (
              <React.Fragment key={plrName}>
                <ListItemButton onClick={() => setPageParam(Pages.players, plrName)}>
                  <StatItem
                    label={plrName}
                    value={`${stats.players[plrName].win} / ${stats.players[plrName].total} ${calcPercent(stats.players[plrName].total, stats.players[plrName].win)}`}
                    suppressDivider={true}
                  />
                </ListItemButton>
                <Divider/>
              </React.Fragment>
            ))
        }
      </List>
      {stats.games.map((game, index) => (
        <List key={`game-${index}`}>
          <ListHeader title={`Игра ${index + 1} / ${roleToText(game.win)}`}/>
          {game.players.sort((a, b) => (a.role - b.role)).map(plr => (
            <StatItem label={`${plr.name}`} value={roleToText(plr.role)} selected={plr.win} key={plr.name}/>
          ))}
        </List>
      ))}
    </React.Fragment>
  )

}
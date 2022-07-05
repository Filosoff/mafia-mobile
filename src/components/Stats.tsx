import React from "react";
import {
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { getGamesStats, getMeetingsStats, getPlayersStats } from "../games/statsSelectors";
import StatItem from "./Common/StatItem";
import { getFromNow } from "../utils/date";
import { calcPercent } from "../utils/utils";

const gamesLimit = 10;
const meetings = getMeetingsStats();
const games = getGamesStats();
const players = getPlayersStats(gamesLimit);

export default function Stats() {

  return (
    <div className="stats">
      <List>
        <ListItem><Typography variant="h6">Встречи</Typography></ListItem>
        <Divider />
        <StatItem label="Всего" value={meetings.count} />
        <StatItem label="Последняя" value={getFromNow(meetings.lastDate)} />
      </List>
      <List>
        <ListItem><Typography variant="h6">Игры</Typography></ListItem>
        <Divider />
        <StatItem label="Всего" value={games.count} />
        <StatItem label="Побед мафии" value={`${games.mafiaWin} ${calcPercent(games.count, games.mafiaWin)}`} />
        <StatItem label="Побед мирных" value={`${games.cityWin} ${calcPercent(games.count, games.cityWin)}`} />
      </List>
      <List>
        <ListItem><Typography variant="h6">Игроки (более {gamesLimit} игр сыграно)</Typography></ListItem>
        <Divider />
        <StatItem label="Всего" value={players.count} />
        <StatItem label="Лучший" value={players.maxRating.name} />
      </List>
      <List>
        <StatItem label="Частый гость" value={players.maxGames.name} />
        <StatItem label="Редко заходит" value={players.minGames.name} />
      </List>
      <List>
        <StatItem label="Самый мирный" value={players.maxCitizen.name} />
        <StatItem label="Грозный мафиозо" value={players.maxMob.name} />
        <StatItem label="Справедливый шериф" value={players.maxSheriff.name} />
        <StatItem label="Могущественный дон" value={players.maxDon.name} />
      </List>
    </div>
  )
}
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { getPlayerStats } from "../../games/statsSelectors";
import { List, } from "@mui/material";
import StatItem from "../Common/StatItem";
import { getFromNow } from "../../utils/date";
import { calcPercent, roleToText } from "../../utils/utils";
import ListHeader from "../Common/ListHeader";
import { gamesLog } from "../../games/log";

interface Props {
  name: string;
}

export default function PlayersItem({ name }: Props) {
  const [stats, setStats] = useState(getPlayerStats(name));
  useEffect(() => {
    setStats(getPlayerStats(name));
  }, [name])

  return (
    <React.Fragment>
      <List>
        <StatItem label="Последняя игра" value={getFromNow(stats.lastGame)}/>
        <StatItem label="Рейтинг" value={stats.rating || '-'}/>
      </List>

      {stats.rating > 0 && (
        <Chart
          chartType="LineChart"
          data={[
            [
              "Game",
              "Rating",
            ],
            ...stats.ratingHistory.filter(data => data.value).map(data => ([data.game, data.value])),
          ]}
          width="100%"
          height="300px"
          options={{
            curveType: "function",
            legend: { position: 'none' },
            'chartArea': {'width': '85%', 'height': '80%', left: '10%'},
            vAxis: {
              viewWindowMode: 'explicit',
              gridlines: {
                count: 5,
              }
            },
            hAxis: {
              viewWindow: {
                min: stats.ratingHistory[0].game,
                max: gamesLog.length,
              },
              viewWindowMode: 'explicit',
              gridlines: {
                count: 5,
              }
            }
          }}
        />
      )}

      <List>
        <StatItem label="Сыграно" value={stats.games}/>
        <StatItem label="Побед" value={`${stats.wins} ${calcPercent(stats.games, stats.wins)}`}/>
        <StatItem label="Поражений" value={`${stats.loss} ${calcPercent(stats.games, stats.loss)}`}/>
      </List>
      <List>
        <StatItem label="Опытный" value={roleToText(stats.commonRole)}/>
        <StatItem label="Успешный" value={roleToText(stats.bestRole)}/>
        <StatItem label="Проигрывающий" value={roleToText(stats.worstRole)}/>
      </List>
      {Object.keys(stats.byRoles).map((role) => (
        <List key={role}>
          <ListHeader title={roleToText(parseInt(role, 10))}/>
          <StatItem label="Сыграно"
                    value={`${stats.byRoles[role].total} ${calcPercent(stats.games, stats.byRoles[role].total)}`}/>
          <StatItem label="Побед"
                    value={`${stats.byRoles[role].win} ${calcPercent(stats.byRoles[role].total, stats.byRoles[role].win)}`}/>
          <StatItem label="Поражений"
                    value={`${stats.byRoles[role].loss} ${calcPercent(stats.byRoles[role].total, stats.byRoles[role].loss)}`}/>
        </List>
      ))}
    </React.Fragment>
  )

}
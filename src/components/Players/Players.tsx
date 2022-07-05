import React, { useContext } from "react";
import { PagesContext } from "../../utils/static";
import PlayersList from "./PlayersList";
import PlayersItem from "./PlayersItem";


export default function Players() {
  const [, activePageParam, setActivePage] = useContext(PagesContext);
  if (!activePageParam) {
    return <PlayersList setPageParam={setActivePage} />
  } else {
    return <PlayersItem name={activePageParam.toString()} />
  }
}
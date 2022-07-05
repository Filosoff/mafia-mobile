import React, { useContext } from "react";
import { PagesContext } from "../../utils/static";
import MeetingsList from "./MeetingsList";
import MeetingsItem from "./MeetingsItem";

export default function Meetings() {
  const [, activePageParam, setActivePage] = useContext(PagesContext);
  if (!activePageParam) {
    return <MeetingsList setPageParam={setActivePage} />
  } else {
    return <MeetingsItem date={activePageParam.toString()} setPageParam={setActivePage} />
  }
}
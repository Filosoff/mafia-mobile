import { Pages } from "../enum/pages";
import { Roles } from "../enum/roles";

export type PageType = Pages | number;
export type PageParamType = string | number | undefined;
export type SetPageType = (page?: PageType, param?: PageParamType) => void;

export type PagesContextType = [PageType, PageParamType, SetPageType];

export interface GamePlayerType {
  name: string;
  role: Roles;
  win: boolean;
}

export interface GameType {
  date: string;
  win: Roles;
  players: GamePlayerType[];
}
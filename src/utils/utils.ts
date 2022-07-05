import { Roles } from "../enum/roles";

export const uniq = (array: any[]) => array.filter((v, i, a) => a.indexOf(v) === i);

export const calcPercent = (full: number, value: number, onlyNumber: boolean = false):string|number => onlyNumber ? (value * 100 / full) : `(${parseFloat((value * 100 / full).toFixed(1))}%)`;

export const getGamesCountWord = (count: number) => {
  const lastDigit = parseInt(count.toString().slice(-1), 10);

  switch (lastDigit) {
    case 1:
      return 'игра';
    case 2:
    case 3:
    case 4:
      return 'игры';
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return 'игр';
    default:
      return 'игры';
  }
}

export const roleToText = (role: Roles) => {
  switch (role) {
    case Roles.sheriff:
      return "Шериф";
    case Roles.don:
      return "Дон";
    case Roles.citizen:
      return "Мирный";
    case Roles.mob:
      return "Мафиозо";
    case Roles.city:
      return "Город";
    case Roles.mafia:
      return "Мафия";
    default:
      return "Неизвестно";
  }
}
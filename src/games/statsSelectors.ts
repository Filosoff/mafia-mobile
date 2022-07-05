import { gamesLog } from "./log";
import { Roles } from "../enum/roles";
import { calcPercent, uniq } from "../utils/utils";

interface PlayersType {
  [key: string]: {
    name: string;
    win: number;
    total: number;
    roles: Roles[];
  };
}

export const getMeetingsDates = () => uniq(gamesLog.map(evening => evening.date));

export const getMeetingsStats = () => {
  const count = getMeetingsDates().length;
  const lastDate = gamesLog[gamesLog.length - 1].date;
  return { count, lastDate };
}

export const getMeetingStats = (date: string) => {
  const games = gamesLog.filter(game => game.date === date);
  const count = games.length;
  let mafiaWin = 0;
  let cityWin = 0;
  let players: PlayersType = {};
  games.forEach(game => {
    game.win === Roles.mafia ? mafiaWin++ : cityWin++;
    game.players.forEach(plr => {
      if (!players.hasOwnProperty(plr.name)) {
        players[plr.name] = {
          name: plr.name,
          win: 0,
          total: 0,
          roles: [],
        }
      }

      const p = players[plr.name];
      p.total++;
      if (plr.win) {
        p.win++;
      }
      p.roles.push(plr.role);
    });
  });
  return { count, mafiaWin, cityWin, players, games }
}

export const getGamesStats = () => {
  const count = gamesLog.length;
  const mafiaWin = gamesLog.filter(game => game.win === Roles.mafia).length;
  const cityWin = gamesLog.filter(game => game.win === Roles.city).length;

  return { count, mafiaWin, cityWin };
}

export const getPlayersNames = () => {
  const names: string[] = [];
  gamesLog.forEach(game => {
    game.players.forEach(plr => {
      names.push(plr.name);
    });
  });

  return uniq(names).sort();
}

export const getPlayerStats = (name: string) => {
  const baseRating = 1000;
  const baseRatingDiff = 10;
  const baseRatingLoss = 2;
  const minRating = 0;

  const stats = {
    name,
    rating: baseRating,
    wins: 0,
    loss: 0,
    games: 0,
    lastGame: "",
    gamesList: [] as any[],
    byRoles: {} as any,
    bestRole: -1,
    worstRole: -1,
    commonRole: -1,
    ratingHistory: [] as any[],
  };

  stats.gamesList = gamesLog
    .filter(game => !!game.players.filter(plr => plr.name === name).length)
    .map(game => {
      const plrData = game.players.filter(plr => plr.name === name)[0];
      return {
        date: game.date,
        win: plrData.win,
        role: plrData.role,
      }
    });

  stats.gamesList.forEach(game => {
    stats.lastGame = game.date;
    stats.games++;
    game.win ? stats.wins++ : stats.loss++;
    if (!stats.byRoles.hasOwnProperty(game.role)) {
      stats.byRoles[game.role] = {
        total: 0,
        win: 0,
        loss: 0,
        winRate: 0,
      };
    }
    const s = stats.byRoles[game.role];
    s.total++;
    if (game.win) {
      s.win++;
    } else {
      s.loss++;
    }
    s.winRate = calcPercent(s.total, s.win, true);
  });

  // roles stats

  let bestRole = -1;
  let worstRole = -1;
  let commonRole = -1;
  Object.keys(stats.byRoles).forEach((roleIndex: string) => {
    const role: Roles = parseInt(roleIndex, 10);
    const data = stats.byRoles[role];
    if (data.total > commonRole) {
      stats.commonRole = role;
      commonRole = data.total;
    }
    const winRate = calcPercent(data.total, data.win, true) as number;
    const lossRate = calcPercent(data.total, data.loss, true) as number;
    if (winRate > bestRole) {
      stats.bestRole = role;
      bestRole = winRate;
    }
    if (lossRate > worstRole) {
      stats.worstRole = role;
      worstRole = lossRate;
    }
  });

  // rating
  if (stats.games > 10) {
    let go = false;
    gamesLog.forEach((game, index) => {
      const data = game.players.find(plr => plr.name === stats.name);
      if (!data) {
        if (go) {
          stats.rating -= baseRatingLoss;
        }
      } else {
        go = true;
        data.win ? stats.rating += baseRatingDiff : stats.rating -= baseRatingDiff;
      }
      if (stats.rating < minRating) {
        stats.rating = minRating;
      }
      if (go) {
        stats.ratingHistory.push({
          game: index + 1,
          value: stats.rating,
        });
      }
    });
  } else {
    stats.rating = 0;
  }

  return stats;
}

export const getPlayersStats = (minGamesLimit = 0) => {
  const allPLrs = getPlayersNames();

  const stats = {
    count: allPLrs.length,
    maxRating: { name: "", value: 0 },
    maxGames: { name: "", value: 0 },
    minGames: { name: "", value: 9999 },
    maxCitizen: { name: "", value: 0 },
    maxMob: { name: "", value: 0 },
    maxSheriff: { name: "", value: 0 },
    maxDon: { name: "", value: 0 },
  }

  allPLrs
    .map(p => getPlayerStats(p))
    .filter(plr => plr.games > minGamesLimit)
    .forEach(plr => {
      if (plr.rating > stats.maxRating.value) {
        stats.maxRating.value = plr.rating;
        stats.maxRating.name = plr.name;
      }
      if (plr.games > stats.maxGames.value) {
        stats.maxGames.value = plr.games;
        stats.maxGames.name = plr.name;
      }
      if (plr.games < stats.minGames.value) {
        stats.minGames.value = plr.games;
        stats.minGames.name = plr.name;
      }
      if (plr.byRoles[Roles.sheriff] && plr.byRoles[Roles.sheriff].winRate > stats.maxSheriff.value) {
        stats.maxSheriff.value = plr.byRoles[Roles.sheriff].winRate;
        stats.maxSheriff.name = plr.name;
      }
      if (plr.byRoles[Roles.don] && plr.byRoles[Roles.don].winRate > stats.maxDon.value) {
        stats.maxDon.value = plr.byRoles[Roles.don].winRate;
        stats.maxDon.name = plr.name;
      }
      if (plr.byRoles[Roles.citizen] && plr.byRoles[Roles.citizen].winRate > stats.maxCitizen.value) {
        stats.maxCitizen.value = plr.byRoles[Roles.citizen].winRate;
        stats.maxCitizen.name = plr.name;
      }
      if (plr.byRoles[Roles.mob] && plr.byRoles[Roles.mob].winRate > stats.maxMob.value) {
        stats.maxMob.value = plr.byRoles[Roles.mob].winRate;
        stats.maxMob.name = plr.name;
      }
    });


  return stats;
}

export const getPlayersList = () => {
  const plrs = getPlayersNames();
  return plrs.map(name => ({
    name,
    rating: getPlayerStats(name).rating,
  })).sort((a, b) => {
    if (a.rating === b.rating) {
      return -1;
    }
    return b.rating - a.rating;
  });
}
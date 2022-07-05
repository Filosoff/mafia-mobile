import { Roles } from '../enum/roles';
import { GameType } from "../utils/types";

const gamesLog: GameType[] = [
  {
    "date": "13-07-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Тайна",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Инженер",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Вероника",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": false
      }
    ]
  },
  {
    "date": "13-07-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Вероника",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Тайна",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Катерина",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.sheriff,
        "win": true
      }
    ]
  },
  {
    "date": "13-07-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Тайна",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Катерина",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Вероника",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "22-07-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Тайна",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Глеб",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Космополитен",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Творог",
        "role": Roles.mob,
        "win": false
      }
    ]
  },
  {
    "date": "22-07-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Жора",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Тайна",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Глеб",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Космополитен",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Антек",
        "role": Roles.mob,
        "win": false
      }
    ]
  },
  {
    "date": "22-07-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Жора",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Мишка",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Тайна",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "27-07-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Жора",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Фредди",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.mob,
        "win": true
      }
    ]
  },
  {
    "date": "27-07-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Лирика",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Фредди",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Мишка",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Жора",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Ли",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.mob,
        "win": false
      }
    ]
  },
  {
    "date": "27-07-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Жора",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ли",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Мишка",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Фредди",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "03-08-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Самса",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Фредди",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Королев",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "03-08-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Ли",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Королев",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Фредди",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Тайна",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Мишка",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "03-08-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Бровар",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Антек",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Тайна",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Королев",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Мишка",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.don,
        "win": true
      }
    ]
  },
  {
    "date": "10-08-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Фредди",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Пират",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Ли",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "10-08-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Пират",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Тайна",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Фредди",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.mob,
        "win": true
      }
    ]
  },
  {
    "date": "10-08-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Тайна",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Пират",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Антек",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.don,
        "win": true
      }
    ]
  },
  {
    "date": "17-08-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Ли",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Панч",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Черри",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Фен",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Пират",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.sheriff,
        "win": false
      }
    ]
  },
  {
    "date": "17-08-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Пират",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Панч",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": true
      }
    ]
  },
  {
    "date": "24-08-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Йода",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Голубая",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Оранжевая",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Слоун",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "24-08-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Слоун",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Йода",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "24-08-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Слоун",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.mob,
        "win": true
      }
    ]
  },
  {
    "date": "29-08-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Панкин",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Шавуха",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.don,
        "win": false
      }
    ]
  },
  {
    "date": "29-08-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Шавуха",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Антек",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Панкин",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.mob,
        "win": true
      }
    ]
  },
  {
    "date": "29-08-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Ли",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Шавуха",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Панкин",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "29-08-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Шавуха",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Панкин",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": true
      }
    ]
  },
  {
    "date": "07-09-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Йода",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Тайна",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.mob,
        "win": true
      }
    ]
  },
  {
    "date": "07-09-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Йода",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Тайна",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Ли",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "07-09-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Тайна",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Ли",
        "role": Roles.mob,
        "win": false
      }
    ]
  },
  {
    "date": "28-09-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Бровар",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Правша",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Мобила",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Тайна",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "28-09-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Тайна",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Антек",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Мобила",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "28-09-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Антек",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "28-09-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Антек",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Мобила",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.mob,
        "win": false
      }
    ]
  },
  {
    "date": "10-10-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Иви",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Тайна",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Панкин",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Правша",
        "role": Roles.mob,
        "win": false
      }
    ]
  },
  {
    "date": "10-10-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Панкин",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Тайна",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "10-10-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Панкин",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "26-10-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Инженер",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.sheriff,
        "win": false
      }
    ]
  },
  {
    "date": "26-10-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Желтый",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Антек",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Инженер",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.mob,
        "win": false
      }
    ]
  },
  {
    "date": "26-10-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Инженер",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Антек",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "07-12-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Фил",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Ину",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.mob,
        "win": false
      }
    ]
  },
  {
    "date": "07-12-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Ину",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Фил",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "07-12-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Сын",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Амура",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Фил",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Правша",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.don,
        "win": false
      }
    ]
  },
  {
    "date": "07-12-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Фил",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Ину",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "13-12-2021",
    "win": Roles.city,
    "players": [
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Сын",
        "role": Roles.mob,
        "win": false
      }
    ]
  },
  {
    "date": "13-12-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Сын",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.mob,
        "win": true
      }
    ]
  },
  {
    "date": "13-12-2021",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "11-01-2022",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Эйч",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Джам",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Мица",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Ину",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Паук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.don,
        "win": true
      }
    ]
  },
  {
    "date": "11-01-2022",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Желтый",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Эйч",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Паук",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Антек",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Джам",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Мица",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ину",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.sheriff,
        "win": false
      }
    ]
  },
  {
    "date": "11-01-2022",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Мица",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Паук",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Алекс",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ину",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "11-01-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Антек",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Мица",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Алекс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Ину",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Паук",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "21-01-2022",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Фил",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Просто Мария",
        "role": Roles.mob,
        "win": true
      }
    ]
  },
  {
    "date": "21-01-2022",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Амура",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Малышка",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Просто Мария",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Фил",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.sheriff,
        "win": false
      }
    ]
  },
  {
    "date": "21-01-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Ину",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Просто Мария",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Амура",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Фил",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "21-01-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Самса",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Фил",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Малышка",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Ину",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Просто Мария",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Амура",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "28-01-2022",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Малышка",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Пиротехник",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ину",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Амура",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      }
    ]
  },
  {
    "date": "28-01-2022",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ину",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Малышка",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Амура",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Пиротехник",
        "role": Roles.sheriff,
        "win": false
      }
    ]
  },
  {
    "date": "28-01-2022",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Ину",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Пиротехник",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Малышка",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Амура",
        "role": Roles.don,
        "win": true
      }
    ]
  },
  {
    "date": "28-01-2022",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Малышка",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Ину",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Амура",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Пиротехник",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.don,
        "win": true
      }
    ]
  },
  {
    "date": "28-01-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Амура",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Ину",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Пиротехник",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Малышка",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "01-02-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Ину",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Властелин",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "В поиске",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Пиротехник",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "01-02-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Пиротехник",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "В поиске",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Властелин",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Амура",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.don,
        "win": false
      }
    ]
  },
  {
    "date": "01-02-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Амура",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Свитс",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Властелин",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Сын",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Пиротехник",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "В поиске",
        "role": Roles.sheriff,
        "win": true
      }
    ]
  },
  {
    "date": "11-02-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Ракета",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Влад",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Ину",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Правша",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Фил",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "11-02-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Ракета",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Онега",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Аменхотеп",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Фил",
        "role": Roles.sheriff,
        "win": true
      }
    ]
  },
  {
    "date": "11-02-2022",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ракета",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Амура",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Ину",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Фил",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Антек",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Онега",
        "role": Roles.mob,
        "win": true
      }
    ]
  },
  {
    "date": "11-02-2022",
    "win": Roles.mafia,
    "players": [
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Правша",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Амура",
        "role": Roles.sheriff,
        "win": false
      },
      {
        "name": "Иви",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Аменхотеп",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Лирика",
        "role": Roles.citizen,
        "win": false
      },
      {
        "name": "Фил",
        "role": Roles.don,
        "win": true
      },
      {
        "name": "Ракета",
        "role": Roles.mob,
        "win": true
      },
      {
        "name": "Физрук",
        "role": Roles.mob,
        "win": true
      }
    ]
  },
  {
    "date": "10-03-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Самса",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Ину",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Инженер",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Дор",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Анархия",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Ракета",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Фотограф",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "10-03-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Сын",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Инженер",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Анархия",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Ину",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Дор",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Ракета",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Фотограф",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      }
    ]
  },
  {
    "date": "10-03-2022",
    "win": Roles.city,
    "players": [
      {
        "name": "Фотограф",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Бровар",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Ракета",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Инженер",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Дор",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Желтый",
        "role": Roles.sheriff,
        "win": true
      },
      {
        "name": "Сын",
        "role": Roles.don,
        "win": false
      },
      {
        "name": "Анархия",
        "role": Roles.citizen,
        "win": true
      },
      {
        "name": "Ину",
        "role": Roles.mob,
        "win": false
      },
      {
        "name": "Самса",
        "role": Roles.citizen,
        "win": true
      }
    ]
  }
];

export { gamesLog };
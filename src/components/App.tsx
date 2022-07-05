import React, { useState } from 'react';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Toolbar,
  Typography,
  IconButton, Container
} from "@mui/material";
import { BarChart, EventNote, People, Person, ArrowBack } from "@mui/icons-material";
import { Pages } from "../enum/pages";
import Stats from "./Stats";
import Meetings from "./Meetings/Meetings";
import Players from "./Players/Players";
import { PagesContext } from '../utils/static';
import { PageType, PageParamType, SetPageType } from '../utils/types';
import Profile from "./Profile";

const usePages = (): [PageType, PageParamType, SetPageType] => {
  const [page, setPage] = useState<PageType>(Pages.me);
  const [param, setParam] = useState<PageParamType>();

  const setActive = (newPage: Pages|undefined = undefined, newParam: PageParamType = undefined): void => {
    if (newPage !== undefined) {
      setPage(newPage);
    }
    setParam(newParam);
  };

  return [page, param, setActive];
}

const pages = [
  {
    label: 'Профиль',
    icon: <Person/>,
    content: <Profile />,
  },
  {
    label: 'Статистика',
    icon: <BarChart/>,
    content: <Stats/>,
  },
  {
    label: 'Встречи',
    icon: <EventNote/>,
    content: <Meetings/>,
  },
  {
    label: 'Игроки',
    icon: <People/>,
    content: <Players/>,
  },
];

function App() {
  const [activePage, activePageParam, setActivePage] = usePages();

  return (
    <PagesContext.Provider value={[activePage, activePageParam, setActivePage]}>
      <Box sx={{ pb: 6 }}>
        <Box>
          <AppBar position="static">
            <Container sx={{ p: 0 }}>
              <Toolbar>
                {activePageParam && (
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setActivePage()}
                  >
                    <ArrowBack/>
                  </IconButton>
                )}
                <Typography
                  variant="h6">{`${pages[activePage as number].label} ${activePageParam ? `/ ${activePageParam}` : ''}`}</Typography>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
        <Container sx={{ p: 0 }}>
          {pages[activePage as number].content}
        </Container>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
          <Container sx={{ p: 0 }}>
            <BottomNavigation
              value={activePage as number}
              onChange={(event, newValue) => {
                setActivePage(newValue);
              }}
            >
              {pages.map((page, index) => (
                <BottomNavigationAction icon={page.icon} key={page.label}/>
              ))}
            </BottomNavigation>
          </Container>
        </Paper>
      </Box>
    </PagesContext.Provider>
  );
}

export default App;

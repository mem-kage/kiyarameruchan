import { Box, BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import React from 'react';
import styled from 'styled-components';
import Shindan from './components/Shindan';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,

    "& div": {
      backgroundColor: "#ffbb00"
    },

    "& .MuiButtonBase-root": {
      fontWeight: "bold",
      color: "white",
    },

    "& .Mui-selected": {
      backgroundColor: "#ffd883",
      color: "#ff7a00"
    },

    "& .MuiBottomNavigationAction-label": {
      fontSize: "1rem"
    }
  },
});

const App: React.VFC = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const ChangeEl = () => {
    if (value === 0) {
      return <KiyarameruChan src={`${process.env.PUBLIC_URL}/kiyarameru.png`}></KiyarameruChan>
    } else if(value === 1) {
      return <p>1</p>
    } else {
      return <Shindan></Shindan>
    }
  }

  return(
    <Container>
      <Title>きやらめるちゃん</Title>
      <ChangeEl />
      <Box className={classes.root}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="ほーむ" icon={<HomeIcon />} />
          <BottomNavigationAction label="じゃんけん" icon={<LocalDiningIcon />} />
          <BottomNavigationAction label="しんだん" icon={<ContentPasteSearchIcon />} />
        </BottomNavigation>
      </Box>
    </Container>
  )
}

export default App;

const Container = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: center;
`

const Title = styled.h1`
  text-align: center;
  color: #ffba4a;
  margin-top: 0;
`

const KiyarameruChan = styled.img`
  width: 80%;
`

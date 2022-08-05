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
    // backgroundImage: `url(${process.env.PUBLIC_URL}/images/kc_bottom_bg_01.svg)`,
    // backgroundRepeat: "no-repeat",

    "& .MuiBottomNavigation-root": {
      backgroundColor: "unset",
    },

    "& div": {
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/kc_bottom_bg.svg)`,
      backgroundSize: "contain",
      backgroundRepeat: "repeat",
    },

    "& .MuiButtonBase-root": {
      fontWeight: "bold",
      color: "#C8A07E",
      position: "relative",
      alignItems: "end",

      '&::before': {
        background: `url(${process.env.PUBLIC_URL}/kiyarameru.svg) no-repeat`,
        content: '""',
        backgroundSize: "contain",
        width: "70px",
        height: "50px",
        position: "absolute",
        top: "-15px"
      },
    },

    "& .Mui-selected": {
      backgroundColor: "unset",
      color: "#BC6F2B"
    },

    "&": {
      backgroundColor: "unset",
      color: "#BC6F2B"
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
      return <KiyarameruChan src={`${process.env.PUBLIC_URL}/kiyarameru.svg`}></KiyarameruChan>
    } else if(value === 1) {
      return <Shindan></Shindan>
    } else {
      return <p>1</p>
    }
  }

  return(
    <Container>
      <ChangeEl />
      <Box className={classes.root}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="ほーむ" />
          <BottomNavigationAction label="しんだん" />
          <BottomNavigationAction label="うらない" />
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
`

const KiyarameruChan = styled.img`
  width: 90%;
  animation: mocchiri 3s infinite;
  @keyframes mocchiri {
    0% {
        transform: scale(1, 0.8);
    }
    20% {
        transform: scale(0.8, 1.1);
    }
    95% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(1, 0.8);
    }
  }
`

import { Box, BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Shindan from './components/Shindan';
import Uranai from './components/Uranai';
import './App.css';
import Loading from './components/Loading';

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
  const [animationFlg, setAnimationFlg] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const classes = useStyles();

  const ChangeEl = () => {
    if (value === 0) {
      return <KiyarameruChan
                onClick={() => {setAnimationFlg(!animationFlg)}}
                src={`${process.env.PUBLIC_URL}/kiyarameru.svg`}
                className={animationFlg ? "biyooon" : "mocchiri"}
              ></KiyarameruChan>
    } else if(value === 1) {
      return <Shindan></Shindan>
    } else {
      return <Uranai></Uranai>
    }
  }

  return(
    <>
    { isLoading ? <Loading isLoading={isLoading} setIsLoading={setIsLoading} loadingTxt={"ロード中"} /> :
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
    }
    </>
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
`

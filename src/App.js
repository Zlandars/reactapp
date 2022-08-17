// import logo from './logo.svg';

import React from "react";
import {green, purple, red} from "@mui/material/colors";
import {Link, Route, Routes} from "react-router-dom";
import MessageList from "./components/MessageList";
import ChatList from "./components/ChatList";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    warning: {
      main: red[500],
    }
  },
});

function App() {


  return (
    <ThemeProvider theme={theme}>
      <div className="mainBlock">
        <Link to={'/'}>ChatList</Link>
        <Link to={'/profile'}>Profile</Link>
        <Routes>
          <Route path={'/'} element={<ChatList />} />
          <Route path={'/chat/:id'} element={<MessageList />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </div>
    </ThemeProvider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

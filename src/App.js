// import logo from './logo.svg';
import {
    createTheme,
    ThemeProvider,
    TextField,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Avatar, ListItemAvatar, Typography, Divider
} from "@mui/material";
import React from 'react';
import { green, orange } from "@mui/material/colors";
import { useEffect, useRef, useState } from "react";
import Message from "./components/Message";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";



const theme = createTheme({
    status: {
        main: green[700],
        danger: orange[500],
    },
});

function App() {
  const formEl = useRef(null);
  const [messageList, setMessageList] = useState([
    {
      id: 1,
      author: "Evgen",
      msg: "1",
    },
    {
      id: 2,
      author: "Vovke",
      msg: "e.target.value",
    },
  ]);
  const [answer, setAnswer] = useState();
  const [chatList, setChatsList] = useState([]);
  useEffect(() => {
    if (
      messageList.length > 2 &&
      messageList[messageList.length - 1] !==
        messageList[messageList.length - 2]
    ) {
      setTimeout(() => {
          setAnswer(messageList[messageList.length - 1].author);

      }, 1000);
    }
  }, [messageList]);
  return (
    <ThemeProvider theme={theme}>
      <div className="mainBlock">
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', flexGrow: 1 }}>
              <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                          <React.Fragment>
                              <Typography
                                  sx={{ display: 'inline' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                              >
                                  Ali Connors
                              </Typography>
                              {" — I'll be in your neighborhood doing errands this…"}
                          </React.Fragment>
                      }
                  />
              </ListItem>
              <Divider variant="inset" component="li" />

          </List>
          <div className="chat">
              <Box component="form" noValidate
                         autoComplete="off" mt={4} display="flex"
                         flexDirection="column" onSubmit={(event) => {
                                event.preventDefault();
                                setMessageList([
                                    ...messageList,
                                    {
                                        id: messageList.length + 1,
                                        author: event.target.author.value,
                                        msg: event.target.text.value,
                                    },
                                ]);
                                event.target.author.value = '';
                                event.target.text.value = '';
                                event.target.author.focus();
                         }}>

                        <TextField id="name" label="Имя"
                                   variant="outlined" sx={{ mb: 2 }}
                                   name="author"
                                   inputRef={formEl}
                        />
                        <TextField id="message" label="Сообщение"
                                   variant="outlined" sx={{ mb: 2 }}
                                   name="text"
                                   inputRef={formEl}
                        />
                        <Button variant="outlined"
                                size="small" type="submit" sx={{ mb: 4 }}>Отправить</Button>
                    </Box>

                      {messageList.map((item) => {
                        return <Message obj={item} key={item.id} />;
                      })}
          </div>
          {answer && <p>Спасибо за комментарий {answer}</p>}
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

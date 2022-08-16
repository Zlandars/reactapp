// import logo from './logo.svg';
import {
  createTheme,
  ThemeProvider,
  TextField,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import {green, orange, purple, red} from "@mui/material/colors";
import { useEffect, useRef, useState } from "react";
import Message from "./components/Message";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
  const [chatList, setChatsList] = useState([
      {
        id: 1,
        chatAuthor: 'Evgen',
        lastMessage: {
          id: 2,
          author: "Vovke",
          msg: "e.target.value",
        }
      }
      ]);
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
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            flexGrow: 1,
          }}
        >
          {chatList.map((item, index, array) => {
            return <>
              <ListItem alignItems="flex-start" key={item.id}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                  primary={item.chatAuthor}
                  secondary={
                    <React.Fragment>
                      <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                      >
                        {item.lastMessage.author}
                      </Typography>
                      {item.lastMessage.msg}
                    </React.Fragment>
                  }
              />
            </ListItem>
              { index !== array.length - 1 && <Divider variant="inset" component="li" /> }
            </>
            ;
          })}
          <Box
              component="form"
              noValidate
              autoComplete="off"
              mt={4}
              display="flex"
              flexDirection="column"
              onSubmit={(event) => {
                event.preventDefault();
                setChatsList(prev => [
                  ...prev,
                  {
                    id: prev.length + 1,
                    chatAuthor: event.target.author.value,
                    lastMessage: {},
                  },
                ]);

                event.target.author.value = "";
              }}
          >
            <TextField
                id="name"
                label="Создатель чата"
                variant="outlined"
                sx={{ mb: 2 }}
                name="author"
                inputRef={formEl}
            />
            <Button
                variant="outlined"
                size="small"
                type="submit"
                sx={{ mb: 4 }}
            >
              Отправить
            </Button>
          </Box>
        </List>
        <div className="chat">
          <Box
            component="form"
            noValidate
            autoComplete="off"
            mt={4}
            display="flex"
            flexDirection="column"
            onSubmit={(event) => {
              event.preventDefault();
              setMessageList([
                ...messageList,
                {
                  id: messageList.length + 1,
                  author: event.target.author.value,
                  msg: event.target.text.value,
                },
              ]);
              event.target.author.value = "";
              event.target.text.value = "";
              event.target.author.focus();
            }}
          >
            <TextField
              id="name"
              label="Имя"
              color='secondary'
              variant="outlined"
              sx={{ mb: 2 }}
              name="author"
              inputRef={formEl}
            />
            <TextField
              id="message"
              label="Сообщение"
              color='secondary'
              variant="outlined"
              sx={{ mb: 2 }}
              name="text"
              inputRef={formEl}
            />
            <Button
              variant="outlined"
              size="small"
              type="submit"
              sx={{ mb: 4 }}
            >
              Отправить
            </Button>
          </Box>

          {messageList.map((item) => {
            return <Message obj={item} key={item.id} />;
          })}
          {answer && <Button sx='margin: 10px' variant="outlined" size="small" disabled={true}>Спасибо за комментарий {answer}</Button>}
        </div>
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

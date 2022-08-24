import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useLocation} from "react-router-dom";
import Message from "./Message";
import PageNotFound from "./PageNotFound";

const MessageList = () => {
        const location = useLocation();
        const chatId = Number(location.pathname.split('/')[location.pathname.split('/').length - 1]);
        const [answer, setAnswer] = useState();
        const [messageList, setMessageList] = useState([
                {
                    id: 1,
                    chat_id: 1,
                    author: "Evgen",
                    msg: "1",
                },
        ]);
        useEffect(() => {
                if (
                        messageList[messageList.length - 1] !==
                        messageList[messageList.length - 2]
                ) {
                        setTimeout(() => {
                                setAnswer(messageList[messageList.length - 1].author);
                        }, 1000);
                }
        }, [messageList]);
    return (
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
                                        chat_id: chatId,
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
                    />
                    <TextField
                            id="message"
                            label="Сообщение"
                            color='secondary'
                            variant="outlined"
                            sx={{ mb: 2 }}
                            name="text"
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
                        if (chatId === item.chat_id) {

                                return <Message obj={item} key={item.id} />;
                        } else {
                                return <PageNotFound />
                        }
                })}
                {answer && <Button variant="outlined" size="small" disabled={true}>Спасибо за комментарий {answer}</Button>}
            </div>
    );
};

export default MessageList;

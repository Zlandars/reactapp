import React, {useContext, useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Message from "./Message";
import {ChatContext} from "../Context";

const MessageList = () => {
        const [answer, setAnswer] = useState();
        const { chats, handleAdd } = useContext(ChatContext);

        useEffect(() => {
                if (
                        chats.length > 2 &&
                        chats[chats.length - 1] !==
                        chats[chats.length - 2]
                ) {
                        setTimeout(() => {
                                setAnswer(chats[chats.length - 1].author);
                        }, 1000);
                }
        }, [chats]);
    return (
            <div className="chat">
                <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        mt={4}
                        display="flex"
                        flexDirection="column"
                        onSubmit={ (event) => {
                                event.preventDefault();
                                handleAdd({
                                        author: event.target.author.value,
                                        msg: event.target.text.value,
                                })
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
                {
                        chats.map((item) => { return <Message obj={item} key={item.id} />})
                }
                {answer && <Button sx='margin: 10px' variant="outlined" size="small" disabled={true}>Спасибо за комментарий {answer}</Button>}
            </div>
    );
};

export default MessageList;
import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useParams} from "react-router-dom";
import Message from "./Message";
import PageNotFound from "./PageNotFound";
import {useDispatch, useSelector} from "react-redux";
import {addList} from "./selectors";

const MessageList = () => {
    const chatId = useParams().id;
    const messageArr = useSelector(addList);
    const messageList = messageArr[chatId].filter((item, index) => {
        if (index !== 0) {
            return item;
        }
        return null;
    });
    const [answer, setAnswer] = useState();
    const [author, setAuthor] = useState();
    const [message, setMessage] = useState();
    const dispatch = useDispatch();
    function handleDelete(id) {

        dispatch({type: 'deleteMessage', payload: {chat_id: chatId, id_msg: id}});
    }
    useEffect(() => {
        setTimeout(() => {
            setAnswer(messageList[messageList.length - 1].author);
        }, 1000);
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
                    const obj = [{
                            id: Math.random(),
                            author: author,
                            msg: message,
                        }];
                    dispatch({type: 'addMessage', payload: {id: chatId, obj: obj}})
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
                    sx={{mb: 2}}
                    name="author"
                    onChange={(e)=>{
                        setAuthor(e.target.value);}}
                />
                <TextField
                    id="message"
                    label="Сообщение"
                    color='secondary'
                    variant="outlined"
                    sx={{mb: 2}}
                    name="text"
                    onChange={(e)=>{
                        setMessage(e.target.value);}}
                />
                <Button
                    variant="outlined"
                    size="small"
                    type="submit"
                    sx={{mb: 4}}
                >
                    Отправить
                </Button>
            </Box>

            {messageList ? messageList.map((item) => {return <><Message obj={item} key={item.id}/><Button onClick={()=>{
                handleDelete(item.id);
            }
            }>X</Button></>}) : <PageNotFound/>}
            {answer && <Button variant="outlined" size="small" disabled={true}>Спасибо за комментарий {answer}</Button>}
        </div>
    );
};

export default MessageList;

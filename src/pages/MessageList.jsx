import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useParams} from "react-router-dom";
import Message from "./Message";
import PageNotFound from "./PageNotFound";
import {useDispatch, useSelector} from "react-redux";
import {addMessageList, activeUser} from "../components/selectors";
import {ADD_MESSAGE, DELETE_MESSAGE} from "../redux/ActionType";

const MessageList = () => {
    const chatId = Number(useParams().id);
    const messageArr = useSelector(addMessageList);
    const messageList = messageArr.filter((item) => {
        return item.chat_id === chatId;
    });
    const [answer, setAnswer] = useState();
    const author = useSelector(activeUser).username;
    const [message, setMessage] = useState();
    const [delay, setDelay] = useState(null);
    const dispatch = useDispatch();
    function handleDelete(id) {
        dispatch({type: DELETE_MESSAGE, payload:  id, meta: chatId});
    }
    function handleAdd(event) {
            event.preventDefault();
            const obj = {
                    id: messageArr.length,
                    chat_id: chatId,
                    author: author,
                    msg: message,
            };
            setTimeout(()=>{
                    dispatch({type: ADD_MESSAGE, payload: obj})
            }, delay);
            event.target.text.value = "";
    }
    useEffect(() => {
            document.title = 'MessageList';
            if (messageList > 0 ) {
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
                onSubmit={(e) => handleAdd(e)}
            >
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
                    <TextField
                            id="message"
                            type={'number'}
                            label="Задержка перед отправкой (секунд)"
                            color='secondary'
                            variant="outlined"
                            sx={{mb: 2}}
                            name="text"
                            onChange={(e)=>{
                                    setDelay(e.target.value * 1000);
                            }}
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

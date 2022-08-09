// import logo from './logo.svg';
import { useEffect, useRef, useState } from "react";
import Message from "./modules/Message";

function App() {
  const formEl = useRef();
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
  useEffect(() => {
    if (
      messageList.length > 2 &&
      (messageList[messageList.length - 1] !==
        messageList[messageList.length - 2])
    ) {
      setTimeout(() => {
        document
          .querySelector(".mainBlock")
          .append(
            "Спасибо за комментарий " +
              messageList[messageList.length - 1].author
          );
      }, 1000);
    }
  }, [messageList]);
  return (
    <div className="mainBlock">
      <form action="post" ref={formEl}>
        <h2>Добавление сообщения через форму</h2>
        <label htmlFor="author">Автор сообщения</label>
        <input id="author" type="text" placeholder="Author" required />
        <label htmlFor="message">Сообщение</label>
        <input id="message" type="text" placeholder="Введите текст сообщения" required />
        <button
          onClick={(event) => {
            event.preventDefault();
            setMessageList([
              ...messageList,
              {
                id: messageList.length + 1,
                author: formEl.current[0].value,
                msg: formEl.current[1].value,
              },
            ]);
            formEl.current[0].value = "";
            formEl.current[1].value = "";
          }}
        >
          Button
        </button>
      </form>

      {messageList.map((item) => {
        return <Message obj={item} key={item.id} />;
      })}
    </div>
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

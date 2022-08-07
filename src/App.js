// import logo from './logo.svg';
import {useRef, useState} from "react";
import Message from "./modules/Message";

function App() {
    const inputEl = useRef();
    const formEl = useRef();
  const [messageList, setMessageList] = useState([{
      author: 'Evgen',
      msg: '1'
  },{
      author: 'Vovke',
      msg: 'e.target.value'
  }]);
  function error(params) {
      console.log('Введите в поле данные' + formEl.current[0].value);
  }
  return (
    <div className="mainBlock">
        <form action="" ref={formEl}>
            <label htmlFor="author">Автор сообщения</label>
            <input id='author' type="text" placeholder='Author'/>
            <label htmlFor="message">Сообщение</label>
            <input id='message' type="text" placeholder='Введите текст сообщения' />
            <button onClick={(event)=>{
                event.preventDefault();
                if(formEl.current[0].value && formEl.current[1].value) {
                    setMessageList([
                        ...messageList,
                        {
                            author: formEl.current[0].value ? formEl.current[0].value : error(),
                            msg: formEl.current[1].value ? formEl.current[1].value : error()
                        }
                    ])
                }
                error(formEl.current[0], formEl.current[1]);

            }}></button>
        </form>
        <textarea ref={inputEl} className="textArea"></textarea>
        <button onClick={()=>{
            setMessageList([
                ...messageList,
                {
                    author: 'Evgen',
                    msg: inputEl.current.value
                }
            ])
        }}>Button</button>
        {messageList.map((item)=>{
            return (
                    <Message obj={item} />
                );
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

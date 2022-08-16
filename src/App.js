// import logo from './logo.svg';
import {useEffect, useRef, useState} from "react";
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
      console.log('Введите в поле данные ' + params.labels[0].innerText);
  }
  useEffect(()=>{
      document.querySelector('.mainBlock').append('<div>МОЛОДЧИК</div>')
  },[messageList])
  return (
    <div className="mainBlock">

        <form action="" ref={formEl}>
            <h2>Вариант 1: добавление сообщения через форму</h2>
            <label htmlFor="author">Автор сообщения</label>
            <input id='author' type="text" placeholder='Author'/>
            <label htmlFor="message">Сообщение</label>
            <input id='message' type="text" placeholder='Введите текст сообщения' />
            <button onClick={(event)=>{
                event.preventDefault();
                setMessageList([
                    ...messageList,
                    {
                        author: formEl.current[0].value ? formEl.current[0].value : error(formEl.current[0]),
                        msg: formEl.current[1].value ? formEl.current[1].value : error(formEl.current[1])
                    }
                ]);
                formEl.current[0].value = '';
                formEl.current[1].value = '';
                }
            }>Button</button>
        </form>

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

import '../App.css'
function Message(props) {
    return (
        <div className='block'>{props.obj.author} + {props.obj.msg}</div>
    );
};

export default Message;
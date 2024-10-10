import Message from "./Message"

const Messages = () =>{
    return(
        <div className="flex-1 overflow-y-scroll"
        style={{minHeight : "calc(92vh - 8vh)"}} >
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
} 

export default Messages;
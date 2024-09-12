import ChatUser from "./ChatUser";
import Messages from "./Messages";
import TypeSend from "./TypeSend";

const Right = () =>{
    return(
        <div className="w-[70%] border border-black bg-blue-950">
            <ChatUser />
            <div 
            className="flex-1 overflow-y-scroll"
            style={{maxHeight : "calc(92vh - 8vh)"}}>
                <Messages />
            </div>
            <TypeSend />
        </div>
    )
}

export default Right;
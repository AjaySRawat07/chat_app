
const ChatUser = () =>{
    return(
        <div className="flex justify-center items-center space-x-3 py-1.5 bg-slate-600">
            <div className="avatar online">
            <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
         </div>
         <div className="text-white"> 
               <h1 className="font-bold">Ajay</h1>
                <span>ajju@dev.com</span>
         </div>
        </div>
    )
}

export default ChatUser;
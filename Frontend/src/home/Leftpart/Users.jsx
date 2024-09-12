import User from "./User";

const Users = () =>{
    return(
        <>
            <div className="px-8 py-2 font-semibold text-white bg-slate-800">Messages</div>
            <div className="flex-1 overflow-y-auto py-2 " style={{maxHeight : "calc(84vh - 10vh)"}}>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </>
    )
}

export default Users;
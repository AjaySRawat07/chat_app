import useGetAllUsers from "../../context/useGetAllUsers";
import User from "./User";

const Users = () =>{
    const [allUsers,loading] = useGetAllUsers();
    console.log(allUsers);
    return(
        <>
            <div className="px-8 py-2 font-semibold text-white bg-slate-800">Messages</div>
            <div className="flex-1 overflow-y-auto py-2 " style={{maxHeight : "calc(84vh - 10vh)"}}>
             {
                allUsers.map((user, idx) => (
                    <User key={idx} user={user}/>
                ))
             }
            </div>
        </>
    )
}

export default Users;
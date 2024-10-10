import Logout from "./Logout";
import Search from "./Search";
import Users from "./Users";

const Left = () =>{
    return(
        <>
        <div className="w-[30%] text-white">
            <Search />
            <div
            className="flex-1 overflow-y-auto"
            style={{minHeight : "calc(84vh - 10vh)"}}
            >
                <Users />
            </div>
            <Logout />
        </div>
        </>
    )
}

export default Left;
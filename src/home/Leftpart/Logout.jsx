import { CiLogout } from "react-icons/ci";

const Logout = () =>{
    return(
        <div className="h-[10vh]">
            <div>
                <CiLogout className="text-5xl text-white hover:bg-red-700 duration-300 cursor-pointer rounded-full p-2 ml-2.5 mt-1 "/>
            </div>
    </div>
    )
}

export default Logout;
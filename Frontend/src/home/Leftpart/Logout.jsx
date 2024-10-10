import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { CiLogout } from "react-icons/ci";

const Logout = () =>{

    const [loading, setLoading] = useState(false);
    async function handleLogout(){
        setLoading(true);
        try{
            const resp = await axios.post("/api/user/logout");
            localStorage.removeItem("chatApp");
            Cookies.remove("jwt");
            setLoading(false);  
            alert("User Logout Successfully");
            window.location.reload();
        }
        catch(err){
            console.log("Error at Logout" + err);
        }
    }
    return(
        <div className="h-[10vh]">
            <div>
                <CiLogout className="text-5xl text-white hover:bg-red-700 duration-300 cursor-pointer rounded-full p-2 ml-2.5 mt-1"
                onClick={handleLogout}
                />
            </div>
    </div>
    )
}

export default Logout;
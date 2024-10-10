import { IoSend } from "react-icons/io5";


const TypeSend = () =>{
    return(
        <div className="flex space-x-1 h-[8vh] bg-gray-800 ">
          <div className="w-[70%] mx-4 p-1">
            <input 
            type="text" 
            placeholder="Type here" 
            className="border border-gray-700 outline-none mt-1 px-4 py-3 w-full   rounded-xl" />
          </div>
          <button>
            <IoSend  className="text-3xl"/>
          </button>
        </div>
    )
}

export default TypeSend;
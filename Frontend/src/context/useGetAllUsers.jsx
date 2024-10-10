import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useGetAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");  // Get JWT token from cookies
        const response = await axios.get("/api/user/allUsers", {
          withCredentials: true,  // Include credentials (cookies)
          headers: {
            Authorization: `Bearer ${token}`,  // Set authorization header
          },
        });
        setAllUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.log("Error in useGetAllUsers: " + err);
        setLoading(false);  // Make sure loading state is stopped on error
      }
    };

    getUsers();
  }, []);

  return [allUsers, loading];
};

export default useGetAllUsers;

import React, { useEffect, useState } from "react";
import axios from "axios";

const AllUserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users`,
        {
          headers: {
            Authorization: ` ${token}`, // Ensure the token is prefixed with 'Bearer'
          },
        }
      );
      if (response.data && response.data.data) {
        setUsers(response.data.data);
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1 className="text-[22px] font-semibold py-4 px-10">User's List</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-xl px-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-800 ">
          <thead className="text-xs text-grey-200 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr. No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {index + 1}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {user.name}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {user.email}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {typeof user.address === "string"
                    ? user.address
                    : user.address?.city || "N/A"}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {user.role === "admin" ? "Admin" : "Customer"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUserList;

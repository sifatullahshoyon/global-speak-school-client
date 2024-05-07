import { useQuery } from "@tanstack/react-query";
import React from "react";
import Title from "../../../components/Title";
import { FaTrashAlt , FaUsers } from "react-icons/fa";
import { toast } from "react-toastify";

const AllUsers = () => {
  const { data: users = [] , refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users`
      );
      return res.json();
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}` , {
        method : 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            refetch();
            toast.success(`${user.name} is Admin Now!`);
        }
    })
  };

  const handleDelete  = (user) => {
    // 
  };

  return (
    <div className="w-full">
        {/* Dynamic Title */}
      <Title title="All Users" />
        <p className="pl-20 text-lg md:text-2xl lg:text-3xl font-bold">All Users: {users?.length}</p>
        <div>
            
    <div className="overflow-x-auto ">
    <table className="min-w-[90%]  border mx-auto border-gray-100  my-6">
        <thead>
            <tr className="bg-[#333333] text-white">
                <th className="py-3 px-6 text-left border-b">#</th>
                <th className="py-3 px-6 text-left border-b">Name</th>
                <th className="py-3 px-6 text-left border-b">Email</th>
                <th className="py-3 px-6 text-left border-b">Role</th>
                <th className="py-3 px-6  border-b text-end">Action</th>
            </tr>
        </thead>
        <tbody>
            {users?.map((user , index) => 
            <tr key={user._id} className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b">{index + 1} </td>
                <td className="py-4 px-6 border-b">{user?.name ? user?.name : "Data Not Found"}</td>
                <td className="py-4 px-6 border-b">{user?.email ? user?.email : "Data Not Found"}</td>
                <td className="py-4 px-6 border-b">
                    {
                        user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-amber-500 text-sm text-white hover:bg-amber-600"><FaUsers /></button>
                    }
                </td>
                <td className="py-4 px-6 border-b text-end">
                    <button onClick={() => handleDelete(user)} className="btn bg-rose-600 text-sm text-white hover:bg-rose-700"><FaTrashAlt /></button>
                </td>
            </tr>
            )}
        </tbody>
    </table>
    </div>
    
        </div>
    </div>
  );
};

export default AllUsers;

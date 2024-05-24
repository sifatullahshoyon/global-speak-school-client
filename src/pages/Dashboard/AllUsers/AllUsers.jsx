import React from "react";
import Title from "../../../components/Title";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { toast } from "react-toastify";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, refetch] = useCart();
  const token = localStorage.getItem("access-token");

  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`${user.name} is Admin Now!`);
        }
      });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/users/${user._id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });

    //
    // fetch(`${import.meta.env.VITE_API_URL}/users/${user._id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.deletedCount > 0) {
    //       refetch();
    //       toast.success(`${user.name} has been deleted!`);
    //     }
    //   });
  };

  return (
    <div className="w-full">
      <Title title="All Users" />
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
            {users?.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6 border-b">{index + 1} </td>
                <td className="py-4 px-6 border-b">
                  {user?.name ? user?.name : "Data Not Found"}
                </td>
                <td className="py-4 px-6 border-b">
                  {user?.email ? user?.email : "Data Not Found"}
                </td>
                <td className="py-4 px-6 border-b">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-amber-500 text-sm text-white hover:bg-amber-600"
                    >
                      <FaUsers />
                    </button>
                  )}
                </td>
                <td className="py-4 px-6 border-b text-end">
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn bg-rose-600 text-sm text-white hover:bg-rose-700"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

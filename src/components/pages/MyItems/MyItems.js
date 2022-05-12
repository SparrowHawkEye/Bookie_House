import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import axiosPrivate from "../../hooks/axosPrivate";
import Loading from "../../Shared/Loading/Loading";
import MySingleItem from "./MySingleItem";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `https://radiant-brook-38544.herokuapp.com/myItems?email=${email}`;
      if (loading) {
        return <Loading />;
      }
      try {
        const { data } = await axiosPrivate.get(url);
        setItems(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [reload, user]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeahh ",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://radiant-brook-38544.herokuapp.com/book/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
            setReload(!reload);
          });
        Swal.fire(
          "Deleted!",
          "The product deleted successfully from the database",
          "success"
        );
      }
    });
  };
  return (
    <div>
      <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="w-9/12 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Your Added Books</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Publisher</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Author</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">ISBN</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          No of Page
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Price</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          Quantity
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {items.map((item) => (
                      <MySingleItem
                        key={item._id}
                        item={item}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyItems;

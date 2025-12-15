import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/signin";
      return;
    }

    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/items", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setItems(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/items`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { id },
      });
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete failed:", err.response?.data || err.message);
    }
  };

  const handleEdit = (item) => {
    console.log("Edit item:", item);
    // You can open a modal or navigate to edit page
  };

  if (loading) return <p className="text-center mt-10">Loading items...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-6">
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item._id} className="card card-side bg-blue-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description || "No description available"}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-error btn-sm"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full">No items found.</p>
      )}
    </div>
  );
};

export default ItemList;

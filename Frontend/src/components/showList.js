import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./itemList";

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/signin";
      return;
    }
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/items", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(res.data);
    } catch (err) {
      console.error("Failed to fetch items", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!newTitle) return alert("Title is required");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/items",
        { title: newTitle, description: newDescription },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setItems((prev) => [res.data, ...prev]);
      setNewTitle("");
      setNewDescription("");
    } catch (err) {
      console.error("Add failed", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:3000/api/items", {
        headers: { Authorization: `Bearer ${token}` },
        data: { id },
      });
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleEdit = (item) => {
    console.log("Edit item:", item);
  };

  if (loading) return <p className="text-center mt-10">Loading items...</p>;

  return (
    <div className="px-4 py-6 space-y-4">
      {/* Add Item Form */}
      <div className="card p-4 bg-white shadow-md">
        <h2 className="text-lg font-bold mb-2">Add New Item</h2>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="input input-bordered w-full mb-2"
        />
        <textarea
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="input input-bordered w-full mb-2"
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Item
        </button>
      </div>

      {/* Items List */}
      {items.length > 0 ? (
        items.map((item) => (
          <ItemList
            key={item._id}
            item={item}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))
      ) : (
        <p className="text-center mt-4 text-gray-500">No items found</p>
      )}
    </div>
  );
};

export default Items;

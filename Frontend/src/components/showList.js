import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./itemList";

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const [editingItem, setEditingItem] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

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

      setItems((prev) => [res.data, ...prev]); // add new item to top
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
    setEditingItem(item);
    setEditTitle(item.title);
    setEditDescription(item.description);
  };

  const saveEdit = async () => {
    try {
      const res = await axios.put(
        "http://localhost:3000/api/items",
        {
          id: editingItem._id,
          title: editTitle,
          description: editDescription,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setItems((prev) =>
        prev.map((item) => (item._id === res.data._id ? res.data : item))
      );
      setEditingItem(null);
    } catch (err) {
      console.error("Edit failed", err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading items...</p>;

  return (
    <div className="px-4 py-6 space-y-4">
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
      {/* Add Item Form */}

      {/* Item List */}
      {items.map((item) => (
        <ItemList
          key={item._id}
          item={item}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Edit Item</h2>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Title"
              className="input input-bordered w-full mb-3"
            />
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="Description"
              className="input input-bordered w-full mb-3"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="btn btn-error"
                onClick={() => setEditingItem(null)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={saveEdit}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Items;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./itemList";

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p className="text-center mt-10">Loading items...</p>;
  if (!items.length) return <p className="text-center mt-10">No items found</p>;

  return (
    <div className="px-4 py-6">
      {items.map((item) => (
        <ItemList key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Items;

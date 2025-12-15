import React from "react";

const ItemList = ({ item, onDelete, onEdit }) => {
  return (
    <div className="card card-side bg-blue-100 shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.description || "No description available"}</p>

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onEdit(item)}
          >
            Edit
          </button>

          <button
            className="btn btn-error btn-sm"
            onClick={() => onDelete(item._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;

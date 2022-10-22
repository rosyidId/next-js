import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ListItem = ({ todos, handleHapusItem, handleRubahItem, index }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div key={index}>
      {/* <div>{todos.status === "completed" ? <></> : <></>}</div> */}
      <div className="hover:bg-slate-600 cursor-pointer">
        {todos.status === "completed" ? (
          <div className="flex items-center justify-between bg-slate-500/30 text-white p-5 rounded-md mb-2">
            <div className="flex">
              <p className="ml-2 font-semibold">{todos.todo}</p>
            </div>
            <div>
              <button onClick={() => handleHapusItem(index)}>
                <FaTrash className="text-red-500" />
              </button>
              <button onClick={() => setOpen(!open)}>
                <FaEdit className="text-white ml-3" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-slate-500/30 text-white p-5 rounded-md mb-2">
            <div className="flex items-center">
              {open ? (
                <input type="text" className="absolute p-4 bg-transparent border rounded" />
              ): (
                <p className="ml-2 font-semibold">{todos.todo}</p>
              )}
            </div>
            <div>
              <button onClick={() => handleHapusItem(index)}>
                <FaTrash className="text-red-500" />
              </button>
              <button onClick={() => setOpen(!open)}>
                <FaEdit className="text-white ml-3" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;

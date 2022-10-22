import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";


const List = ({ data, handleHapusItem, handleRubahItem }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  if (!todos.length > 0) {
    return (
      <ul>
        <ol>
          <li>Masukkan beberapa data</li>
        </ol>
      </ul>
    );
  }
  return (
    <div className=" ">
      {todos.map((item, index) => (
        <ListItem key={index}
          index={index}
          todos={item}
          handleHapusItem={handleHapusItem}
          handleRubahItem={handleRubahItem}
        />
      ))}
    </div>
  );
};

export default List;

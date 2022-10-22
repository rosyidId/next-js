import { useEffect, useState } from "react";
import InputText from "../components/InputText";
import List from "../components/List";

export default function Home() {
  const dataTesting = [
    { todo: "belajar", status: "belum dikerjakan" },
    { todo: "mengerjakan PR", status: "belum dikerjakan" },
    { todo: "kuliah", status: "belum dikerjakan" },
    { todo: "ngoding", status: "belum dikerjakan" },
  ];

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(dataTesting);
  }, []);

  const handleHapusItem = (index) => {
    let itemSaatIni = [...todos];
    itemSaatIni.splice(index, 1);
    setTodos((itemSebelum) => itemSaatIni);
    console.log({ index, itemSaatIni });
  };

  const handleRubahItem = (index) => {
    let itemSaatIni = [...todos];
    itemSaatIni[index].status = "completed";
    console.log({ index, itemSaatIni });
    setTodos((itemSebelum) => itemSaatIni);
  };


  const tambahItem = (obj) => {
    let itemBaru = [...todos];
    itemBaru.push(obj);
    console.log({ obj, itemBaru });
    setTodos((itemSebelum) => itemBaru);
  };

  useEffect(() => {
    console.log("rubah dari from App.js");
  }, [todos]);

  if (!todos.length > 0) {
    return <p>Data tidak ada ......</p>;
  }

  return (

    <>
      <div className="bg-green-500/30  shadow-lg flex justify-center items-center  mx-auto max-w-2xl rounded-lg my-10 p-5">
        <div className="w-full">
          <header className="flex items-center justify-center mb-12">
            <h3 className="text-white font-bold text-2xl">Todo list app</h3>
          </header>
          <InputText tambahItem={tambahItem} />
          <div>
            <List
              data={todos}
              handleHapusItem={handleHapusItem}
              handleRubahItem={handleRubahItem}
            />
          </div>
        </div>
      </div>
    </>

  );
}

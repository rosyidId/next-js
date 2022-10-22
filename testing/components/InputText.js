import React, { useState } from "react";

const InputText = ({tambahItem}) => {
  const [inputVal, setInputVal] = useState("");

  const handleInput = (e) => {
    e.preventDefault();

    setInputVal((inputSebelum) => e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    tambahItem({todo: inputVal, status: "pending"})
    setInputVal("")

    console.log("item baru di tambah!");
  }

  return (
    <form className="flex mb-10" onSubmit={onSubmit} >
      <input placeholder="Masukkan apa rencana anda..." type="text" className="mt-1 block w-full p-5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-white text-white focus:ring-0
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 bg-transparent"  value={inputVal} onChange={(e) => handleInput(e)} />
    </form>
  );
};

export default InputText;

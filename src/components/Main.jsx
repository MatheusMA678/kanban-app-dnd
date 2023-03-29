import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";
import { gray } from "tailwindcss/colors";
import { Kanban } from "./Kaban";

export const Main = ({ value, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-50 text-black mt-1 p-10 overflow-y-auto rounded-tl-3xl flex flex-col gap-12">
      <h1 className="text-4xl font-bold">Meu Kanban</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full h-14 flex items-stretch gap-4"
      >
        <button className="hover:bg-purple-500/80 active:bg-purple-500/50 transition font-semibold text-white bg-purple-500 px-6 py-2 flex items-center rounded-lg shadow-lg gap-2">
          <FunnelSimple size={28} weight={"bold"} />
          Filtrar
        </button>
        <div className="pl-4 flex items-center gap-2 bg-white rounded-lg shadow-lg w-full">
          <MagnifyingGlass size={28} color={gray[400]} />
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="bg-white flex-1 px-4 outline-none placeholder:text-gray-400"
            placeholder="Pesquise suas tarefas..."
          />
        </div>
      </form>
      <Kanban />
    </div>
  );
};

import { Cards, Gear, UsersThree, File } from "@phosphor-icons/react";
import React, { useState } from "react";
import { v4 } from "uuid";

const links = [
  {
    id: v4(),
    label: "Boards",
    href: "/",
    icon: <Cards size={28} weight="bold" />,
  },
  {
    id: v4(),
    label: "Equipes",
    href: "/",
    icon: <UsersThree size={28} weight="bold" />,
  },
  {
    id: v4(),
    label: "Relatórios",
    href: "/",
    icon: <File size={28} weight="bold" />,
  },
  {
    id: v4(),
    label: "Ajustes",
    href: "/",
    icon: <Gear size={28} weight="bold" />,
  },
];

export const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(0);

  return (
    <div className="py-12 px-8">
      <h1 className="text-4xl font-semibold mb-8">Kanban</h1>
      <nav>
        <ul className="flex flex-col gap-2">
          {links.map((link, index) => (
            <li key={link.id} onClick={() => setCurrentLink(index)}>
              <div
                className={`${
                  currentLink === index
                    ? "text-white font-semibold bg-white/50 hover:bg-white/50"
                    : "hover:bg-white/20"
                } transition rounded-lg p-2 flex items-center gap-2 cursor-pointer`}
              >
                {link.icon}
                {link.label}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

import { v4 as uuid } from "uuid";

const itemsFromBackEndToDo = [
  {
    id: uuid(),
    card: {
      title: "#boraCodar um Kanban 🧑‍💻",
      content:
        "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
      tag: "rocketseat",
    },
  },
  {
    id: uuid(),
    card: {
      title: "Manter a ofensiva 🔥",
      content:
        "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
      tag: "rocketseat",
    },
  },
  {
    id: uuid(),
    card: {
      title: "Almoçar 🥗",
      content:
        "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
      tag: "autocuidado",
    },
  },
];

const itemsFromBackEndDoing = [
  {
    id: uuid(),
    card: {
      title: "Conferir o novo desafio 🚀",
      content:
        "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
      tag: "desafio",
    },
  },
  {
    id: uuid(),
    card: {
      title: "Ser incrível 😎",
      content:
        "Sempre me lembrar de manter minha autenticidade e espalhar amor",
      tag: "autocuidado",
    },
  },
];

const itemsFromBackEndDone = [
  {
    id: uuid(),
    card: {
      title: "#boraCodar uma página de login 🧑‍💻",
      content:
        "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir uma página de login.",
      tag: "desafio",
    },
  },
];

export const columnsFromBackEnd = {
  [uuid()]: {
    name: "A fazer",
    items: itemsFromBackEndToDo,
  },
  [uuid()]: {
    name: "Fazendo",
    items: itemsFromBackEndDoing,
  },
  [uuid()]: {
    name: "Feito",
    items: itemsFromBackEndDone,
  },
};

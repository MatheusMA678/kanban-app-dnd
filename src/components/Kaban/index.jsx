import React, { useState } from "react";
import { columnsFromBackEnd } from "../../data";
import { Tasks } from "./Tasks";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const onDragEnd = (result, data, setData) => {
  if (!result.destination) return;

  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = data[source.droppableId];
    const destColumn = data[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setData({
      ...data,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = data[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setData({
      ...data,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

export const Kanban = () => {
  const [data, setData] = useState(columnsFromBackEnd);

  return (
    <section className="flex flex-col sm:flex-row gap-10 sm:gap-5">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, data, setData)}>
        {Object.entries(data).map(([columnId, column]) => {
          return (
            <div className="flex flex-col gap-8" key={columnId}>
              <h2 className="font-semibold text-2xl">{column.name}</h2>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`${
                      snapshot.isDraggingOver ? "bg-purple-500/20" : ""
                    } flex flex-col gap-4 sm:w-[320px] min-h-[200px] sm:min-h-[500px] rounded-lg p-4`}
                  >
                    <Tasks data={column.items} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </section>
  );
};

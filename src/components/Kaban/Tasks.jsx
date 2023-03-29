import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Tasks = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
              <div
                {...provided.dragHandleProps}
                {...provided.draggableProps}
                ref={provided.innerRef}
                className={`${
                  snapshot.isDragging ? "bg-purple-600" : "bg-white"
                } transition rounded-lg shadow-lg flex flex-col gap-2 p-4 sm:w-full`}
              >
                <h3 className="font-semibold">{item.card.title}</h3>
                <p className="text-sm">{item.card.content}</p>
                <span className="font-semibold text-xs text-purple-500 bg-purple-500/20 rounded-lg px-2 py-1 w-fit">
                  {item.card.tag}
                </span>
              </div>
            )}
          </Draggable>
        );
      })}
    </>
  );
};

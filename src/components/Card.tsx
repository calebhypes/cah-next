import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  type: string;
  text: string;
  id: number;
};

export default function Card(props: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });
  const styles =
    props.type === "black" ? "bg-black text-white" : "bg-white text-black";
  const dndStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className={`rounded text-left text-wrap ${styles} text-base w-48 h-64 px-2.5 pt-2.5 shadow-lg`}
      ref={setNodeRef}
      style={dndStyle}
      {...attributes}
      {...listeners}
    >
      {props.text}
    </div>
  );
}

import React, { PropsWithChildren } from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import Card from "./Card";
import { ICard } from "@/types/game";

type Props = {
  answer: ICard;
};

function AnswerSlot(props: PropsWithChildren<Props>) {
  const { setNodeRef } = useDroppable({
    id: "ANSWER",
  });

  return (
    <SortableContext id="answer" items={[props.answer]}>
      <div
        ref={setNodeRef}
        className="rounded flex justify-center items-center bg-gradient-to-t from-slate-500 text-slate-50 text-base w-52 h-72 shadow-lg"
      >
        {props.answer.id > 0 ? (
          <Card
            key={props.answer.id}
            id={props.answer.id}
            type={props.answer.type}
            text={props.answer.text}
          />
        ) : (
          "Answer Card"
        )}
      </div>
    </SortableContext>
  );
}

export default AnswerSlot;

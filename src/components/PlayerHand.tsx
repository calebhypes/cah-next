import React, { PropsWithChildren } from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import Card from "./Card";
import { ICard } from "@/types/game";

type Props = {
  hand: ICard[];
};

function PlayerHand(props: PropsWithChildren<Props>) {
  const { setNodeRef } = useDroppable({
    id: "HAND",
  });

  return (
    <SortableContext id="hand" items={props.hand}>
      <div className="flex flex-row gap-x-2" ref={setNodeRef}>
        {props.hand.map((card) => (
          <Card key={card.id} id={card.id} type={card.type} text={card.text} />
        ))}
      </div>
    </SortableContext>
  );
}

export default PlayerHand;

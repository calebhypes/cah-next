"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  //   horizontalListSortingStrategy,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import Card from "./Card";

function PlayArea() {
  const testHand = [
    {
      type: "white",
      text: "A PowerPoint Presentation.",
      id: 1,
    },
    {
      type: "white",
      text: "Crippling debt.",
      id: 2,
    },
    {
      type: "white",
      text: "Overthrowing the government.",
      id: 3,
    },
    {
      type: "white",
      text: "A box that is concious and wishes it weren't a box.",
      id: 4,
    },
    {
      type: "white",
      text: "A disappointing birthday party.",
      id: 5,
    },
    {
      type: "white",
      text: "An emotionally draining friendship",
      id: 6,
    },
    {
      type: "white",
      text: "Meatloaf, the food.",
      id: 7,
    },
  ];

  const testQuestion = {
    type: "black",
    text: "Hey baby, come back to my place and I'll show you __________.",
    id: 8,
  };

  const [hand, setHand] = useState(testHand);

  const sensors = useSensors(useSensor(PointerSensor));

  // const draggableMarkup = (
  //     <Draggable id="draggable">Drag Me</Draggable>
  // )

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragOver={handleDragOver}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <Card
          id={testQuestion.id}
          type={testQuestion.type}
          text={testQuestion.text}
        />
        <SortableContext items={[]} strategy={rectSortingStrategy}>
          <div className="rounded flex justify-center items-center bg-gradient-to-t from-slate-500 text-slate-50 text-base w-52 h-72 shadow-lg">
            Answer Card
          </div>
        </SortableContext>
        <SortableContext items={hand} strategy={rectSortingStrategy}>
          <div className="flex flex-row gap-x-2">
            {hand.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                type={card.type}
                text={card.text}
              />
            ))}
          </div>
        </SortableContext>
      </div>
    </DndContext>
  );

  function handleDragOver(event) {
    // handle onDragOver
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    console.log(active);
    console.log(over);
    if (active.id !== over.id) {
      setHand((hand) => {
        const oldIndex = hand.findIndex((card) => card.id === active.id);
        const newIndex = hand.findIndex((card) => card.id === over.id);

        return arrayMove(hand, oldIndex, newIndex);
      });
    }
  }
}

export default PlayArea;

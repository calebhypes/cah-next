"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";

import { arrayMove } from "@dnd-kit/sortable";

import Card from "./Card";
import AnswerSlot from "./AnswerSlot";
import PlayerHand from "./PlayerHand";

import { ICard } from "@/types/game";

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
  const [answer, setAnswer] = useState<ICard>({ type: "", text: "", id: 0 });

  const sensors = useSensors(useSensor(PointerSensor));

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
        <AnswerSlot answer={answer} />
        <PlayerHand hand={hand} />
      </div>
    </DndContext>
  );

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const initialContainer = active.data.current?.sortable?.containerId;
    const targetContainer = over.data.current?.sortable?.containerId;

    if (!initialContainer) return;

    // TODO - Handle remaining Drag Over logic
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || !active.data.current || !over.data.current) return;

    if (active.id === event.over.id) return;

    if (
      active.data.current.sortable.containerId !==
      over.data.current.sortable.containerId
    )
      return;

    const containerName = active.data.current.sortable.containerId;
    const oldHandIndex =
      containerName === "HAND"
        ? hand.findIndex((card) => card.id === active.id)
        : -1;
    const newIndex =
      containerName === "HAND"
        ? hand.findIndex((card) => card.id === over.id)
        : 0;

    if (containerName === "HAND") {
      setHand((hand) => {
        return arrayMove(hand, oldHandIndex, newIndex);
      });
    } else {
      // TODO - handle answer logic
    }
  }
}

export default PlayArea;

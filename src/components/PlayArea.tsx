'use client'
import React, {useState} from 'react';
import { DndContext } from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';

import Card from './Card';

function PlayArea() {
    const testHand = [
        {
            type: "white",
            text: "A PowerPoint Presentation."
        },
        {
            type: "white",
            text: "Crippling debt."
        },
        {
            type: "white",
            text: "Overthrowing the government."
        },
        {
            type: "white",
            text: "A box that is concious and wishes it weren't a box."
        },
        {
            type: "white",
            text: "A disappointing birthday party."
        },
        {
            type: "white",
            text: "An emotionally draining friendship"
        },
        {
            type: "white",
            text: "Meatloaf, the food."
        }
    ]

    const testQuestion = {
        type: "black",
        text: "Hey baby, come back to my place and I'll show you __________."
    };

    const containers = ['A', 'B', 'C'];
    const [parent, setParent] = useState(null);
    const draggableMarkup = (
        <Draggable id="draggable">Drag Me</Draggable>
    )
    
    return (
        <DndContext onDragEnd={handleDragEnd}> 
            <div className="flex flex-col justify-center items-center gap-5">
                <Card type={testQuestion.type} text={testQuestion.text} />
                <div className="flex flex-row gap-x-2">
                    {testHand.map((card, idx) => (
                        <Card key={idx} type={card.type} text={card.text} />
                    ))}
                </div>
            </div>
            {parent === null ? draggableMarkup : null}
            {containers.map((id) => (
                <Droppable key={id} id={id}>
                    {parent === id ? draggableMarkup : 'Drop here'}
                </Droppable>
            ))}
        </DndContext>
    );
    function handleDragEnd(event) {
        const {over} = event;
        setParent(over ? over.id : null);
    }
}

export default PlayArea;
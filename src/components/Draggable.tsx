import React, {PropsWithChildren} from 'react';
import { useDraggable } from '@dnd-kit/core';

type Props = {
    id: string
};

export function Draggable(props: PropsWithChildren<Props>) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    );
};
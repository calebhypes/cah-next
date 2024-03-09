import React, {PropsWithChildren} from 'react';
import { useDroppable } from '@dnd-kit/core';

type Props = {
    id: string,
    key: string,
}

export function Droppable(props: PropsWithChildren<Props>) {
    const {isOver, setNodeRef} = useDroppable({
        id: props.id
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };

    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
};
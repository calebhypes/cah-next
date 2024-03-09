import React from 'react';

type Props = {
    type: string,
    text: string
};

export default function Card(props: Props) {
     const styles = props.type === "black" ? "bg-black text-white" : "bg-white text-black";
    return (
        <div className={`rounded text-left text-wrap ${styles} text-base w-48 h-64 px-2.5 pt-2.5 shadow-lg`}>{props.text}</div>
    )
}
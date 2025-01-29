import React from 'react';

// Define the type for the data items
export type DataItem = {
    itemNumber: number;
    title: string;
};


const Item: React.FC<DataItem> = (props: DataItem) => {
    return <li key={props.itemNumber}>{props.title}</li>;
};

export default Item;
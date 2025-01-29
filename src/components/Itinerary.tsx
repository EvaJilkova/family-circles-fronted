import {useEffect, useState} from "react";
import Item, {DataItem} from "./Item.tsx";

const items: DataItem[] = [
    { itemNumber: 1, title: 'title1' },
    { itemNumber: 2, title: 'title2' },
];

export const Itinerary: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([]); // State to hold data

    useEffect(() => {
        setData(items);
    }, []);

    return (
        <ul>
            {data.map(x => (
                <Item key={x.itemNumber} itemNumber={x.itemNumber} title={x.title}></Item>
            ))}
        </ul>
    );
};

export default Itinerary;
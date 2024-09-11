import { ReactNode } from "react";

interface ListProps<T> {
    items: T[],
    createItem: (item: T) => ReactNode
}

const List = <T extends any>({ items, createItem }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>
                    {createItem(item)}
                </li>
            ))}
        </ul>
    )
}

export default List

import React, { useState } from 'react';

type DraggableListProps = {
    items: string[]
    onChange: (newOrder: string[]) => void
};

const DraggableList: React.FC<DraggableListProps> = ({ items, onChange }) => {
    const [currentItems, setCurrentItems] = useState<string[]>(items)
    const [draggedItem, setDraggedItem] = useState<number | null>(null)

    const handleDragStart = (index: number) => {
        setDraggedItem(index)
    };

    const handleDrop = (index: number) => {
        if (draggedItem === null || draggedItem === index) {
            setDraggedItem(null)
            return
        }
        const updatedItems = [...currentItems]
        const [removedItem] = updatedItems.splice(draggedItem, 1)
        updatedItems.splice(index, 0, removedItem)

        setCurrentItems(updatedItems)
        onChange(updatedItems)
        setDraggedItem(null)
    };

    const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
        e.preventDefault()
    };

    return (
        <ul>
            {currentItems.map((item, index) => (
                <li
                    key={item}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(index)}
                    style={{
                        padding: '10px',
                        margin: '5px 0',
                        backgroundColor: draggedItem === index ? '#ffe4d0' : '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        width: '100px',
                        cursor: 'grab',
                        listStyleType: 'none'
                    }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default DraggableList;

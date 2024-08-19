import { useState } from "react";
import { productFilters } from "@/data/StoreData";
import { useRouter } from "next/router";
import Arrivals from "@/components/global/Modern/Arrivals";

export default function Search() {
    const router = useRouter();

    // State to store checked items
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleCheckboxChange = (itemId: string) => {
        setSelectedItems(prevState =>
            prevState.includes(itemId)
                ? prevState.filter(id => id !== itemId) // Remove item if already selected
                : [...prevState, itemId] // Add item if not selected
        );
    };

    const handleSelectedItemClick = (itemId: string) => {
        setSelectedItems(prevState =>
            prevState.filter(id => id !== itemId) // Remove item from selection
        );
    };

    const handleClearAll = () => {
        setSelectedItems([]);
    };

    return (
        <div className="flex mx-auto container">
            <div className="w-64 p-4">
                <div className="mb-4">
                    <a className="mr-2">Home</a> / <a className="ml-2">Search</a>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold">Filters</h2>
                    <button
                        onClick={handleClearAll}
                        className="text-gray-500 hover:text-gray-900 text-xs transition-all duration-400"
                    >
                        Clear All
                    </button>
                </div>

                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {selectedItems.map(itemId => {
                            const item = productFilters.flatMap(filter =>
                                filter.items
                            ).find(item => item.id === itemId);

                            return item ? (
                                <div
                                    key={itemId}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSelectedItemClick(itemId);
                                    }}
                                    className="bg-gray-100 text-gray-800 px-4 py-1 rounded-md text-sm border-gray-300 border flex items-center justify-between cursor-pointer hover:border-gray-800 transition-all duration-400"
                                >
                                    {item.name}
                                    <button className="text-gray-500 text-lg ml-2">
                                        &times;
                                    </button>
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>

                <hr className="border-t border-gray-300 my-4" />

                {productFilters.map(({ id, group_name, items, childElement }) => (
                    <div key={id} className="mb-6">
                        <h3 className="text-md font-medium mb-4">{group_name}</h3>
                        <ul className="space-y-2">
                            {items.map((item) => (
                                <li className="flex w-full" key={item.id}>
                                    <label htmlFor={item.id} className="flex items-center w-full cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-all duration-300">
                                        <input
                                            type="checkbox"
                                            id={item.id}
                                            className="mr-2"
                                            checked={selectedItems.includes(item.id)}
                                            onChange={() => handleCheckboxChange(item.id)}
                                        />
                                        {childElement ? childElement(item) : <span>{item.name}</span>}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        <hr className="border-t border-gray-300 mt-4" />
                    </div>
                ))}
            </div>

            <div className="flex-1 p-4">
                <Arrivals sectionTitle="Shop"/>
            </div>

        </div>
    );
}

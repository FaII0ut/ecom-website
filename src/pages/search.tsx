import { productFilters } from "@/data/StoreData";
import { useRouter } from "next/router";

export default function Search() {
    const router = useRouter()
    const handleClick = () => {
        router.push({ pathname: "/search", query: { id: "Hello" } }, undefined, { shallow: true })
    }
    return (
        <div className="flex mx-auto container">
            <div className="w-64 p-4">
                <div className="mb-4">
                    <a className="mr-2">Home</a> / <a className="ml-2">Search</a>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Filters</h2>
                <hr className="border-t border-gray-300 my-4" />

                {productFilters.map(({ id, group_name, items, childElement }) => (
                    <div key={id} className="mb-6">
                        <h3 className="text-md font-medium mb-4">{group_name}</h3>
                        <ul className="space-y-2">
                            {items.map((item) => (
                                <li onClick={handleClick} className="flex flex-row items-center" key={item.id}>
                                    <input type="checkbox" id={item.id} className="mr-2" />

                                    {childElement ? childElement(item) :
                                        <label htmlFor={item.id}>{item.name}</label>
                                    }
                                </li>
                            ))}
                        </ul>
                        <hr className="border-t border-gray-300 mt-4" />

                    </div>
                ))}
            </div>

            <div className="flex-1 p-4">
                <h2 className="text-2xl font-bold mb-4">Shop</h2>
            </div>
        </div>
    );
}

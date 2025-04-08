import { useState } from "react";

const data = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  //includes is using because hame agar string "apple" ke andra se ap bhi search kare then wo true he dega 
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <ul className="mt-4 border rounded-md p-2">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index} className="p-1 border-b last:border-b-0">
              {item}
            </li>
          ))
        ) : (
          <li className="p-1 text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
}

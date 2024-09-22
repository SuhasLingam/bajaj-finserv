import React, { useState } from "react";

function App() {
  const [jsonInput, setJsonInput] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState([]);

  // Handle form submission and API call
  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      const res = await fetch("http://localhost:3000/bfhl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedInput),
      });
      const data = await res.json();
      setResponse(data);
      setError(null);
    } catch (e) {
      setError("Invalid JSON format or API Error.");
    }
  };

  // Handle dropdown selection for filtering response
  const handleFilterChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFilter(value);
  };

  // Filter the API response based on selected options
  const filteredResponse = () => {
    if (!response) return [];
    const { numbers, alphabets, highest_lowercase_alphabet } = response;
    const result = [];
    if (filter.includes("Numbers"))
      result.push({ label: "Numbers", value: numbers });
    if (filter.includes("Alphabets"))
      result.push({ label: "Alphabets", value: alphabets });
    if (filter.includes("Highest Lowercase Alphabet"))
      result.push({
        label: "Highest Lowercase Alphabet",
        value: highest_lowercase_alphabet,
      });
    return result;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-700 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        {response ? "Response Details" : "Bajaj Fiserv Health Task 1"}
      </h1>

      <div className="backdrop-blur-lg bg-white bg-opacity-10 rounded-xl shadow-md p-6 w-full max-w-xl">
        <textarea
          className="w-full p-4 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
          rows="5"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Enter JSON, e.g. {"data": ["A", "b", "1"]}'
        />
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600 transition-all duration-300"
        >
          Process Data
        </button>

        {error && <div className="text-red-500 mt-4 text-center">{error}</div>}

        {response && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-center">
              Filtered Response:
            </h2>
            <select
              multiple={true}
              onChange={handleFilterChange}
              className="w-full mt-4 p-2 bg-transparent border border-white rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="Alphabets">Alphabets</option>
              <option value="Numbers">Numbers</option>
              <option value="Highest Lowercase Alphabet">
                Highest Lowercase Alphabet
              </option>
            </select>

            <div className="mt-6 space-y-4 text-center">
              {filteredResponse().map((item) => (
                <div
                  key={item.label}
                  className="p-3 bg-white bg-opacity-20 rounded-lg backdrop-blur-md shadow-lg"
                >
                  <strong className="text-lg font-semibold">
                    {item.label}:{" "}
                  </strong>
                  <span>{item.value.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

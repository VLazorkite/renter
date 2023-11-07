import { useState } from "react";

export default function PropertyForm({ onPropertySubmit }: any) {
  const [newProperty, setNewProperty] = useState({ address: "", type: "" });

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    onPropertySubmit(newProperty);
    setNewProperty({ address: "", type: "" });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewProperty({ ...newProperty, [name]: value });
  };

  return (
    <form onSubmit={handleFormSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          name="address"
          value={newProperty.address}
          onChange={handleInputChange}
          placeholder="Address"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="type"
          value={newProperty.type}
          onChange={handleInputChange}
          placeholder="Type"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Add Property
      </button>
    </form>
  );
}

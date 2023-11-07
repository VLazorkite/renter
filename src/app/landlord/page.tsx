"use client";
import PropertyForm from "@/components/propertyaddform";
import { findLandlord } from "@/db/dblandlord/dblandlord";
import {
  UserProfile,
  useUser,
  withPageAuthRequired,
} from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";

const landlordProperties = [
  { id: 1, address: "123 Main St", type: "Apartment" },
  { id: 2, address: "456 Elm St", type: "House" },
];

export default withPageAuthRequired(function Landlord() {
  const { user, error, isLoading } = useUser();
  const [inLandlord, setInLandlord] = useState<landlord | undefined>();
  const [properties, setProperties] = useState<property[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  console.log("worksing soon");

  useEffect(() => {
    console.log(user);
    async function getLandlord() {
      if (user) {
        console.log(user.email);

        //   const inaLandlord = await;
        findLandlord(user.email);
      }
    }
    getLandlord();
  });
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;
  if (!user) {
    console.log("no user");

    return <h1>You are not logged in</h1>;
  }
  console.log(user);

  const handleAddProperty = () => {
    setIsFormVisible(true);
  };

  const handlePropertySubmit = (newProperty: any) => {
    // Add the new property to the list and hide the form
    setProperties([...properties, newProperty]);
    setIsFormVisible(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Landlord Properties</h1>

      {isFormVisible ? (
        // Display the form component
        <PropertyForm onPropertySubmit={handlePropertySubmit} />
      ) : (
        // Button to show the form
        <button
          onClick={handleAddProperty}
          className="bg-blue-500 text-white rounded-md px-4 py-2 mb-4"
        >
          Add Property
        </button>
      )}

      {/* Render the list of properties */}
      {properties.map((property) => (
        <div
          key={property.address}
          className="bg-white rounded-lg p-4 shadow-md mb-4"
        >
          <h2 className="text-xl font-semibold">Property Details</h2>
          <p className="text-gray-600">Address: {property.address}</p>
        </div>
      ))}
    </div>
  );
});

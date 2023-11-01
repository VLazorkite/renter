// export default function Dashboard() {
//   return (
//     <>
//       <header>Welcome to the dashboard!</header>
//     </>
//   );
// }

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Renter Dashboard</h1>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Rent Information</h2>
          <div className="mt-2">
            <p className="text-gray-600">Rent Amount: $1,000</p>
            <p className="text-gray-600">Length of Contract: 12 months</p>
          </div>
        </div>
      </div>
    </div>
  );
}

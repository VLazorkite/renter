export default function Admin() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="bg-blue-600 text-white h-screen w-64 p-4">
        <h1 className="text-2xl font-semibold mb-4">Landlord Dashboard</h1>
        {/* Sidebar navigation links */}
        <ul>
          <li className="mb-2">
            <a href="#" className="block text-sm">
              Properties
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block text-sm">
              Tenants
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block text-sm">
              Finances
            </a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-4">
        <h2 className="text-2xl font-semibold mb-4">Properties</h2>
        {/* Property list, filters, and management components */}
      </div>
    </div>
  );
}

// "use client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function tenant() {
  const tenancyAgreementLink = "https://example.com/tenancy-agreement.pdf";
  const address = "123 Main Street, Apartment 4B, City, State";

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

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Tenancy Agreement</h2>
          <div className="mt-2">
            <a
              href={tenancyAgreementLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Tenancy Agreement
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Address</h2>
          <div className="mt-2">
            <p className="text-gray-600">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

// export default withPageAuthRequired(tenant);

// export const getServerSideProps = withPageAuthRequired();

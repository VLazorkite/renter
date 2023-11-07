import { createLandlord } from "@/db/dblandlord/dblandlord";
import Link from "next/link";

const exampleProperties: property[] = [
  {
    address: "123 Main St",
    occupation_status: true,
    tenant: {
      name: "John Doe",
      contact_details: {
        email: "john@example.com",
        phone: "123-456-7890",
      },
      lease_details: {
        length: 12,
        monthly_rent: {
          amount: 1000,
          due_date: new Date(),
          status: "paid",
        },
        start_date: new Date(),
        deposit: 2000,
      },
    },
  },
  {
    address: "456 Elm St",
    occupation_status: false,
  },
  {
    address: "789 Oak St",
    occupation_status: true,
    tenant: {
      name: "Jane Smith",
      contact_details: {
        email: "jane@example.com",
        phone: "987-654-3210",
      },
      lease_details: {
        length: 24,
        monthly_rent: {
          amount: 1200,
          due_date: new Date(),
          status: "unpaid",
        },
        start_date: new Date(),
        deposit: 2500,
      },
    },
  },
  {
    address: "101 Pine St",
    occupation_status: true,
    tenant: {
      name: "Bob Johnson",
      contact_details: {
        email: "bob@example.com",
        phone: "555-123-4567",
      },
      lease_details: {
        length: 6,
        monthly_rent: {
          amount: 800,
          due_date: new Date(),
          status: "pending",
        },
        start_date: new Date(),
        deposit: 1500,
      },
    },
  },
  {
    address: "222 Cedar St",
    occupation_status: false,
  },
];

export default function Admin() {
  const adminLandlord: landlord = {
    name: "Maxwell Rotich",
    contact_details: {
      email: "rotichmax@gmail.com",
    },
    locations: ["Pittsburgh, USA"],
    properties: exampleProperties,
  };

  createLandlord(adminLandlord);

  return (
    <>
      <h1>Added successfully</h1>
      <button>
        <Link href="../landlord">To landlord</Link>
      </button>
    </>
  );
}

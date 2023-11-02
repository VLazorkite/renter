interface Contact {
  email: string;
  phone: string;
}
interface Rent {
  amount: number;
  due_date: Date;
  status: "paid" | "unpaid" | "pending";
}
interface lease {
  length: number;
  monthly_rent: Rent;
  start_date: Date;
  deposit: number;
}
interface tenant {
  name: string;
  contact_details: Contact;
  lease_details: lease;
}
interface property {
  address: string;
  occupation_status: boolean;
  tenant: tenant | null | undefined;
}

interface landlord {
  name: string;
  contact_details: contact;
  locations: string[];
  properties: property[];
}

import { error } from "console";
import { Model } from "mongoose";

require("dotenv").config();
const { mongoose, Schema } = require("mongoose");

try {
  mongoose.connect(process.env.DBURI);
  console.log("connected successfully");
} catch (error) {
  console.error();
}

const contactSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  phone: String,
});

const leaseSchema = new Schema({
  length: Number,
  monthly_rent: {
    amount: Number,
    due_date: Date,
    status: String,
  },
});

const tenantSchema = new Schema({
  name: String,
  contact_details: contactSchema,
  lease_details: leaseSchema,
});

const propertySchema = new Schema({
  address: String,
  occupation_status: Boolean,
  tenant: tenantSchema,
});

const landlordSchema = new Schema({
  name: String,
  contact_details: contactSchema,
  locations: [String],
  properties: [propertySchema],
});

const Tenant = mongoose.model("Tenant", tenantSchema);
console.log("problem");

const Landlord = mongoose.model("Landlord", landlordSchema);
console.log("works");

export { Landlord, Tenant };
console.log("export successfull");

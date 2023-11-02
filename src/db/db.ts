require("dotenv").config();
const { mongoose, Schema } = require("mongoose");

mongoose.connect(process.env.DBURI);

const tenantSchema = new Schema({
  name: String,
  contact_details: {
    email: {
      type: String,
      unique: true,
    },
    phone: String,
  },
  lease_details: {
    length: Number,
    monthly_rent: {
      amount: Number,
      due_date: Date,
      status: String,
    },
    start_date: Date,
    deposit: Number,
  },
});

const Tenant: tenant = new mongoose.model("Tenant", tenantSchema);

const landlordSchema = new Schema({
  name: String,
  contact_details: {
    email: {
      type: String,
      unique: true,
    },
    phone: String,
  },
  locations: [String],

  properties: [
    {
      address: String,
      occupation_status: Boolean,

      tenant: {
        name: String,
        contact_details: {
          email: {
            type: String,
            unique: true,
          },
          phone: String,
        },
        lease_details: {
          length: Number,
          monthly_rent: {
            amount: Number,
            due_date: Date,
            status: String,
          },
          start_date: Date,
          deposit: Number,
        },
      },
    },
  ],
});

const Landlord: landlord = new mongoose.model("Landlord", landlordSchema);

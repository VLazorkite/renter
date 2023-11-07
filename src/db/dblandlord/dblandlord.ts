import { Model } from "mongoose";
import { Landlord } from "../db";
import _ from "lodash";

console.log(Landlord.call());

async function createLandlord(newLandlord: landlord): Promise<landlord> {
  return await Landlord.create(newLandlord);
}

async function findLandlord(email: string | null | undefined) {
  // Promise<landlord | null>
  if (!email) {
    console.log("no email");

    return null;
  }
  console.log(email);
  //   console.log(Landlord);

  const foundLandlord: landlord | null = await Landlord.findOne({
    contact_details: {
      email: _.toLower(email),
    },
  });
  //   console.log(foundLandlord);

  //   return foundLandlord;
}

// async function updateLandlord(myLandlord: landlord) {}

export { createLandlord, findLandlord };

function addProperty(landlord: landlord, property: property) {
  property && landlord.properties.push(property);
}

function findProperty(landlord: landlord, property: property) {
  let lProperties = landlord.properties;
  for (let i = 0; i < lProperties.length; i++) {
    if (
      lProperties[i].address == property.address &&
      lProperties[i].tenant == property.tenant
    ) {
      return lProperties[i];
      break;
    }
  }
}
function removeProperty(landlord: landlord, property: property) {
  let newProperties = landlord.properties;
  let n;

  for (let i = 0; i < landlord.properties.length; i++) {
    if (
      newProperties[i].address == property.address &&
      newProperties[i].tenant == property.tenant
    ) {
      n = i;
      break;
    }
  }

  n && (landlord.properties = newProperties.splice(n, 1));
}

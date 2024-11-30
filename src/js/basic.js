/*export function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}*/


export function health(params) {
  let result;
  if (params.health > 50) {
    result = "healthy";
  } else if (50 > params.health & params.health > 15) {
    result = "wounded";
  } else {
    result = "critical";
  }
  return result;
}

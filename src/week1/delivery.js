function solution(cap, n, deliveries, pickups) {
  let distance = 0;
  let freeDelivery = 0;
  let freePickup = 0;

  for (let i = n - 1; i >= 0; i--) {
    const delivery = Math.max(deliveries[i] - freeDelivery, 0);
    const pickup = Math.max(pickups[i] - freePickup, 0);

    const visitCount = Math.ceil(Math.max(delivery, pickup) / cap);

    freeDelivery = freeDelivery + visitCount * cap - deliveries[i];
    freePickup = freePickup + visitCount * cap - pickups[i];
    distance += visitCount * (i + 1) * 2;
  }

  return distance;
}

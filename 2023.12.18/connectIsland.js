function solution(n, costs) {
  let answer = 0;
  let count = 0;
  let arr = [];

  function isConnected(a, b) {
    return arr[a] !== undefined && arr[a] === arr[b];
  }

  function connect(a, b) {
    if (arr[a] === undefined && arr[b] === undefined) {
      arr[a] = arr[b] = a;
      return;
    }

    if (arr[b] === undefined) {
      arr[b] = arr[a];
      return;
    }

    if (arr[a] === undefined) {
      arr[a] = arr[b];
      return;
    }

    const val = arr[b];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        arr[i] = arr[a];
      }
    }
  }

  costs.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < costs.length; i++) {
    const [a, b, cost] = costs[i];
    const connected = isConnected(a, b);

    if (connected) {
      continue;
    }

    connect(a, b);
    answer += cost;
    count += 1;

    if (count === n - 1) {
      break;
    }
  }

  return answer;
}

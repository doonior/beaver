function pushDominoes(dominoes: string): string {
  let isPushed = false;
  const arr = dominoes.split("");

  do {
    isPushed = false;
    for (let i = 1; i < arr.length; i++) {
      if (
        arr[i] === "L" &&
        arr[i - 1] === "." &&
        (i === 1 || arr[i - 2] !== "R")
      ) {
        arr[i - 1] = "l";
        isPushed = true;
      }
    }
    for (let i = arr.length - 2; i >= 0; i--) {
      if (
        arr[i] === "R" &&
        arr[i + 1] === "." &&
        (i === arr.length - 2 || arr[i + 2] !== "L")
      ) {
        arr[i + 1] = "R";
        isPushed = true;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "l") {
        arr[i] = "L";
      }
    }
  } while (isPushed);

  return arr.join("");
}

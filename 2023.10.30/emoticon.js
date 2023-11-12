function solution(users, emoticons) {
  const discounts = [];
  const answer = [0, 0];
  const m = emoticons.length;

  function calcResult(depth) {
    if (depth === m) {
      let subscribeCount = 0;
      let revenue = 0;

      users.forEach((user) => {
        let price = 0;

        for (let i = 0; i < m; i++) {
          if (discounts[i] >= user[0]) {
            price += (emoticons[i] * (100 - discounts[i])) / 100;
          }
        }

        if (price >= user[1]) {
          subscribeCount++;
        } else {
          revenue += price;
        }
      });

      if (subscribeCount < answer[0]) {
        return;
      }

      if (subscribeCount === answer[0] && revenue <= answer[1]) {
        return;
      }

      answer[0] = subscribeCount;
      answer[1] = revenue;
      return;
    }

    for (let i = 1; i <= 4; i++) {
      discounts[depth] = i * 10;
      calcResult(depth + 1);
    }
  }

  calcResult(0);
  return answer;
}

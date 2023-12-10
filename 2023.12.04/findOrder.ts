function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const prerequisiteMap = Array.from({ length: numCourses }, () => []);

  prerequisites.forEach(([a, b]) => {
    prerequisiteMap[a].push(b);
  });

  const waitings = Array(numCourses).fill(false);
  const finished = Array(numCourses).fill(false);
  const orders = [];

  function takeCourse(course: number) {
    if (finished[course]) {
      return true;
    }

    if (waitings[course]) {
      return false;
    }

    waitings[course] = true;
    const canTakeCourse = prerequisiteMap[course].every((prerequisite) =>
      takeCourse(prerequisite)
    );

    if (canTakeCourse) {
      waitings[course] = false;
      finished[course] = true;
      orders.push(course);
    }

    return canTakeCourse;
  }

  for (let i = 0; i < numCourses; i++) {
    const result = takeCourse(i);

    if (!result) {
      return [];
    }
  }

  return orders;
}

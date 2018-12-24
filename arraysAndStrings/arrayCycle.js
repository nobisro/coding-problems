function hasCycle(arr) {
  //assuming no duplicates
  const base = arr[0]; //2
  let runner = arr[base]; //0

  if (base === undefined || runner === undefined) {
    return false;
  } else {
    while (runner !== undefined) {
      if (runner === base) {
        console.log("true");
        return true;
      } else {
        runner = arr[runner];
      }
    }
  }
  return false;
}

const yes1 = [3, 1, 5, 2, 4, 0];
const yes2 = [2, 1, 0];

hasCycle(yes2);
hasCycle(yes1);
//console.log(test1, test2);

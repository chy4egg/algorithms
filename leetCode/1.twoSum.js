// [1,2,3], 5 - (1,2)

// sulution O(n)
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return Array.from(map);
};

// test
const assert = (value, result) => {
  const assertionResult = value.toString() === result.toString();
  if (assertionResult) {
    console.log('ok');
  } else {
    console.log(`error: value: ${value} result: ${result}`);
  }
}

assert(twoSum([1,2,3], 5), [1,2]);
assert(twoSum([3,2,1], 5), [0,1]);
assert(twoSum([4,7,1], 8), [1,2]);
function twoSum(nums, target)
{
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) 
        {
        if (numMap.has(target - nums[i])) 
            {
            return [numMap.get(target - nums[i]), i];
            }
        numMap.set(nums[i], i);
        }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
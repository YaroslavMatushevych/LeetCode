function twoSum(nums: number[], target: number): number[] {
    const indicesMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (indicesMap.has(complement)) {
            return [indicesMap.get(complement), i];
        }

        indicesMap.set(nums[i], i);
    }

    // avoid ts
    return [0, 0]; 
}

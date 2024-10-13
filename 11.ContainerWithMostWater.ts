function maxArea(height: number[]): number {
    if (height.length <= 1) return 0;

    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const containerHeight = Math.min(height[left], height[right]);
        const currentArea = containerHeight * width;

        if (currentArea > maxArea) {
            maxArea = currentArea;
        }

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};
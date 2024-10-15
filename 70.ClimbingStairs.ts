
let mem: number[] = []

const climbStairs = function(n: number) {
    if (n <= 2) {
        return n
    }

    if (mem[n] !== undefined) return mem[n];

    mem[n] = climbStairs(n - 1) + climbStairs(n - 2);

    return mem[n];
};
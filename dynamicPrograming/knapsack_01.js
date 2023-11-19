// Memoization Solution
// Time: O(n * m), Space: O(n * m)
// Where n is the number of items & m is the capacity.
function memoization(profit, weight, capacity) {
    // A 2d array, with N rows and M + 1 columns, init with -1's
    let N = profit.length, M = capacity;
    let cache = new Array()
    for (let row = 0; row < N; row++) {
        cache.push(new Array(M + 1).fill(0));
    }
    console.log(cache);
    return memoHelper(0, profit, weight, capacity, cache);
}

function memoHelper(i, profit, weight, capacity, cache) {
    if (i == profit.length) {
        return 0;
    }
    if (cache[i][capacity] != 0) {
        return cache[i][capacity];
    }

    // Skip item i
    cache[i][capacity] = memoHelper(i + 1, profit, weight, capacity, cache);

    // Include item i
    let newCap = capacity - weight[i];
    if (newCap >= 0) {
        let p = profit[i] + memoHelper(i + 1, profit, weight, newCap, cache);
        // Compute the max
        cache[i][capacity] = Math.max(cache[i][capacity], p);
    }
    console.log(cache);
    return cache[i][capacity];
}

// const maxProfit = memoization([4, 4, 7, 1], [5, 2, 3, 1], 8)
// console.log(maxProfit);

function bottomUp1(p, wt, cap) {
    let k = new Array(p.length + 1)
    for (let row = 0; row < k.length; row++) {
        k[row] = new Array(cap + 1).fill(0)
        // k.push(new Array(cap + 1).fill(0))
    }
    let i, w
    for (i = 1; i <= p.length; i++) {
        for (w = 1; w <= cap; w++) {
            if (wt[i - 1] > w) {
                k[i][w] = k[i - 1][w]
            } else {
                k[i][w] = Math.max(k[i - 1][w], k[i - 1][w - wt[i - 1]] + p[i - 1])
            }
        }
    }
    return k[p.length][cap]
}

const q = bottomUp1([4, 4, 7, 1], [5, 2, 3, 1], 8)
console.log(q);

function bottomUp2(profit, weight, capacity) {
    let N = profit.length, M = capacity

    let arr = new Array(N + 1)
    for (let row = 0; row < N + 1; row++) {
        arr[row] = new Array(M + 1).fill(0)
    }
    // Fill the first column and row to reduce edge cases
    // for (let i = 0; i < N; i++) {
    //     arr[i][0] = 0
    // }

    // for (let c = 0; c <= M; c++) {
    //     if (weight[0] <= c) {
    //         arr[0][c] = profit[0];
    //     }
    // }
    for (let i = 1; i <= N; i++) {
        for (let w = 1; w <= M; w++) {
            if (weight[i] > w) {
                arr[i][w] = arr[i - 1][w]
            } else {
                arr[i][w] = Math.max(arr[i - 1][w], arr[i - 1][w - weight[i]] + profit[i])
            }
        }
    }
    return arr[N - 1][M]
}

const z = bottomUp2([4, 4, 7, 1], [5, 2, 3, 1], 8)
console.log(z);
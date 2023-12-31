function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        while (j >= 0 && arr[j + 1] < arr[j]) {
            let tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
            j--;
        }
    }
    return arr;
}
const input = [4, 2, 3, 6, 5]
const res = insertionSort(input)
console.log(res);
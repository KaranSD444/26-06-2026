let a = [1, 2, 4, 5, 3, 13, 5, 67];

let b = a.sort((a, b) => a - b);

let tar = 2;

let i = 0;
let j = b.length - 1;

while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (tar > b[mid]) {
        i = mid + 1;
    }
    else if (tar < b[mid]) {
        j = mid - 1;
    }
    else {
        console.log("Element found at index:", mid);
        break;
    }
}

if (i > j) {
    console.log("Element not found");
}
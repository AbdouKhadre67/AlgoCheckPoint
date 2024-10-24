let arr = [29, 10, 14, 37, 13]; 

for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; 
    let j = i - 1;

    
    
    while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]; 
        j--;
    }

    
    arr[j + 1] = current;
}


console.log("Tableau trié:", arr);

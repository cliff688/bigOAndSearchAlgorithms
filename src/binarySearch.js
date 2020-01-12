

const binarySearch = (array, element) => {
    /*
    A simple binary search algorithm.
    return: boolean value indicating whether the element is in the array
    param: array : a sorted array of numbers
    param: element : element to be searched.
     */
    let copyOfArray = [...array];
    //this prevents modification of the original array
    let length = copyOfArray.length,
        midpoint = Math.floor(length/2);

    if (length === 1){
        return copyOfArray[0] === element
    }else if (length===0) {
        return false
    }

    if ( copyOfArray[midpoint] <= element ) {
        copyOfArray.splice(0, midpoint);
        return binarySearch(copyOfArray, element)
    } else {
        copyOfArray = copyOfArray.length > 2 ?
            copyOfArray.splice(0, midpoint + 1):
            copyOfArray.splice(0, midpoint);
        //leaving the ternary operator would splice out all the items in
        //copyOfArray and return the same copyOfArray
        return binarySearch(copyOfArray, element)
    }
};

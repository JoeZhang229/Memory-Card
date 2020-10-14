const ShuffleCards = (array) => {
    let length = array.length
    let randomNum, tempIndex;
    while (0 !== length) {
        randomNum = Math.floor(Math.random() * length);
        length--;
        tempIndex = array[length];
        array[length] = array[randomNum];
        array[randomNum] = tempIndex;
    }
    return array;
};

export default ShuffleCards;
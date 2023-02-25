const countValue = document.getElementById('counter');

const increment = () => {
    // get the vlue from UI
    let value = parseInt(countValue.textContent);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.textContent = value;
};


const decrement = () => {
        // get the vlue from UI
        let value = parseInt(countValue.textContent);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.textContent = value;
};
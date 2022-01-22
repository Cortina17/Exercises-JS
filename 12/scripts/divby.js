function divisibleBy(number) {

    // let num_arr = [2, 3, 5, 7];
    // let map_arr = num_arr.map(number % num_arr == 0);

    // for (let index = 0; index < map_arr.length; index++) {
    //     console.log(map_arr[i]);
    // }
    if(number % 2 || 3 || 5 || 7 === 0) {
        console.log(2);
    } else {
        console.log('nope');
    }

}


module.exports = divisibleBy;
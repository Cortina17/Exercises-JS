function countas(string){

    return (string.toLowerCase().split("")).filter(str => str === 'a').length++;
    
}

module.exports = countas;
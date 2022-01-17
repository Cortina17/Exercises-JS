function greater(first, second){
    return first > second ? first : second > first ? second: 'They are equals';
}

module.exports = greater;
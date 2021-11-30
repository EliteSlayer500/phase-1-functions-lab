function distanceFromHqInBlocks(blockNum) {
    if (blockNum < 42) {
      return 42 - blockNum
    } else {
      return  blockNum - 42
    }
}
function distanceFromHqInFeet(blockNum) {
    return distanceFromHqInBlocks(blockNum) * 264
}
function distanceTravelledInFeet(start, end){
    if (start < end){
        return (end - start) * 264
    }else {
        return (start - end) * 264
    }
}
function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end)
    if (distance < 400) {
        return (end - start) - 1
    }else if (distance >= 400 && distance <= 2000) {
        return (128 * .02)
    }else if (distance > 2000 && distance < 2500) {
        return (25)
    }else {
        return 'cannot travel that far'
    }
}